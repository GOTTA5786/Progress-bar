const progressBar = document.getElementById('progress-bar')
const input = document.getElementById('input')
const hideToggle = document.getElementById('hide-toggle')
const animateToggle = document.getElementById('animate-toggle')
const svg = document.querySelector('svg')

const TOTALLENGTH = Math.ceil(progressBar.getTotalLength())


input.addEventListener('change', onInputChange)
hideToggle.addEventListener('change', onHide)
animateToggle.addEventListener('change', onAnimate)

function onInputChange(){
    let value = parseInt(input.value)

    if (value < 0) value = 0;
    if (value > 100) value = 100;

    input.value = value
    progressBar.style.setProperty('stroke-dashoffset', TOTALLENGTH - TOTALLENGTH * value/100)
}

function onAnimate(){
    if (animateToggle.checked) {
        svg.classList.add('spin-animation');
    } else {
        svg.classList.remove('spin-animation');
    }
}

function onHide(){
    if(hideToggle.checked){
        document.body.classList.add('hide-content');
    }else{
        document.body.classList.remove('hide-content');
    }
}