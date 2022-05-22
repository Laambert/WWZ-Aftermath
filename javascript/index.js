const buy = document.getElementById('buy');
const left = document.getElementById('left');
const right = document.getElementById('right');
const galery = document.getElementById("galery");
let galeryIndex = 0;

const galeryImages = [
    " images/australia.jpg",
    " images/coloseum.webp",
    " images/garden.jpg"
];

function anim() {
    const Animation = galery.animate([{
            opacity: "0.5"
        },
        {
            opacity: "1",
        }

    ], {
        duration: 800,
        easing: "linear",
        iterations: 1,
    });
}

buy.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'background: rgba(184, 17, 46, 1);';
});

left.addEventListener('click', function onClick(event) {
    if (galeryIndex == 0) {
        galeryIndex = galeryImages.length;
        anim();
        galery.style.backgroundImage = 'url(" images/default.webp")';
    } else {
        galeryIndex -= 1;
        anim();
        galery.style.backgroundImage = "url(" + galeryImages[galeryIndex] + ")";

    }
});

right.addEventListener('click', function onClick(event) {

    if (galeryIndex == galeryImages.length) {
        galeryIndex = 0;
        anim();
        galery.style.backgroundImage = 'url(" images/default.webp")';
    } else {
        anim();
        galery.style.backgroundImage = "url(" + galeryImages[galeryIndex] + ")";
        galeryIndex += 1;
    }
});