/* =========================================================
   DASHBOARD DATA
========================================================= */

const dashboardData = {

  metrics: [
    {
      title: "Total Events",
      value: "22",
      change: "17%",
      direction: "up",
      period: "This Month",
      icon: "calendar",
      iconBg: "#FDE6F1",
      iconColor: "#F2458E"
    },

    {
      title: "Total Users",
      value: "3,520",
      change: "48%",
      direction: "up",
      period: "This Month",
      icon: "users",
      iconBg: "#F1E4FC",
      iconColor: "#A437E6"
    },

    {
      title: "Total Tickets Sold",
      value: "3,230",
      change: "25%",
      direction: "down",
      period: "This Month",
      icon: "ticket",
      iconBg: "#FCE8E3",
      iconColor: "#FF6534"
    },

    {
      title: "Total Revenue",
      value: "9,45,209",
      change: "25%",
      direction: "up",
      period: "This Month",
      icon: "rupee",
      iconBg: "#E8EDFC",
      iconColor: "#315BEA"
    }
  ],


  recentEvents: [
    {
      name: "Music Concert 2025",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=120&q=80",
      date: "03 aug 2026",
      location: "Kolkata, Salt lake",
      tickets: "$460",
      revenue: "$10,452"
    },

    {
      name: "Food Festivals",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=120&q=80",
      date: "10 aug 2026",
      location: "Mumbai",
      tickets: "$530",
      revenue: "$78,152"
    },

    {
      name: "Art & Culture Expo",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=120&q=80",
      date: "17 aug 2026",
      location: "Delhi",
      tickets: "$760",
      revenue: "$53,452"
    },

    {
      name: "Tech Summit",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=120&q=80",
      date: "01 sep 2026",
      location: "Bangalore",
      tickets: "$420",
      revenue: "$90,452"
    },

    {
      name: "Startup Expo",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=120&q=80",
      date: "08 sep 2026",
      location: "Hyderabad",
      tickets: "$680",
      revenue: "$72,300"
    },

    {
      name: "Music Night",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=120&q=80",
      date: "15 sep 2026",
      location: "Pune",
      tickets: "$590",
      revenue: "$61,200"
    }
  ],


  ticketOverview: {

    total: "3,260",

    labels: [
      "Sold",
      "Pending",
      "Cancel",
      "Refund"
    ],

    values: [
      843,
      153,
      130,
      510
    ],

    colors: [
      "#431064",
      "#7425A0",
      "#A437E6",
      "#D7B0F3"
    ]

  },


  salesOverview: {

    labels: [
      "1 Jul",
      "4 Jul",
      "8 Jul",
      "12 Jul",
      "16 Jul",
      "20 Jul",
      "24 Jul"
    ],

    values: [
      40,
      61,
      46,
      25,
      70,
      13,
      59
    ]

  },


  topEvents: [

    {
      name: "Music Concert 2025",
      tickets: "2,543 Tickets",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Food Festivals",
      tickets: "2,53 Tickets",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Art & Culture Expo",
      tickets: "1,543 Tickets",
      image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Drama Evening",
      tickets: "5,023 Tickets",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Drama Evening",
      tickets: "5,023 Tickets",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Tech Summit",
      tickets: "4,120 Tickets",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=100&q=80"
    }

  ],


  quickActions: [

    {
      label: "Add New Events",
      icon: "calendar"
    },

    {
      label: "View All Tickets",
      icon: "ticket"
    },

    {
      label: "View All Users",
      icon: "users"
    },

    {
      label: "Go to Trash",
      icon: "trash"
    }

  ]

};



/* =========================================================
   ICONS
========================================================= */

const icons = {

  calendar: `
    <i data-lucide="calendar-days" class="h-7 w-7"></i>
  `,

  users: `
    <i data-lucide="users" class="h-7 w-7"></i>
  `,

  ticket: `
    <i data-lucide="ticket" class="h-7 w-7"></i>
  `,

  rupee: `
    <i data-lucide="indian-rupee" class="h-7 w-7"></i>
  `,

  trash: `
    <i data-lucide="trash-2" class="h-7 w-7"></i>
  `,

  edit: `
    <i data-lucide="pen" class="h-5 w-5"></i>
  `

};



/* =========================================================
   METRICS
========================================================= */

function renderMetrics() {

  const container =
    document.getElementById("metricCards");

  if (!container) return;


  container.innerHTML =
    dashboardData.metrics
      .map((card) => {

        const directionClass =
          card.direction === "up"
            ? "text-[#16a34a]"
            : "text-[#f2458e]";


        const arrow =
          card.direction === "up"
            ? "↑"
            : "↓";


        return `

          <article
            class="
              flex
              min-h-[108px]
              items-center
              gap-3
              rounded-[9px]
              border
              border-[#f0f0f0]
              bg-white
              px-3
              py-4
              shadow-[0_3px_14px_rgba(20,27,52,.08)]
              xl:gap-4
              xl:px-4
            "
          >

            <div
              class="
                grid
                h-[54px]
                w-[54px]
                shrink-0
                place-items-center
                rounded-[9px]
              "
              style="
                background:${card.iconBg};
                color:${card.iconColor};
              "
            >
              ${icons[card.icon] || ""}
            </div>


            <div class="min-w-0">

              <p
                class="
                  truncate
                  text-[13px]
                  text-[#999]
                  xl:text-[14px]
                "
              >
                ${card.title}
              </p>


              <p
                class="
                  mt-1
                  font-oswald
                  text-[27px]
                  font-bold
                  leading-none
                  xl:text-[29px]
                "
              >
                ${card.value}
              </p>


              <p
                class="
                  mt-2
                  text-[12px]
                  text-[#999]
                  xl:text-[13px]
                "
              >

                <span
                  class="${directionClass} font-medium"
                >
                  ${arrow} ${card.change}
                </span>

                <span class="ml-1">
                  ${card.period}
                </span>

              </p>

            </div>

          </article>

        `;

      })
      .join("");

}



/* =========================================================
   RECENT EVENTS
========================================================= */

function renderRecentEvents() {

  const container =
    document.getElementById(
      "recentEventsRows"
    );

  if (!container) return;


  container.innerHTML =
    dashboardData.recentEvents
      .map((event) => {

        return `

          <div
            class="
              grid
              min-h-[58px]
              grid-cols-[1.55fr_1fr_1.15fr_.75fr_.85fr_.38fr]
              items-center
              border-b
              border-[#e7e7e7]
              px-3
              text-[13px]
              text-[#292929]
              xl:text-[14px]
            "
          >

            <div
              class="
                flex
                min-w-0
                items-center
                gap-2.5
                font-medium
              "
            >

              <img
                src="${event.image}"
                alt=""
                class="
                  h-8
                  w-8
                  shrink-0
                  rounded-[5px]
                  object-cover
                "
              />

              <span class="truncate">
                ${event.name}
              </span>

            </div>


            <span class="whitespace-nowrap">
              ${event.date}
            </span>


            <span class="truncate">
              ${event.location}
            </span>


            <span>
              ${event.tickets}
            </span>


            <span>
              ${event.revenue}
            </span>


            <button
              type="button"
              class="
                grid
                h-8
                w-8
                place-items-center
                rounded-[7px]
                border
                border-[#e5e5e5]
                text-[#a437e6]
                transition
                hover:bg-[#f7f0fb]
              "
            >
              ${icons.edit}
            </button>

          </div>

        `;

      })
      .join("");

}



/* =========================================================
   TICKET LEGEND
========================================================= */

function renderTicketLegend() {

  const container =
    document.getElementById(
      "ticketLegend"
    );

  if (!container) return;


  const data =
    dashboardData.ticketOverview;


  container.innerHTML =
    data.labels
      .map((label, index) => {

        return `

          <div
            class="
              grid
              grid-cols-[16px_62px_auto]
              items-center
              gap-2
              text-[13px]
              xl:grid-cols-[16px_68px_auto]
              xl:text-[14px]
            "
          >

            <span
              class="
                h-4
                w-4
                rounded-[4px]
              "
              style="
                background:${data.colors[index]};
              "
            ></span>


            <span>
              ${label}
            </span>


            <strong
              class="
                text-right
                font-normal
              "
            >
              ${Number(
                data.values[index]
              ).toLocaleString("en-IN")}
            </strong>

          </div>

        `;

      })
      .join("");

}



/* =========================================================
   TOP EVENTS
========================================================= */

function renderTopEvents() {

  const container =
    document.getElementById(
      "topEventsList"
    );

  if (!container) return;


  container.innerHTML =
    dashboardData.topEvents
      .map((event) => {

        return `

          <div
            class="
              flex
              min-h-[47px]
              items-center
              gap-2
              rounded-md
              px-0.5
              py-1.5
              xl:gap-2.5
            "
          >

            <img
              src="${event.image}"
              alt=""
              class="
                h-8
                w-8
                shrink-0
                rounded-[5px]
                object-cover
              "
            />


            <span
              class="
                min-w-0
                flex-1
                truncate
                text-[13px]
                font-medium
                text-[#292929]
                xl:text-[14px]
              "
            >
              ${event.name}
            </span>


            <span
              class="
                shrink-0
                text-[12px]
                text-[#333]
                xl:text-[14px]
              "
            >
              ${event.tickets}
            </span>

          </div>

        `;

      })
      .join("");

}



/* =========================================================
   QUICK ACTIONS
========================================================= */

function renderQuickActions() {

  const container =
    document.getElementById(
      "quickActions"
    );

  if (!container) return;


  container.innerHTML =
    dashboardData.quickActions
      .map((action) => {

        return `

          <button
            type="button"
            class="
              group
              flex
              h-[86px]
              w-full
              flex-col
              items-center
              justify-center
              gap-2
              rounded-[8px]
              bg-[#faf5fd]
              px-1
              text-center
              transition
              hover:-translate-y-0.5
              hover:bg-[#f4e8fb]
              xl:h-[91px]
            "
          >

            <span
              class="
                text-[#a437e6]
                transition
                group-hover:scale-105
              "
            >
              ${icons[action.icon] || ""}
            </span>


            <span
              class="
                text-[12px]
                leading-tight
                text-[#333]
                xl:text-[13px]
              "
            >
              ${action.label}
            </span>

          </button>

        `;

      })
      .join("");

}



/* =========================================================
   TICKET CHART
========================================================= */

function createTicketChart() {

  const canvas =
    document.getElementById(
      "ticketChart"
    );


  if (
    !canvas ||
    typeof Chart === "undefined"
  ) {
    return;
  }


  const existing =
    Chart.getChart(canvas);


  if (existing) {
    existing.destroy();
  }


  const data =
    dashboardData.ticketOverview;


  new Chart(canvas, {

    type: "doughnut",


    data: {

      labels:
        data.labels,

      datasets: [

        {

          data:
            data.values,

          backgroundColor:
            data.colors,

          borderWidth: 0,

          hoverOffset: 0

        }

      ]

    },


    options: {

      responsive: true,

      maintainAspectRatio: false,

      cutout: "66%",

      rotation: -90,

      plugins: {

        legend: {

          display: false

        },

        tooltip: {

          displayColors: false

        }

      }

    }

  });


  const total =
    document.getElementById(
      "ticketTotal"
    );


  if (total) {

    total.textContent =
      data.total;

  }

}



/* =========================================================
   SALES CHART
========================================================= */

function createSalesChart() {

  const canvas =
    document.getElementById(
      "salesChart"
    );


  if (
    !canvas ||
    typeof Chart === "undefined"
  ) {
    return;
  }


  const existing =
    Chart.getChart(canvas);


  if (existing) {
    existing.destroy();
  }


  const context =
    canvas.getContext("2d");


  if (!context) return;


  const gradient =
    context.createLinearGradient(
      0,
      0,
      0,
      270
    );


  gradient.addColorStop(
    0,
    "rgba(163,122,245,.32)"
  );


  gradient.addColorStop(
    1,
    "rgba(163,122,245,.04)"
  );


  new Chart(canvas, {

    type: "line",


    data: {

      labels:
        dashboardData.salesOverview.labels,

      datasets: [

        {

          data:
            dashboardData.salesOverview.values,

          borderColor:
            "#8f7af5",

          backgroundColor:
            gradient,

          fill: true,

          tension: 0.42,

          borderWidth: 1.6,

          pointRadius: 3,

          pointHoverRadius: 4,

          pointBackgroundColor:
            "#ffffff",

          pointBorderColor:
            "#8f7af5",

          pointBorderWidth: 1.5

        }

      ]

    },


    options: {

      responsive: true,

      maintainAspectRatio: false,


      interaction: {

        intersect: false,

        mode: "index"

      },


      plugins: {

        legend: {

          display: false

        },

        tooltip: {

          displayColors: false

        }

      },


      scales: {

        x: {

          grid: {

            color: "#eeeeee",

            borderDash: [
              2,
              3
            ]

          },

          ticks: {

            color: "#777",

            font: {

              family: "Poppins",

              size: 10

            }

          }

        },


        y: {

          beginAtZero: true,

          suggestedMax: 100,

          ticks: {

            stepSize: 20,

            color: "#777",

            font: {

              family: "Poppins",

              size: 10

            }

          },

          grid: {

            color: "#eeeeee",

            borderDash: [
              2,
              3
            ]

          },

          border: {

            display: false

          }

        }

      }

    }

  });

}



/* =========================================================
   PROFILE MENU
========================================================= */

function setupProfileMenu() {

  const button =
    document.getElementById(
      "profileToggle"
    );


  const menu =
    document.getElementById(
      "profileMenu"
    );


  const chevron =
    document.getElementById(
      "profileChevron"
    );


  if (!button || !menu) return;


  button.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();


      const opening =
        menu.classList.contains(
          "hidden"
        );


      menu.classList.toggle(
        "hidden",
        !opening
      );


      if (chevron) {

        chevron.classList.toggle(
          "rotate-180",
          opening
        );

      }

    }
  );


  menu.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

    }
  );


  document.addEventListener(
    "click",
    () => {

      menu.classList.add(
        "hidden"
      );


      chevron?.classList.remove(
        "rotate-180"
      );

    }
  );

}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function setupMobileSidebar() {

  const sidebar =
    document.getElementById("sidebar");

  const overlay =
    document.getElementById("mobileOverlay");

  const button =
    document.getElementById("mobileMenuButton");


  if (!sidebar || !overlay || !button) {

    console.error(
      "Dashboard mobile menu: required elements not found."
    );

    return;
  }


  /* =====================================================
     OPEN SIDEBAR
  ===================================================== */

  function openSidebar() {

    if (window.innerWidth >= 1024) {
      return;
    }


    sidebar.classList.add(
      "mobile-sidebar-open"
    );


    overlay.classList.remove(
      "hidden"
    );


    overlay.classList.add(
      "mobile-overlay-open"
    );


    document.body.classList.add(
      "overflow-hidden"
    );


    button.setAttribute(
      "aria-expanded",
      "true"
    );


    button.setAttribute(
      "aria-label",
      "Close menu"
    );


    button.innerHTML =
      '<i class="fa-solid fa-xmark"></i>';

  }


  /* =====================================================
     CLOSE SIDEBAR
  ===================================================== */

  function closeSidebar() {

    sidebar.classList.remove(
      "mobile-sidebar-open"
    );


    overlay.classList.remove(
      "mobile-overlay-open"
    );


    overlay.classList.add(
      "hidden"
    );


    document.body.classList.remove(
      "overflow-hidden"
    );


    button.setAttribute(
      "aria-expanded",
      "false"
    );


    button.setAttribute(
      "aria-label",
      "Open menu"
    );


    button.innerHTML =
      '<i class="fa-solid fa-bars"></i>';

  }


  /* =====================================================
     MOBILE MENU BUTTON
  ===================================================== */

  button.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();


      const isOpen =
        sidebar.classList.contains(
          "mobile-sidebar-open"
        );


      if (isOpen) {

        closeSidebar();

      } else {

        openSidebar();

      }

    }
  );


  /* =====================================================
     OVERLAY
  ===================================================== */

  overlay.addEventListener(
    "click",
    function () {

      closeSidebar();

    }
  );


  /* =====================================================
     NAVIGATION LINKS
  ===================================================== */

  sidebar
    .querySelectorAll(".dashboard-nav")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          if (window.innerWidth < 1024) {

            closeSidebar();

          }

        }
      );

    });


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        window.innerWidth < 1024
      ) {

        closeSidebar();

      }

    }
  );


  /* =====================================================
     WINDOW RESIZE
  ===================================================== */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth >= 1024) {

        closeSidebar();

      }

    }
  );


  /* =====================================================
     INITIAL STATE
  ===================================================== */

  closeSidebar();

}

/* =========================================================
   NAVIGATION
========================================================= */

function setupNavState() {

  const links =
    document.querySelectorAll(
      ".dashboard-nav"
    );


  if (!links.length) return;


  links.forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();


        links.forEach((item) => {

          item.classList.remove(
            "active",
            "bg-[#f0e5ff]",
            "text-[#8f2ce3]"
          );


          item.classList.add(
            "text-[#303030]"
          );

        });


        link.classList.remove(
          "text-[#303030]"
        );


        link.classList.add(
          "active",
          "bg-[#f0e5ff]",
          "text-[#8f2ce3]"
        );

      }
    );

  });

}



/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderMetrics();

    renderRecentEvents();

    renderTicketLegend();

    lucide.createIcons();

    renderTopEvents();

    renderQuickActions();

    createTicketChart();

    createSalesChart();

    setupProfileMenu();

    setupMobileSidebar();

    setupNavState();

  }
);