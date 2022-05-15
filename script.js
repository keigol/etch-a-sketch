var length = 16;

function run() {
    setupCanvas();
}



function setupCanvas() {
    const canvas = document.querySelector('.canvas');
    canvas.style.gridTemplateColumns = 'repeat(' + length + ', 1fr)';
    for (let i = 0; i < length*length; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    }
}

run();