const longCardEvents = [
  {
    image: "./images/long-card-1.png",
    date: "10th Dec 9:00 PM",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1499"
  },
  {
    image: "./images/long-card-2.png",
    date: "18 FEB 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1799"
  },
  {
    image: "./images/long-card-3.png",
    date: "25 FEB 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "999"
  },
  {
    image: "./images/long-card-4.png",
    date: "03 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1199"
  },
  {
    image: "./images/long-card-5.png",
    date: "11 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1999"
  },
  {
    image: "./images/long-card-6.png",
    date: "18 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1599"
  },
  {
    image: "./images/long-card-7.png",
    date: "28 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "2499"
  },
  {
    image: "./images/long-card-1.png",
    date: "10th Dec 9:00 PM",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1499"
  },
  {
    image: "./images/long-card-2.png",
    date: "18 FEB 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1799"
  },
  {
    image: "./images/long-card-3.png",
    date: "25 FEB 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "999"
  },
  {
    image: "./images/long-card-4.png",
    date: "03 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1199"
  },
  {
    image: "./images/long-card-5.png",
    date: "11 MAR 2026",
    title: "Sharma India Tour 2026 by Rishab Rikhiram",
    location: "DDA Sector-10 Dwarka",
    price: "1999"
  }
];

const container = document.getElementById("film-strip-content");
const template = document.getElementById("event-card-template");

if (!container) {
    console.error("film-strip-content not found");
}

if (!template) {
    console.error("event-card-template not found");
}

if (container && template) {

    longCardEvents.forEach(event => {

        const clone = template.content.cloneNode(true);

        clone.querySelector(".event-image").src = event.image;
        clone.querySelector(".event-image").alt = event.title;

        clone.querySelector(".event-date").textContent = event.date;
        clone.querySelector(".event-title").textContent = event.title;
        clone.querySelector(".event-location").textContent = event.location;
        clone.querySelector(".event-price").textContent = `₹${event.price}`;

        container.appendChild(clone);

    });

    if (window.lucide) {
        lucide.createIcons();
    }
}