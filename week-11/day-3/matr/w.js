console.log('w.js');
window.addEventListener('message', (event) => {
    if (event.data === 'close yourself') {
        window.close();
    }
    console.log(event.data);
});