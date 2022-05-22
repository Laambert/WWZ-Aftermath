const buy = document.getElementById('buy');
const left = document.getElementById('left');
const right = document.getElementById('right');
const gallery = document.getElementById("gallery");
let galleryIndex = 0;

const galleryImages = [
    "images/default.webp", //0
    "images/australia.jpg", //1
    "images/coloseum.webp", //2
    "images/garden.jpg" //3
];

function anim() {
    const Animation = gallery.animate([{
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
    if (galleryIndex == 0) {
        galleryIndex = galleryImages.length - 1;
        anim();
        gallery.style.backgroundImage = "url(" + galleryImages[galleryIndex] + ")";
    } else {
        anim();
        galleryIndex -= 1;
        gallery.style.backgroundImage = "url(" + galleryImages[galleryIndex] + ")";
    }
});

right.addEventListener('click', function onClick(event) {
    if (galleryIndex >= galleryImages.length - 1) {
        galleryIndex = 0;
        anim();
        gallery.style.backgroundImage = "url(" + galleryImages[galleryIndex] + ")";
    } else {
        galleryIndex += 1;
        anim();
        gallery.style.backgroundImage = "url(" + galleryImages[galleryIndex] + ")";
    }
});