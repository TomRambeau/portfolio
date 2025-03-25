export const colors =  [
    '#FF001F',
    '#00A7FF',
    '#B900D8',
    '#F8E203',
    '#00DE25'
]

export function createChromino() {
    const section = document.getElementById("bg");
    if (!section) return;

    const square = document.createElement('span');

    var size = Math.random() * 50;

    square.style.width = 5 + size*3 + 'px';
    square.style.height = 5 + size + 'px';
    square.style.borderRadius= 10 + '%';

    const height = window.innerHeight;
    const width = window.innerWidth;

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

export function createSquare() {
    const section = document.getElementById("bg");
    if (!section) return;

    const square = document.createElement('span');

    var size = Math.random() * 30;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    square.style.borderRadius= 10 + '%';

    square.style.top = Math.random() * window.innerHeight - size + 'px';
    square.style.left = Math.random() * window.innerWidth - size + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    },5000)
}

export function clearBackground() {
    const section = document.getElementById("bg");
    if (!section) return;

    while(section.firstChild) {
        section.removeChild(section.lastChild);
    }
}

export function initBackground() {
    setInterval(createChromino, 300);
    window.addEventListener('resize', clearBackground);
}

export function cleanupBackground() {
    clearBackground();
    window.removeEventListener('resize', clearBackground);
}
