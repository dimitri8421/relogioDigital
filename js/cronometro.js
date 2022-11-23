sec = 0;
min = 0;
hrs = 0;
tempoCro = "";

const play = document.querySelector('.play-btn');
const pause = document.querySelector('.pause-btn');
const resetB = document.querySelector('.reset-btn');

const horaCro = document.querySelector('.cro-hora');
const minutoCro = document.querySelector('.cro-minuto');
const segundoCro = document.querySelector('.cro-segundos');

function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    horaCro.innerHTML = (hrs > 9 ? hrs : "0" + hrs) + ":";
    minutoCro.innerHTML = (min > 9 ? min : "0" + min) + ":";
    segundoCro.innerHTML = (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    tempoCro = setTimeout(add, 1000);
}


function verificaBtns(name) {
    if ((name == "play-btn")) {
        play.style.display = "none";
        pause.style.display = "unset";
        resetB.style.display = "none";
        timer();

    } else if ((name == "pause-btn")) {
        play.style.display = "unset";
        pause.style.display = "none";
        resetB.style.display = "unset";
        clearTimeout(tempoCro);
    } else if ((name == "reset-btn")) {
        play.style.display = "unset";
        pause.style.display = "none";
        resetB.style.display = "none";
        sec = 0; min = 0; hrs = 0;
        horaCro.innerHTML = "00:"
        minutoCro.innerHTML = "00:"
        segundoCro.innerHTML = "00"
    }
}
