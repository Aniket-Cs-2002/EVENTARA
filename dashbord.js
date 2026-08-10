/* =========================================================
   EVENTARA DASHBOARD
========================================================= */

// =========================================================
// DATA
// =========================================================

const recentEvents = [
  {
    name: "Music Concert 2025",
    date: "03 aug 2026",
    location: "Kolkata, Salt lake",
    tickets: "$460",
    revenue: "$10,452",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Food Festivals",
    date: "10 aug 2026",
    location: "Mumbai",
    tickets: "$530",
    revenue: "$78,152",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Art & Culture Expo",
    date: "17 aug 2026",
    location: "Delhi",
    tickets: "$760",
    revenue: "$53,452",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Tech Summit",
    date: "01 sep 2026",
    location: "Bangalore",
    tickets: "$420",
    revenue: "$90,452",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=100&q=80",
  },
];

const topEvents = [
  {
    name: "Music Concert 2025",
    tickets: "2,543 Tickets",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Food Festivals",
    tickets: "2,53 Tickets",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Art & Culture Expo",
    tickets: "1,543 Tickets",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Drama Evening",
    tickets: "5,023 Tickets",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Drama Evening",
    tickets: "5,023 Tickets",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=100&q=80",
  },
];

// =========================================================
// RECENT EVENTS
// =========================================================

function renderRecentEvents() {
  const container = document.getElementById("recentEventsRows");

  if (!container) return;

  container.innerHTML = recentEvents
    .map((event) => {
      return `

            <div
                class="
                    grid
                    grid-cols-[1.55fr_1fr_1.2fr_.8fr_.8fr_48px]
                    items-center
                    min-h-[57px]
                    border-b
                    border-[#ededed]
                    px-[15px]
                    text-[13px]
                "
            >

                <!-- Event -->

                <div
                    class="
                        flex
                        items-center
                        gap-[9px]
                        min-w-0
                    "
                >

                    <img
                        src="${event.image}"
                        alt=""
                        class="
                            w-[31px]
                            h-[31px]
                            rounded-[5px]
                            object-cover
                            shrink-0
                        "
                    >

                    <span
                        class="
                            font-medium
                            truncate
                        "
                    >
                        ${event.name}
                    </span>

                </div>


                <!-- Date -->

                <span>
                    ${event.date}
                </span>


                <!-- Location -->

                <span>
                    ${event.location}
                </span>


                <!-- Tickets -->

                <span>
                    ${event.tickets}
                </span>


                <!-- Revenue -->

                <span>
                    ${event.revenue}
                </span>


                <!-- Action -->

                <button
                    class="
                        w-[32px]
                        h-[32px]
                        rounded-[6px]
                        border
                        border-[#e4e4e4]
                        text-[#a12de7]
                        flex
                        items-center
                        justify-center
                        hover:bg-[#faf2ff]
                        transition
                    "
                    data-edit="${event.name}"
                >

                    <i class="fa-regular fa-pen-to-square"></i>

                </button>

            </div>

        `;
    })
    .join("");

  // Edit buttons

  container.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      showToast(`Editing ${button.dataset.edit}`);
    });
  });
}

// =========================================================
// TOP EVENTS
// =========================================================

function renderTopEvents() {
  const container = document.getElementById("topEventsList");

  if (!container) return;

  container.innerHTML = topEvents
    .map((event) => {
      return `

            <div
                class="
                    flex
                    items-center
                    gap-[10px]
                    min-h-[39px]
                "
            >

                <img
                    src="${event.image}"
                    alt=""
                    class="
                        w-[32px]
                        h-[32px]
                        rounded-[4px]
                        object-cover
                        shrink-0
                    "
                >


                <span
                    class="
                        text-[14px]
                        font-medium
                        flex-1
                        truncate
                    "
                >
                    ${event.name}
                </span>


                <span
                    class="
                        text-[14px]
                        whitespace-nowrap
                    "
                >
                    ${event.tickets}
                </span>

            </div>

        `;
    })
    .join("");
}

// =========================================================
// TICKET DONUT CHART
// =========================================================

function initializeTicketChart() {
  const canvas = document.getElementById("ticketChart");

  if (!canvas) return;

  new Chart(canvas, {
    type: "doughnut",

    data: {
      labels: ["Sold", "Pending", "Cancel", "Refund"],

      datasets: [
        {
          data: [2543, 53, 100, 50],

          backgroundColor: ["#4a0d70", "#8123b4", "#aa3ce4", "#dca5fa"],

          borderWidth: 0,

          borderRadius: 18,

          spacing: 3,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      cutout: "68%",

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          enabled: true,
        },
      },

      animation: {
        duration: 1000,
      },
    },
  });
}

// =========================================================
// SALES CHART
// =========================================================

function initializeSalesChart() {
  const canvas = document.getElementById("salesChart");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Gradient

  const gradient = ctx.createLinearGradient(0, 0, 0, 270);

  gradient.addColorStop(0, "rgba(146,113,255,.28)");

  gradient.addColorStop(1, "rgba(146,113,255,.02)");

  new Chart(canvas, {
    type: "line",

    data: {
      labels: [
        "1 Jul",
        "4 Jul",
        "8 Jul",
        "12 Jul",
        "16 Jul",
        "20 Jul",
        "24 Jul",
      ],

      datasets: [
        {
          data: [42, 61, 47, 25, 71, 13, 60],

          borderColor: "#9271ff",

          backgroundColor: gradient,

          borderWidth: 2,

          fill: true,

          tension: 0.42,

          pointRadius: 3,

          pointHoverRadius: 5,

          pointBackgroundColor: "#ffffff",

          pointBorderColor: "#9271ff",

          pointBorderWidth: 1,
        },
      ],
    },

    options: {
      responsive: true,

      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          mode: "index",

          intersect: false,
        },
      },

      scales: {
        x: {
          grid: {
            color: "#e8e8e8",

            drawBorder: false,
          },

          ticks: {
            color: "#777",

            font: {
              size: 10,
            },
          },
        },

        y: {
          min: 0,

          max: 100,

          ticks: {
            stepSize: 20,

            color: "#777",

            font: {
              size: 10,
            },
          },

          grid: {
            color: "#e8e8e8",

            drawBorder: false,
          },
        },
      },
    },
  });
}

// =========================================================
// TOAST
// =========================================================

let toastTimer;

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.remove("translate-y-20", "opacity-0");

  toast.classList.add("translate-y-0", "opacity-100");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");

    toast.classList.add("translate-y-20", "opacity-0");
  }, 2200);
}

// =========================================================
// SIDEBAR NAVIGATION
// =========================================================

function initializeNavigation() {
  const navItems = document.querySelectorAll(".dashboard-nav");

  navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      navItems.forEach((nav) => {
        nav.classList.remove("active", "bg-[#f0e5ff]", "text-[#8f2ce3]");

        nav.classList.add("text-[#303030]");
      });

      item.classList.add("active", "bg-[#f0e5ff]", "text-[#8f2ce3]");

      item.classList.remove("text-[#303030]");

      showToast(`${item.dataset.page} selected`);
    });
  });
}

// =========================================================
// PROFILE DROPDOWN
// =========================================================

function initializeProfile() {
  const button = document.getElementById("profileToggle");

  const menu = document.getElementById("profileMenu");

  if (!button || !menu) return;

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    menu.classList.toggle("hidden");
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
}

// =========================================================
// MOBILE SIDEBAR
// =========================================================

function initializeMobileMenu() {
  const sidebar = document.getElementById("sidebar");

  const button = document.getElementById("mobileMenuButton");

  const overlay = document.getElementById("mobileOverlay");

  if (!sidebar || !button || !overlay) return;

  function openMenu() {
    sidebar.classList.remove("-translate-x-full");

    overlay.classList.remove("hidden");
  }

  function closeMenu() {
    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");
  }

  button.addEventListener("click", openMenu);

  overlay.addEventListener("click", closeMenu);

  document.querySelectorAll(".dashboard-nav").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        closeMenu();
      }
    });
  });
}

// =========================================================
// HEADER BUTTONS
// =========================================================

function initializeHeaderActions() {
  const notification = document.getElementById("notificationBtn");

  const dateButton = document.getElementById("datePickerBtn");

  if (notification) {
    notification.addEventListener("click", () => {
      showToast("You have 3 new notifications");
    });
  }

  if (dateButton) {
    dateButton.addEventListener("click", () => {
      showToast("Date filter selected");
    });
  }
}

// =========================================================
// QUICK ACTIONS
// =========================================================

function initializeQuickActions() {
  const buttons = document.querySelectorAll("main section:last-of-type button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.innerText.trim();

      if (text) {
        showToast(text);
      }
    });
  });
}

// =========================================================
// INITIALIZATION
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  renderRecentEvents();

  renderTopEvents();

  initializeTicketChart();

  initializeSalesChart();

  initializeNavigation();

  initializeProfile();

  initializeMobileMenu();

  initializeHeaderActions();

  initializeQuickActions();
});
