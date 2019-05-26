var current = 1;
var kolvo = 5;


tumb = new Array();
tumb[0] = new Image();
tumb[1] = new Image();
tumb[2] = new Image();
tumb[3] = new Image();
tumb[4] = new Image();



tumb[0].src = "./img/raketa.jpg";
tumb[1].src = "./img/sputnik.jpg";
tumb[2].src = "./img/bespilotnik.jpg";
tumb[3].src = "./img/kosmos.jpg";
tumb[4].src = "./img/robot.jpg";


function frw() {
    if (current < kolvo) {
        current++;
        document.images['r'].src = tumb[current - 1].src;
    }
}

function bck() {
    if (current > 1) {
        current--;
        document.images['r'].src = tumb[current - 1].src;
    }
}