const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBrocken(){
    return lamp.src.indexOf('quebrada')>-1;
}

function lampOn  () {
    if(!isLampBrocken()){
        lamp.src = './src/ligada.jpg';
}
    }
    
function lampOff  () {
    if(!isLampBrocken()){
    lamp.src = './src/desligada.jpg';
    }
}
function lampBrocken(){
    lamp.src = './src/quebrada.jpg';
}


turnOn.addEventListener ('click',lampOn);
turnOff.addEventListener ('click',lampOff);
lamp.addEventListener ('mouseover',lampOn);
lamp.addEventListener ('mouseleave',lampOff);
lamp.addEventListener('dblclick',lampBrocken);