// event listener + timer
const globals = {
    time: 10000,
    interval: null,
    ms: 100
};

function updateTimer() {
    globals.time -= globals.ms;
    const h1 = document.getElementById('timer')
    h1.textContent = globals.time/100 +" ms"
}

document.getElementById('startTimer').addEventListener('click', () => {
    globals.time = 10000;
    globals.interval = setInterval(updateTimer, globals.ms);
});
document.getElementById('endTimer').addEventListener('click', () => {
    clearInterval(globals.interval);
    globals.interval = null;
});