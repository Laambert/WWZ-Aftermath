const image = document.getElementsByClassName("image")[0];
const text = document.getElementsByClassName("caption")[0];

const BackgroundAnimation = image.animate([{
        transform: "scale(2.0)"
    },
    {
        transform: "scale(1.8)"
    },
    {
        transform: "scale(1.6)"
    },
    {
        transform: "scale(1.7)"
    },
    {
        transform: "scale(1.5)"
    },
    {
        transform: "scale(1.6)"
    },
    {
        transform: "scale(1.35)"
    },
    {
        transform: "scale(1.7)"
    },
    {
        transform: "scale(2.0)",
    }
], {
    duration: 50000,
    easing: "ease",
    iterations: Infinity,
});

const TextAnimation = text.animate([{
        transform: "scale(1.4)",
        transform: "rotate(0deg)"
    },
    {
        transform: "scale(1.1)",
        transform: "rotate(2deg)"
    },
    {
        transform: "scale(1.1)",
        transform: "rotate(0deg)"
    },
    {
        transform: "scale(1.1)",
        transform: "rotate(-2deg)"
    },
    {
        transform: "scale(1.4)",
        transform: "rotate(0deg)"
    }
], {
    duration: 8000,
    easing: "linear",
    iterations: Infinity,
});