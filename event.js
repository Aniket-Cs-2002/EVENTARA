const events = [
    {
        title: "Coldplay Live",
        rating: "4.9",
        date: "21 July 2026",
        time: "7:00 PM",
        description:
            "Experience an unforgettable evening filled with music, lights and breathtaking performances from one of the world's biggest bands.",
        image: "./images/event-card-1.png"
    },
    {
        title: "Alan Walker",
        rating: "4.8",
        date: "25 July 2026",
        time: "8:00 PM",
        description:
            "A spectacular electronic music show featuring stunning visuals and incredible beats.",
        image: "./images/event-card-2.png"
    },
    {
        title: "Arijit Singh",
        rating: "4.9",
        date: "30 July 2026",
        time: "6:30 PM",
        description:
            "Spend an unforgettable evening listening to India's most loved singer live in concert.",
        image: "./images/event-card-3.png"
    },
    {
        title: "Imagine Dragons",
        rating: "4.7",
        date: "4 August 2026",
        time: "8:30 PM",
        description:
            "An energetic live performance with world-famous rock anthems and stunning stage production.",
        image: "./images/event-card-4.png"
    },
    {
        title: "Maroon 5",
        rating: "4.8",
        date: "10 August 2026",
        time: "8:00 PM",
        description:
            "Enjoy an electrifying night with Maroon 5 performing their biggest hits live.",
        image: "./images/event-card-5.png"
    }
];

let current = 0;



const slider = document.getElementById("event-slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let autoSlide;
let isAnimating = false;

function wrap(i) {
    return (i + events.length) % events.length;
}

function fillCard(prefix, data) {
    document.getElementById(prefix + "Image").src = data.image;
    document.getElementById(prefix + "Title").textContent = data.title;
    document.getElementById(prefix + "Rating").textContent = data.rating;
    document.getElementById(prefix + "Date").textContent = data.date;
    document.getElementById(prefix + "Time").textContent = data.time;
    document.getElementById(prefix + "Description").textContent = data.description;
}

function render() {
    fillCard("front", events[wrap(current)]);
    fillCard("middle", events[wrap(current + 1)]);
    fillCard("back", events[wrap(current + 2)]);
}
function animateRender(callback) {

    const images = document.querySelectorAll("#event-slider img");

    images.forEach(img => {
        img.style.opacity = "0";
    });

    setTimeout(() => {

        callback();     // render() changes the src

        let loaded = 0;

        images.forEach(img => {

            if (img.complete) {
                loaded++;

                if (loaded === images.length) {
                    images.forEach(i => i.style.opacity = "1");
                }

            } else {

                img.onload = () => {

                    loaded++;

                    if (loaded === images.length) {
                        images.forEach(i => i.style.opacity = "1");
                    }

                };

            }

        });

    }, 200);
}


function nextSlide() {

    if (isAnimating) return;
    isAnimating = true;

    animateRender(() => {
        current = wrap(current + 1);
        render();
    });

    setTimeout(() => {
        isAnimating = false;
    }, 260);

}

function prevSlide() {

    if (isAnimating) return;
    isAnimating = true;

    animateRender(() => {
        current = wrap(current - 1);
        render();
    });

    setTimeout(() => {
        isAnimating = false;
    }, 260);

}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function startAuto() {
    stopAuto();
    autoSlide = setInterval(nextSlide, 5000);
}

function stopAuto() {
    clearInterval(autoSlide);
}

slider.addEventListener("mouseenter", stopAuto);
slider.addEventListener("mouseleave", startAuto);

render();
stopAuto();