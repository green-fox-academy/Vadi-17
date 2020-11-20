const Malvin = {
    név: 'Malvin',
    sándorIskolatársa: true,
    árpádNővére: true,
    kora: 'sándorral egykora születésű'
};

const Sandor = {
    név: 'Sándor',
    holLakik: 'Jókai ut huszonhét szám alatti lakos és mikó?',
    kivelJártIskolába: Malvin,
    // kerem: function() {}
    kerem() {
        return 'kéremkaccsojaki!';
    },
    tudomásomSzerint() {
        console.log('ez ahogy a zoxigén hihasználálsára ilyesmit hallottam én');
        console.log('magyarázta ki árpi');
    }
};

const Arpad = {
    név: 'Árpád',
    jomunkásember: true,
    sándorSzerint: 'bisztoss jómunkásember',
    pluszInfo: {
        sándorSzerint: 'semmi többet nem tudok elmondani'
    },
    kora: 'sándortól egy évvel fiatalabb',
    malvinBátyja: false
};

const zojjektum = {
    cél: 'zoxigén kihasználására',
    másodlagosCél: 'a vizbül fogja az harmincázer literbül veszi ki a zoxigént',
    űrtartalom: [30_000, 300_000, 'mittudomén'],
    zengedély: {
        megadva: true,
        kiAdtaMeg: 'kocsordi tanács részirül'
    },
    tagok: [
        /* in */ /* of */
        /* 0: */ Malvin,
        /* 1: */ Sandor,
        /* 2: */ Arpad
    ],
    atomtámadásEllenVéd: {
        nem: true,
        igen: true,
        other: 'az ellen nem véd',
        deviszont: 'a vizbül nyeri ki a zoxigént'
    },
    atomtámadásEllenVédNagyvonalakban: undefined,
    'atomtámadás ellen véd nagyvonalakban': null
};

console.log( 'zojjektum céljai:', zojjektum[ 'cél' ], 'és', zojjektum.másodlagosCél );

const property = 'űrtartalom';
console.log('ürtartalom: ', zojjektum[ property ]);

for(let tag of zojjektum.tagok) {
    console.log();
    console.log( 'zojjektum tag:' );
    console.log( tag.név );
    console.log( tag.jomunkásember );

    // hasOwnProperty: ellenorzi, hogy letezik-e a megadott property az objektumban
    if ( tag.hasOwnProperty( 'kerem' ) ) {
        console.log( tag.kerem() );
    }
}
console.log( zojjektum.atomtámadásEllenVéd.deviszont );
console.log( zojjektum.atomtámadásEllenVéd );
console.log()
// object[ 'key' ] / object.key === value
for(let key of Object.keys( zojjektum )) {
    console.log( zojjektum[ key ] );
}


