let currentRotation = 0;
const cardContainer = document.querySelector('.card-container');
const body = document.body;

function updateTheme() {
    const normalizedRotation = ((currentRotation % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / 120) % 3;

    body.classList.remove('docinho-theme', 'florzinha-theme', 'lindinha-theme');

    switch (activeIndex) {
        case 0:
            body.classList.add('docinho-theme');
            break;
        case 1:
            body.classList.add('florzinha-theme');
            break;
        case 2:
            body.classList.add('lindinha-theme');
            break;
    }
}

function updateRotation() {
    cardContainer.style.transform = `rotateY(${currentRotation}deg)`;
    updateTheme();
}

function nextCard() {
    currentRotation -= 120;
    updateRotation();
}

function prevCard() {
    currentRotation += 120;
    updateRotation();
}

let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchendX < touchstartX) nextCard();
    if (touchendX > touchstartX) prevCard();
}
