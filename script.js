const length = 100;

function run() {
    setupCanvas();
}

function draw(e) {
    e.target.style.background = 'rgb(78, 78, 78)';
    console.log('hi');
}

function setupCanvas() {
    const canvas = document.querySelector('.canvas');
    canvas.style.gridTemplateColumns = 'repeat(' + length + ', 1fr)';
    for (let i = 0; i < length*length; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseenter', draw);
        canvas.appendChild(pixel);
    }
}

run();