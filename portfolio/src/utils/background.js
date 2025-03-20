const colors =  [
    '#FF001F',
    '#00A7FF',
    '#B900D8',
    '#F8E203',
    '#00DE25'
]

function createChromino() {
    const section = document.getElementById("bg");
    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 5 + size*3 + 'px';
    square.style.height = 5 + size + 'px';
    square.style.borderRadius= 10 + '%';

    height = document.getElementById("main").offsetHeight ?? document.body.offsetHeight;
    width = document.getElementById("main").offsetWidth ?? document.body.offsetWidth;

    square.style.top = (Math.random() * height) - (size*4) + 'px';
    square.style.left = (Math.random() * width) - (size*4) + 'px';

    const bg1 = colors[Math.floor(Math.random() * colors.length)];
    const bg2 = colors[Math.floor(Math.random() * colors.length)];
    const bg3 = colors[Math.floor(Math.random() * colors.length)];

    square.style.background = 'linear-gradient(90deg, ' + bg1 + ' 0%, ' + bg1 + ' 31%, #FFF 33%, ' + bg2 +' 35%, ' + bg2 + ' 64%, #FFF 66%,  ' + bg3 + ' 68%, ' + bg3 + ' 100%)';

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    },5000)
}

function createSquare() {
    const section = document.getElementById("bg");
    const square = document.createElement('span');

    var size = Math.random() * 30 * window.innerWidth;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    square.style.borderRadius= 10 + '%';

    square.style.top = Math.random() * innerHeight - size + 'px';
    square.style.left = Math.random() * innerWidth - size + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    },5000)
}

function clearBackground() {
    const section = document.getElementById("bg");
    while(section.firstChild) {
        section.removeChild(section.lastChild);
    }
}

setInterval(createChromino,300);

window.addEventListener('resize', clearBackground);

export { createChromino, clearBackground }
