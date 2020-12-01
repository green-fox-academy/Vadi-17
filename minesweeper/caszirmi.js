'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

canvasElement.width = 0;
canvasElement.height = 0;

const MinesweeperGame = {
    map: [],                    // a játék térképe
    mines: [],                  // az aknák pozíciója
    mineNumber: 10,             // az elhelyezett aknák száma
    mapSize: {
        width: 10,              // a térkép szélessége (hány darab mező)
        height: 10              // a térkép magassága (hány darab mező)
    },
    tile: {
        size: 30,               // a mező mérete
        margin: 1               // a mező kerete
    },
    tilesToReveal: 0,           // hány mezőt kell még felfedni a győzelemhez
    timer: 0,                   // másodperc számláló
    timerInterval: null,        // másodperc számláló interval
    clickListener: null,        // kattintás figyelő függvény
    rightClickListener: null,   // jobb kattintás figyelő függvény

    /*
        this = MinesweeperGame
    */

    /**
     * Generál egy új játékmezőt.
     * - aknákat helyez el véletlenszerűen
     * - feltölti a mezők alap értékeit
     */
    createMap() {
        // akna generátor
        while( this.mines.length < this.mineNumber ) {
            // random sor és oszlop
            const rowIndex = Math.round( ( this.mapSize.height - 1 ) * Math.random() );
            const columnIndex = Math.round( ( this.mapSize.width - 1 ) * Math.random() );

            if (!this.mines.find( mine => mine.rowIndex === rowIndex && mine.columnIndex === columnIndex)) {
                // ha nincs még az adott mezőn akna, akkor létrehozzuk
                this.mines.push( { rowIndex, columnIndex } );
            }
        }

        // térkép inicializálás
        for(let row = 0; row < this.mapSize.height; row++) {
            this.map[row] = [];
            for(let column = 0; column < this.mapSize.width; column++) {
                // a mező alapértéket kap
                this.map[row][column] = {
                    value: 0,           // mező értéke: 0-8 vagy 'mine', ahol a számok azt jelölik, hogy a mező körül hány db akna található, a 'mine' pedig azt, hogy a mező alatt akna van
                    revealed: false,    // felfedtük-e már (erre azért van szükség, hogy ne hajtson végre végtelenszer műveletet ugyanazon a mezőn - pl. a szomszédok felfedésénél)
                    flagged: false      // megjelöltük-e zászlóval, mint lehetséges aknalelőhely
                };
            }
        }

        // aknák inicializálása
        this.mines.forEach( mine => {
            const { rowIndex, columnIndex } = mine;

            // a mező értékével jelöljük
            this.map[rowIndex][columnIndex].value = 'mine';

            // az aknamező körüli szomszédos 8 mező értékeit növelni kell 1-gyel, mert plusz egy akna (ez) van mellettük
            this.processNeighbourTiles( rowIndex, columnIndex, ( neighbourRowIndex, neighbourColumnIndex ) => {
                this.map[neighbourRowIndex][neighbourColumnIndex].value++;
            } );
        } );

        // amennyi mezőt fel kell még fednünk a győzelemhez
        // azért külön változóban tároljuk, mert így nem kell minden kattintáskor végigmenni a 2D tömb (map) elemein, hogy megszámoljuk, mennyi van még hátra
        this.tilesToReveal = this.mapSize.width * this.mapSize.height - this.mineNumber;
    },

    /**
     * A szomszédos mezők feldolgozása során meghívott callback függvény.
     * @callback processNeighbourCallback
     * @param {number} neighbourRowIndex
     * @param {number} neighbourColumnIndex
     */

    /**
     * A paraméterben megadott mező körüli szomszédos mezőkre meghívja/végrehajtja a `callbackFn` függvényt.
     * @param {number} rowIndex - A vizsgált mező sorának indexe.
     * @param {number} columnIndex - A vizsgált mező oszlopának indexe.
     * @param {processNeighbourCallback} callbackFn - Minden egyes szomszédos elemre meghívott eljárás. Paraméterei a szomszédos mező sorának indexe és oszlopának indexe.
     */
    processNeighbourTiles(rowIndex, columnIndex, callbackFn) {
        row_loop:   // külső ciklus címke
        for(let neighbourRowIndex = rowIndex - 1; neighbourRowIndex <= rowIndex + 1; neighbourRowIndex++) {
            column_loop:    // belső ciklus címke
            for(let neighbourColumnIndex = columnIndex - 1; neighbourColumnIndex <= columnIndex + 1; neighbourColumnIndex++) {
                // az alábbi feltételeket egyetlen if-be is rakhatnám, de így áttekinthetőbb

                // ha balra vagy felfelé lóg ki a térképről
                if (neighbourRowIndex < 0 || neighbourColumnIndex < 0) {
                    continue column_loop; // csak a belső ciklusra vonatkozik
                }

                // ha jobbra vagy lefelé lóg ki a térképről
                if (neighbourRowIndex >= this.mapSize.height || neighbourColumnIndex >= this.mapSize.width) {
                    continue column_loop; // csak a belső ciklusra vonatkozik
                }

                const neighbourTile = this.map[neighbourRowIndex][neighbourColumnIndex];

                // a szomszédos akna mezőkkel nem foglalkozik
                if (neighbourTile.value === 'mine') {
                    continue column_loop; // csak a belső ciklusra vonatkozik
                }

                // callback eljárást meghívja és átadja neki a szomszéd mező sorának indexét és oszlopának indexét
                callbackFn(neighbourRowIndex, neighbourColumnIndex);
            }
        }
    },

    /**
     * Kirajzolja a játékmezőt/térképet.
     */
    drawMap() {
        this.map.forEach( ( row, rowIndex ) => {
            row.forEach( ( cell, columnIndex ) => {
                this.drawUnknownTile(rowIndex, columnIndex);
            } );
        } );
    },

    /**
     * Ismeretlen (nem felfedett) mezőt rajzol. (Ismeretlen mezőnek csak háttere van.)
     * @param {number} rowIndex - A kirajzolni kívánt mező sorának indexe.
     * @param {number} columnIndex - A kirajzolni kívánt mező oszlopának indexe.
     */
    drawUnknownTile(rowIndex, columnIndex) {
        const { x, y, size } = this.calculatePositionByIndex(rowIndex, columnIndex);

        ctx.fillStyle = '#777';
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.closePath();
        ctx.fill();
    },

    /**
     * Ismert (felfedett) mezőnek rajzol hátteret. (A mező tartalmát másik metódus rajzolja ki.)
     * @param {number} rowIndex - A kirajzolni kívánt mező sorának indexe.
     * @param {number} columnIndex - A kirajzolni kívánt mező oszlopának indexe.
     */
    drawKnownTileBackround(rowIndex, columnIndex) {
        const { x, y, size } = this.calculatePositionByIndex(rowIndex, columnIndex);

        ctx.fillStyle = '#eee';
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.closePath();
        ctx.fill();
    },

    /**
     * Ismert (felfedett) mezőt rajzol.
     * Ha akna van a mezőn, akkor nem rajzolja ki (hanem a drawMine()).
     * Ha 0 a mező értéke, akkor csak hátteret rajzol.
     * @param {number} rowIndex - A kirajzolni kívánt mező sorának indexe.
     * @param {number} columnIndex - A kirajzolni kívánt mező oszlopának indexe.
     */
    drawKnownTile(rowIndex, columnIndex) {
        const { x, y, size } = this.calculatePositionByIndex(rowIndex, columnIndex);
        const tile = this.map[rowIndex][columnIndex];

        // REFAKTORÁLÁS!
        // Említettem közben, hogy ezeket rosszul szerveztem, de sajnos a refaktorálásra már nem maradt idő.
        // Ez a kódrészlet a clickTile() metódus felelőssége (eldönteni, hogy mi történjen a kattintásra), ezért áthelyezem oda.
        // if (tile.value === 'mine') {
        //     return;
        // }
        // if (tile.revealed) {
        //     return;
        // }
        // tile.revealed = true;
        // this.tilesToReveal--;

        // megrajzoljuk a hátteret (ha a mező 0 értékű, akkor csak a háttér lesz kirajzolva)
        this.drawKnownTileBackround(rowIndex, columnIndex);

        // REFAKTORÁLÁS!
        // Mivel nem a drawKnownTile() metódus felelőssége eldönteni, hogy mit rajzolhat ki és mit nem, ezért a szomszédok feldolgozása a clickTile()-ba kerül.
        // if (tile.value === 0) {
        //     this.processNeighbourTiles(rowIndex, columnIndex, ( neighbourRowIndex, neighbourColumnIndex ) => this.drawKnownTile( neighbourRowIndex, neighbourColumnIndex ));
        // }
        //
        // helyette módosul a feltétel alább (a biztonság kedvéért leellenőrzöm itt is)

        // if (tile.value !== 0 && tile.value !== 'mine') => ugyanaz az ellenőrzés, mint a következő:
        if (!['mine', 0].includes(tile.value)) {
            // a 0-t nem írjuk ki, az aknát pedig egy másik metódussal
            // a mezőre számot rajzolunk és színezzük
            const colors = ['blue', 'green', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'cyan'];
            ctx.fillStyle = colors[ tile.value - 1 ];
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '20px sans-serif';
            ctx.fillText(tile.value, x + size / 2, y + size / 2);
        }

        // REFAKTORÁLÁS!
        // A fenti kódrészlettel együtt ez is a clickTile()-ba kerül.
        // if (this.tilesToReveal === 0) {
        //     this.finishGame( true );
        // }
    },

    /**
     * Akna kirajzolása.
     * @param {*} rowIndex  - A kirajzolni kívánt mező sorának indexe.
     * @param {*} columnIndex  - A kirajzolni kívánt mező oszlopának indexe.
     */
    drawMine(rowIndex, columnIndex) {
        const { x, y, size } = this.calculatePositionByIndex(rowIndex, columnIndex);
        const image = document.querySelector('img#mine'); // az akna képe a HTML IMG elemből

        // vagy sima háttérrel
        // this.drawKnownTileBackround(rowIndex, columnIndex);

        // vagy piros háttérrel
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.closePath();
        ctx.fill();

        // akna kép kirajzolása
        ctx.drawImage( image, x, y, size, size );
    },

    /**
     * Az összes aknát kirajzolja.
     * Önmagában egyetlen aknát nem rajzolunk, mert ha aknára kattintunk, akkor vesztettünk, és felfedjük az összeset.
     */
    drawMines() {
        this.mines.forEach( mine => {
            this.drawMine( mine.rowIndex, mine.columnIndex );
        } );
    },

    /**
     * Zászló kirajzolása az ismeretlen mezőre.
     * @param {*} rowIndex - A zászló mező sorának indexe.
     * @param {*} columnIndex - A zászló mező oszlopának indexe.
     */
    drawFlag(rowIndex, columnIndex) {
        const { x, y, size } = this.calculatePositionByIndex(rowIndex, columnIndex);
        const image = document.querySelector('img#flag'); // a zászló képe a HTML IMG elemből

        // zászló kép kirajzolása
        ctx.drawImage( image, x, y, size, size );
    },

    /**
     * Ez a metódus hajtja végre kattintáskor a műveleteket.
     * @param {*} rowIndex - A kattintott mező sorának indexe.
     * @param {*} columnIndex  - A kattintott mező oszlopának indexe.
     */
    clickTile(rowIndex, columnIndex) {
        const tile = this.map[rowIndex][columnIndex];

        // a már felfedett mezőre kattintáskor nem csinálunk semmit
        if (tile.revealed) {
            // a return itt csak azt a célt szolgálja, hogy ne fusson tovább a függvény
            // ha nem használnánk return-t, akkor a kód alábbi részét else ágba kellene rakni (vagy if (!tile.revealed) {} ágba)
            // így viszont áttekinthetőbb, és a return (undefined) értékkel nem okozunk problémát, hiszen a metódustól sehol nem várunk visszatérési értéket
            return;
        }

        // a zászlóval jelölt mezőre kattintáskor nem csinálunk semmit
        if (tile.flagged) {
            return;
        }

        // beállítjuk, hogy felfedtük
        tile.revealed = true;
        // csökkentjük a hátralévő mezők számát
        this.tilesToReveal--;

        // ha aknamező, akkor kirajzoljuk az aknákat és vesztettünk
        if (tile.value === 'mine') {
            this.drawMines();
            this.finishGame();
        }
        // ha 0-8 értékű a mező, akkor kirajzoljuk
        else {
            this.drawKnownTile(rowIndex, columnIndex);

            // ha 0 értékű mező, akkor a szomszédokat is feldolgozzuk (imitáljuk a kattintást)
            if (tile.value === 0) {
                this.processNeighbourTiles(rowIndex, columnIndex, ( neighbourRowIndex, neighbourColumnIndex ) => this.clickTile( neighbourRowIndex, neighbourColumnIndex ));
            }
        }

        // ha minden mezőt felfedtünk, akkor nyertünk
        if (this.tilesToReveal === 0) {
            this.finishGame( true );
        }
    },

    /**
     * Ez a metódus hajtja végre jobb egérgombbal kattintáskor a műveleteket.
     * (Zászló elhelyezés.)
     * @param {*} rowIndex - A kattintott mező sorának indexe.
     * @param {*} columnIndex  - A kattintott mező oszlopának indexe.
     */
    rightClickTile(rowIndex, columnIndex) {
        const tile = this.map[rowIndex][columnIndex];

        // REFAKTORÁLÁS!
        // Kimaradt a megoldás közben, hogy:
        //
        // a már felfedett mezőre nem rakunk zászlót
        if (tile.revealed) {
            return;
        }

        // a mező flagged értékét megváltoztatjuk (ha true volt, akkor false-ra, ha false volt, akkor true-ra)
        tile.flagged = !tile.flagged;

        // ha meg van jelölve, akkor kirajzoljuk a zászlóz
        if (tile.flagged){
            this.drawFlag(rowIndex, columnIndex);    
        }
        // ha nincs megjelölve, akkor visszarajzoljuk sima ismeretlen mezővé
        else {
            this.drawUnknownTile(rowIndex, columnIndex);
        }
    },

    /**
     * @typedef {Object} Position
     * @property {number} x - Az X kezdő koordináta (bal felső sarok).
     * @property {number} y - Az Y kezdő koordináta (bal felső sarok).
     * @property {number} size - A mező mérete.
     */

    /**
     * Kiszámítja a megadott indexű mező kezdő koordinátáit (bal felső sarok).
     * @param {*} rowIndex - A vizsgált mező sorának indexe.
     * @param {*} columnIndex - A vizsgált mező oszlopának indexe.
     * @return {Position} A vizsgált mező mérete és bal felső sarkának X és Y koordinátája.
     */
    calculatePositionByIndex(rowIndex, columnIndex) {
        const size = this.tile.size;
        const x = columnIndex * size + columnIndex * this.tile.margin;
        const y = rowIndex * size + rowIndex * this.tile.margin;

        return { x, y, size };
    },

    /**
     * @typedef {Object} Index
     * @property {number} rowIndex - A sor indexe.
     * @property {number} columnIndex - Az oszlop indexe.
     */

    /**
     * Kiszámítja a megadott koordinátapárhoz tartozó mező sorának indexét és oszlopának indexét.
     * @param {number} x - A vizsgált X koordináta.
     * @param {number} y - A vizsgált Y koordináta.
     * @return {Index} A vizsgált mező sorának indexe és oszlopának indexe.
     */
    calculateIndexByPosition(x, y) {
        const rowIndex = Math.floor( y / ( this.tile.size + this.tile.margin * 2 ) );
        const columnIndex = Math.floor( x / ( this.tile.size + this.tile.margin * 2 ) );

        return { rowIndex, columnIndex };
    },

    /**
     * A canvas-hez hozzáad két listener-t:
     * - az egyik a kattintást figyeli
     * - a másik a jobb gombbal történő kattintást figyeli
     */
    addClickListeners() {
        // a listener függvények arrow function-ök!
        // ez azért fontos, mert a 'this' kontextus a MinesweeperGame marad (ez kell pl. a this.clickTile() híváshoz)
        // klasszikus függvénnyel a 'this' kontextus a DOM Canvas Element lenne (amire kattintunk a weblapon)

        // a két függvényt azért kell eltárolni, mert úgy távolíthatjuk el, ha ismerjük

        // bal kattintás listener függvény
        this.clickListener = ( event ) => {
            event.preventDefault(); // a default eseményt megszakítja

            const mouseX = parseInt( event.layerX );
            const mouseY = parseInt( event.layerY );
            const { rowIndex, columnIndex } = this.calculateIndexByPosition(mouseX, mouseY);

            // a clickTile() végzi el a műveletet kattintáskor
            this.clickTile(rowIndex, columnIndex);
        };

        // jobb kattintás listener függvény
        this.rightClickListener = ( event ) => {
            event.preventDefault(); // a default eseményt megszakítja

            const mouseX = parseInt( event.layerX );
            const mouseY = parseInt( event.layerY );
            const { rowIndex, columnIndex } = this.calculateIndexByPosition(mouseX, mouseY);

            // a rightClickTile() végzi el a műveletet kattintáskor
            this.rightClickTile(rowIndex, columnIndex);
        };

        // hozzáadja őket a canvas-hez
        canvasElement.addEventListener( 'click', this.clickListener );
        canvasElement.addEventListener( 'contextmenu', this.rightClickListener );
    },

    /**
     * Elvátolítja a listener függvényeket a canvas-ről, hogy ne legyen a tobbiakban kattintható.
     */
    removeClickListeners() {
        // eltávolítja a listener-eket a canvas-ről
        canvasElement.removeEventListener( 'click', this.clickListener );
        canvasElement.removeEventListener( 'contextmenu', this.rightClickListener );
        this.clickListener = null;
        this.rightClickListener = null;
    },

    /**
     * Új játékot kezd.
     * @param {number} width - A játékmező/térkép szélessége (hány db mező).
     * @param {number} height - A játékmező/térkép magassága (hány db mező).
     * @param {number} mineNumber - Elhelyezett aknák száma.
     */
    startGame(width, height, mineNumber) {
        // canvas tiszta lappal indul
        ctx.clearRect( 0, 0, canvasElement.width, canvasElement.height );

        // eltávolítja az eddigi mezőket és aknákat (ha voltak)
        this.map = [];
        this.mines = [];

        // beállítja a játék paramétereit
        // default értékek = 10 (ha nem truthy az érték, akkor a default-ot használja)
        this.mineNumber = mineNumber || 10;
        this.mapSize.width = width || 10;
        this.mapSize.height = height || 10;

        // a canvas teljes méretét a térkép méretéhez igazítja
        canvasElement.width = this.mapSize.width * ( this.tile.size + this.tile.margin );
        canvasElement.height = this.mapSize.height * ( this.tile.size + this.tile.margin );

        // létrehozza a térképet, kirajzolja, kattinthatóvá teszi a canvas-t és elindítja az idő számlálót
        this.createMap();
        this.drawMap();
        this.addClickListeners();
        this.startTimer();
    },

    /**
     * Befejezi a játékot.
     * @param {boolean} [isWin=false] - Nyeréssel vagy vesztéssel fejeződött-e be a játék.
     */
    finishGame( isWin = false ) {
        // eltávolítja a kattintás listener-eket és leállítja az idő számlálót
        this.removeClickListeners();
        this.endTimer();

        // a canvas közepére kiírja, hogy milyen módon fejeződött be a játék
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `${ canvasElement.width / 8 }px sans-serif`; // a font méretét a canvas méretéhez igazítja
        if (isWin) {
            ctx.fillStyle = 'green';
            ctx.fillText('GYŐZTÉL :)', canvasElement.width / 2, canvasElement.height / 2);
        }
        else {
            ctx.fillStyle = 'red';
            ctx.fillText('VESZTETTÉL :(', canvasElement.width / 2, canvasElement.height / 2);
        }
    },

    /**
     * Elindítja a másodperc számlálót.
     */
    startTimer() {
        // ebben számolja az eltelt másodperceket
        this.timer = 0;
        // ez pedig másodpercenként (1000 ms) növeli azt és kiírja a weblapra
        this.timerInterval = setInterval( () => {
            this.timer++;
            document.querySelector('div#timer span').innerText = this.timer;
        }, 1000 );
    },

    /**
     * Leállítja a másodperc számlálót.
     */
    endTimer() {
        clearInterval( this.timerInterval );
        this.timerInterval = null;
    }
};

// az új játék gombra elhelyez egy kattintás listener-t
// kattintásra indul új játék
document.querySelector('button#newGame').addEventListener( 'click', () => {
    // a megadott értékeket kiolvassa
    // parseInt() segítségével integer-ré konvertálja, mert érkezhet string-ként is (pl. input mező értéke string)
    const width = parseInt( document.querySelector('input#width').value );
    const height = parseInt( document.querySelector('input#height').value );
    const mineNumber = parseInt( document.querySelector('input#mineNumber').value );

    // új játékot indít
    MinesweeperGame.startGame(width, height, mineNumber);
} );

/*
    ÚJDONSÁG, amiről még nem tanultunk:
    A HTML elemekre helyezhető event listener-ek.
    Ezekkel különböző eseményekre iratkozhatunk fel (pl. click, change, mouseover, keydown).
    A lényege az, hogy az addEventListener() segítségével feliratkozunk, és megadjuk neki a callback függvényt, hogy mit hívjon meg, amikor az esemény történik.
    Mindig, amikor az esemény történik a HTML elemen, akkor a callback függvény meghívódik.
    (Nem kötelező )
    DOM_ELEMENT.addEventListener( 'click', function( event ) {
        // !!!!! 'this' = létrehozás pillanatában érvényes 'this'
        console.log( '(classic) rám kattintottál' );
    } );
    DOM_ELEMENT.addEventListener( 'click', ( event ) => {
        // !!!!! 'this' = DOM_ELEMENT
        console.log( '(arrow) rám kattintottál' );
    } );
    FONTOS!
    A klasszikus függvény és az arrow function közötti lényeges különbség a 'this' kontextus.
    Klasszikus függvény: a híváskor kap 'this' kontextust
    Arrow function: a létrehozáskor kap 'this' kontextust
    Ha a továbbiakban nem szeretnénk, hogy 'hallgatózzon' az eseményekre, akkor a removeEventListener() segítségével el is távolíthatjuk.
    Ehhez viszont ismernünk kell callback függvényt, amit elhelyeztünk 'hallgatózni'. Ekkor érdemes eltárolni.
    const listener1 = ( event ) => console.log( 'rám kattintottál' );
    
    DOM_ELEMENT.addEventListener( 'click', listener1 );
    DOM_ELEMENT.removeEventListener( 'click', listener1 );
*/ 