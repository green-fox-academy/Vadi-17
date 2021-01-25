
document.querySelector('ul li').onclick = function() {
    console.log('alma');
};

document.querySelector('ul li').onclick = null;


// MENU onClick handler
function menuClickHandler(event) {
    // console.log(this === event.currentTarget);

    const elem = event.target; // a

    // elem.parentElement.parentElement.querySelectorAll('li a').forEach(a => {
    //     a.classList.remove('menu-active');
    // });
    elem.parentElement/* li */.parentElement/* ul */.querySelector('li a.menu-active').classList.remove('menu-active');
    elem.classList.add('menu-active');

    // const divId = elem.getAttribute('data-div');
    const divId = elem.dataset.div;
    
    document.querySelector('div.tab-content.tab-active').classList.remove('tab-active');
    document.querySelector(`#${ divId }`).classList.add('tab-active');
}

document.querySelectorAll('ul li a').forEach(a => {
    a.addEventListener('click', menuClickHandler);
    // a.addEventListener('click', (event) => {
    //     console.log(this === event.target);
    // });
});
//

function createMessageDiv(message) {
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('message-container');
    
    const topDiv = document.createElement('div');
    topDiv.classList.add('message-header');

    const dateDiv = document.createElement('div');
    const dateTime = new Date();
    dateDiv.textContent = `${ dateTime.getFullYear() }.${ dateTime.getMonth() + 1 }.${ dateTime.getDate() }. ${ dateTime.getHours() }:${ dateTime.getMinutes() }`

    const deleteDiv = document.createElement('div');
    const deleteLink = document.createElement('a');
    deleteLink.textContent = 'X';
    deleteLink.classList.add('delete');
    deleteLink.addEventListener('click', () => {
        containerDiv.remove();
    });
    deleteDiv.appendChild(deleteLink);

    topDiv.appendChild(dateDiv);
    topDiv.appendChild(deleteDiv);

    const messagesDiv = document.createElement('div');
    messagesDiv.textContent = message;

    containerDiv.appendChild(topDiv);
    containerDiv.appendChild(messagesDiv);

    return containerDiv;
}

// INPUT onChange handler
function inputChangeHandler(event) {
    const elem = event.target;
    const messagesDiv = document.querySelector('#alma-div div:nth-of-type(2)');

    messagesDiv.appendChild(createMessageDiv(elem.value));

    elem.value = '';
}
function inputInputHandler(event) {
    const elem = event.target;

    document.querySelector('#alma-div div:nth-of-type(2) p:nth-of-type(2)').textContent = elem.value;
}

document.querySelectorAll('textarea').forEach(input => {
    input.addEventListener('change', inputChangeHandler);
    // input.addEventListener('input', inputInputHandler);
});
//

// RESIZE onResize handle
function windowResizeHandler(event) {
    const footer = document.querySelector('footer');

    footer.querySelector('#screen-width span').textContent = window.innerWidth;
    footer.querySelector('#screen-height span').textContent = window.innerHeight;
}
window.addEventListener('resize', windowResizeHandler);
// https://stackoverflow.com/questions/49475795/resize-event-not-triggered-on-div
// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
//

// SCROLL
// Listener
document.querySelector('#messages').addEventListener('scroll', (event) => {
    const elem = event.target;
    console.log(`X=${ elem.scrollLeft }, Y=${ elem.scrollTop }`);
});
// UP
document.querySelector('.up-arrow').addEventListener('mousedown', (event) => {
    const elem = event.target;
    elem.setAttribute('data-isMouseDown', true);

    const intervalId = setInterval(() => {
        const target = document.querySelector('.up-arrow');

        if (target.getAttribute('data-isMouseDown') === 'false') {
            clearInterval(target.getAttribute('data-isMouseDownInterval'));
            target.setAttribute('data-isMouseDownInterval', null);
            return;
        }

        const messages = document.querySelector('#messages');
        messages.scrollBy(0, -10);
    }, 10);

    elem.setAttribute('data-isMouseDownInterval', intervalId);
});
document.querySelector('.up-arrow').addEventListener('mouseup', (event) => {
    const elem = event.target;
    elem.setAttribute('data-isMouseDown', false);
});
// DOWN
document.querySelector('.down-arrow').addEventListener('mousedown', (event) => {
    const elem = event.target;
    elem.setAttribute('data-isMouseDown', true);

    const intervalId = setInterval(() => {
        const target = document.querySelector('.down-arrow');

        if (target.getAttribute('data-isMouseDown') === 'false') {
            clearInterval(target.getAttribute('data-isMouseDownInterval'));
            target.setAttribute('data-isMouseDownInterval', null);
            return;
        }

        const messages = document.querySelector('#messages');
        messages.scrollBy(0, 10);
    }, 10);

    elem.setAttribute('data-isMouseDownInterval', intervalId);
});
document.querySelector('.down-arrow').addEventListener('mouseup', (event) => {
    const elem = event.target;
    elem.setAttribute('data-isMouseDown', false);
});
//


// KEYDOWN
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyL') {
        const div = document.createElement('div');
        div.className = 'bye';
        div.textContent = 'Szép napot, sziasztok!';

        document.body.replaceChildren(div);
    }
});

//


const obj = {
    name: 'Test Object',
    getName() {
        return this.name;
    }
};

const hackerObj = {
    name: 'Hacker Object'
};

obj.getName = obj.getName.bind(hackerObj);

console.log(obj.getName());