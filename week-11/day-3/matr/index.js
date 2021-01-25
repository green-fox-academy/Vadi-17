 

// Mi a DOM?
// Document Object Model

// Része a JavaScript-nek a DOM?
// DOM + JS = API (Application Programming Interface)

// Mi az a Window objektum?
// globalis scope

// alert('helóbeló');
// confirm('megerősíted?');
// let ttt = prompt('írd be a neved');
// confirm(ttt);
// alert(ttt);

const newWindow = window.open('w.html', '_blank', 'width=300,height=300');

// setTimeout(() => {
//     newWindow.postMessage('close yourself');
// }, 1000);

setTimeout(() => {
    newWindow.close();
    window.blur();
    newWindow.focus();
    newWindow.resizeTo(400, 500);
}, 2000);

// for (let i = 0; i < 5; i++) {
//     window.open('w.html', '_blank', `width=300,height=300,top=${i*10},left=${i*10}`);
// }

// Mi az a window.document objektum?
// a weboldal tartalma
// fastruktúra
// Node-okból áll, csomópontokból


// Mi a különbség a Node (csomópont) és az Element (Elem) között?
// https://developer.mozilla.org/en-US/docs/Web/API/Element

// document.children[0].children[1].children[0].children[0].childNodes
// document.children[0].children[1].children[0].children[0].children

// Hogyan tudsz elérni különböző elemeket?
// ID alapján?
// Class alapján?
// Tag alapján?
// Bármilyen CSS szelektor alapján?
// Mi a különbség a querySelector és a querySelectorAll között?

// document.getElementsByTagName('h1');
// document.getElementById('first-p');
// document.getElementsByClassName('other-p');
// document.querySelector('h1');
// document.querySelector('#first-p');
// document.querySelector('.other-p');
// document.querySelectorAll('.other-p');

// Mi a különbség a querySelectorAll('.class') és a getElementsByClassName('class') között?
// querySelectorAll: NodeList-et ad vissza (statikus, nem live)
// getElementsBy...: HTMLCollectiont-t ad vissza (live)

// document.querySelectorAll('p[class=other-p]');
// document.querySelectorAll('form input[required]');
// document.querySelectorAll('form input:optional');

// Hogyan tudsz új Elemet létrehozni?
// const div = document.createElement('div');

// Hogyan fűzhetsz hozzá egy Elemet a DOM-hoz?
// document.getElementsByTagName('main').item(0).appendChild(div);
// const main = document.getElementsByTagName('main').item(0);
// main.insertBefore(div, main.children[0]);
// egy elemet (html elem példány) nem lehet többször a fához adni

// Hogyan mozgatható egy Elem a DOM-ban?
// mozgatni is a hozzáfűző metódusokkal lehet, ha már létezik a fában az elem

// Hogy tudsz egy Elemet eltávolítani a DOM-ból?
// document.querySelector('p:last-of-type').remove();

// Hogyan módosítható egy elem szövege?
// const p = document.querySelector('p:first-of-type');

// Mi a különbség az innerText, textContent és az innerHTML között??

// Hogy tudsz attribútumokat lekérdezni/módosítani?
// p.setAttribute('teszt', 'teszt-attr');
// p.getAttribute('teszt');

// Hogyan adhatóak egyedi attribútomok az Elemekhez?
// p.dataset.id = 44322; => "data-id" attributum

// Hogy tudod módosítani az Elemek stílusát?
// p.style.background = 'red';
// a style objektum csak a felülírt, adott elemre jellemző egyedi stílusokat tartalmazza
// - ilyen a program által beállított (pl. p.style)
// - ilyen a style attribútumban megadott (pl. header.style) (az mindig csak az adott elemre jellemző - legspecifikusabb)
// a <style>-ban és a CSS fájlokban megadottat nem (pl. main background)
// - azt a getComputedStyle() metódussal lehet lekérni

// Hogy lehet új class-t adni egy Elemhez?
// p.className = 'first-class second-class';
// p.classList.add('first-class');
// p.classList.add('second-class');
// p.classList.remove('first-class');
// p.classList.toggle('second-class');
// + p.classList.contains('second-class');

// Mi a különbség a className és a classList property (tulajdonság) között?
// className: string-ként tartalmazza az attribútum értékét
// classList: listaként tartalmazza, beépített metódusokkal

// Mire haszáljuk a classList.toggle-t?
// a toggle egy syntactic sugar a ki-bekapcsolgatásra
// ellenkező esetben "if(hasClass) removeClass else addClass" megoldás kellene mindig

// Mire használjuk az onclick property-t?
