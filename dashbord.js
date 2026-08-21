"use strict";


/* =========================================================
   EVENTARA ADMIN DASHBOARD
========================================================= */


/* =========================================================
   DASHBOARD DATA
========================================================= */

const dashboardData = {


  /* =====================================================
     METRICS
  ====================================================== */

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



  /* =====================================================
     RECENT EVENTS
  ====================================================== */

  recentEvents: [

    {
      name: "Music Concert 2025",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=120&q=80",
      date: "03 aug 2026",
      location: "Kolkata, Salt lake",
      tickets: "$460",
      revenue: "$10,452"
    },

    {
      name: "Food Festivals",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=120&q=80",
      date: "10 aug 2026",
      location: "Mumbai",
      tickets: "$530",
      revenue: "$78,152"
    },

    {
      name: "Art & Culture Expo",
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=120&q=80",
      date: "17 aug 2026",
      location: "Delhi",
      tickets: "$760",
      revenue: "$53,452"
    },

    {
      name: "Tech Summit",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=120&q=80",
      date: "01 sep 2026",
      location: "Bangalore",
      tickets: "$420",
      revenue: "$90,452"
    },

    {
      name: "Startup Expo",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=120&q=80",
      date: "08 sep 2026",
      location: "Hyderabad",
      tickets: "$680",
      revenue: "$72,300"
    },

    {
      name: "Music Night",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=120&q=80",
      date: "15 sep 2026",
      location: "Pune",
      tickets: "$590",
      revenue: "$61,200"
    }

  ],



  /* =====================================================
     TICKET OVERVIEW
  ====================================================== */

  ticketOverview: {

    total: "3,260",

    labels: [
      "Sold",
      "Pending",
      "Cancel",
      "Refund"
    ],

    values: [
      2543,
      53,
      100,
      50
    ],

    colors: [
      "#431064",
      "#7425A0",
      "#A437E6",
      "#D7B0F3"
    ]

  },



  /* =====================================================
     SALES
  ====================================================== */

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



  /* =====================================================
     TOP EVENTS
  ====================================================== */

  topEvents: [

    {
      name: "Music Concert 2025",
      tickets: "2,543 Tickets",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Food Festivals",
      tickets: "2,53 Tickets",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Art & Culture Expo",
      tickets: "1,543 Tickets",
      image:
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Drama Evening",
      tickets: "5,023 Tickets",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Tech Summit",
      tickets: "4,120 Tickets",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=100&q=80"
    },

    {
      name: "Startup Expo",
      tickets: "3,870 Tickets",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=100&q=80"
    }

  ],



  /* =====================================================
     QUICK ACTIONS
  ====================================================== */

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
    <i
      class="
        fa-regular
        fa-calendar-days
        text-[28px]
      "
    ></i>
  `,


  users: `
    <i
      class="
        fa-solid
        fa-users
        text-[28px]
      "
    ></i>
  `,


  ticket: `
    <i
      class="
        fa-solid
        fa-ticket
        text-[28px]
      "
    ></i>
  `,


  rupee: `
    <i
      class="
        fa-solid
        fa-indian-rupee-sign
        text-[28px]
      "
    ></i>
  `,


  trash: `
    <i
      class="
        fa-regular
        fa-trash-can
        text-[28px]
      "
    ></i>
  `,


  edit: `
    <i
      class="
        fa-solid
        fa-pen
        text-[14px]
      "
    ></i>
  `

};



/* =========================================================
   RENDER METRICS
========================================================= */

function renderMetrics() {

  const container =
    document.getElementById("metricCards");

  if (!container) return;


  container.innerHTML =
    dashboardData.metrics
      .map(card => {


        const arrow =
          card.direction === "up"
            ? "↑"
            : "↓";


        const changeColor =
          card.direction === "up"
            ? "#16a34a"
            : "#f2458e";


        return `

          <article
            class="
              flex
              min-h-[106px]
              items-center
              gap-4

              rounded-[9px]

              border
              border-[#eeeeee]

              bg-white

              px-4

              shadow-[0_4px_14px_rgba(20,27,52,.08)]
            "
          >

            <div
              class="
                flex
                h-[54px]
                w-[54px]
                shrink-0
                items-center
                justify-center

                rounded-[9px]
              "

              style="
                background:${card.iconBg};
                color:${card.iconColor};
              "
            >

              ${icons[card.icon]}

            </div>


            <div class="min-w-0">

              <p
                class="
                  truncate
                  text-[14px]
                  text-[#999]
                "
              >
                ${card.title}
              </p>


              <p
                class="
                  mt-1

                  font-oswald
                  text-[29px]
                  font-bold
                  leading-none
                "
              >
                ${card.value}
              </p>


              <p
                class="
                  mt-2
                  text-[13px]
                  text-[#999]
                "
              >

                <span
                  style="color:${changeColor}"
                  class="font-medium"
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
      .map(event => `

        <div
          class="
            grid

            min-h-[56px]

            grid-cols-[1.55fr_1fr_1.15fr_.75fr_.85fr_.38fr]

            items-center

            border-b
            border-[#e7e7e7]

            px-3

            text-[13px]

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
            >

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
              flex
              h-8
              w-8

              items-center
              justify-center

              rounded-[7px]

              border
              border-[#e5e5e5]

              text-[#a437e6]

              hover:bg-[#f7f0fb]
            "
          >

            ${icons.edit}

          </button>


        </div>

      `)
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
      .map((label, index) => `

        <div
          class="
            grid

            grid-cols-[16px_65px_auto]

            items-center

            gap-2

            text-[13px]
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

      `)
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
      .map(event => `

        <div
          class="
            flex
            min-h-[47px]

            items-center

            gap-2.5
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
          >


          <span
            class="
              min-w-0
              flex-1
              truncate

              text-[13px]
              font-medium
            "
          >
            ${event.name}
          </span>


          <span
            class="
              shrink-0

              text-[13px]
              text-[#333]
            "
          >
            ${event.tickets}
          </span>

        </div>

      `)
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
      .map(action => `

        <button
          type="button"

          class="
            flex

            h-[86px]
            w-full

            flex-col

            items-center
            justify-center

            gap-2

            rounded-[8px]

            bg-[#faf5fd]

            text-center

            transition

            hover:-translate-y-0.5
            hover:bg-[#f4e8fb]
          "
        >

          <span
            class="text-[#a437e6]"
          >
            ${icons[action.icon]}
          </span>


          <span
            class="
              text-[12px]
              leading-tight
              text-[#333]
            "
          >
            ${action.label}
          </span>

        </button>

      `)
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
  ) return;


  const oldChart =
    Chart.getChart(canvas);

  if (oldChart) {
    oldChart.destroy();
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
  ) return;


  const oldChart =
    Chart.getChart(canvas);

  if (oldChart) {
    oldChart.destroy();
  }


  const context =
    canvas.getContext("2d");


  const gradient =
    context.createLinearGradient(
      0,
      0,
      0,
      280
    );


  gradient.addColorStop(
    0,
    "rgba(163,122,245,.30)"
  );


  gradient.addColorStop(
    1,
    "rgba(163,122,245,.03)"
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

          borderWidth: 1.5,

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
   PROFILE DROPDOWN
========================================================= */

function setupProfile() {

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


  function closeProfile() {

    menu.classList.add("hidden");

    if (chevron) {

      chevron.classList.remove(
        "rotate-180"
      );

    }

  }


  function openProfile() {

    menu.classList.remove("hidden");

    if (chevron) {

      chevron.classList.add(
        "rotate-180"
      );

    }

  }


  button.addEventListener(
    "click",
    event => {

      event.preventDefault();

      event.stopPropagation();


      if (
        menu.classList.contains("hidden")
      ) {

        openProfile();

      } else {

        closeProfile();

      }

    }
  );


  menu.addEventListener(
    "click",
    event => {

      event.stopPropagation();

    }
  );


  document.addEventListener(
    "click",
    () => {

      closeProfile();

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closeProfile();

      }

    }
  );

}



/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function setupMobileMenu() {

  const sidebar =
    document.getElementById(
      "sidebar"
    );

  const button =
    document.getElementById(
      "mobileMenuButton"
    );

  const overlay =
    document.getElementById(
      "mobileOverlay"
    );

  const icon =
    document.getElementById(
      "mobileMenuIcon"
    );


  if (
    !sidebar ||
    !button ||
    !overlay ||
    !icon
  ) {

    console.error(
      "Mobile menu elements missing."
    );

    return;

  }


  let open =
    false;



  function openMenu() {

    open = true;


    sidebar.classList.remove(
      "-translate-x-full"
    );

    sidebar.classList.add(
      "translate-x-0"
    );


    overlay.classList.remove(
      "hidden"
    );


    icon.className =
      "fa-solid fa-xmark text-[19px]";


    button.setAttribute(
      "aria-expanded",
      "true"
    );


    document.body.classList.add(
      "overflow-hidden"
    );

  }



  function closeMenu() {

    open = false;


    sidebar.classList.remove(
      "translate-x-0"
    );

    sidebar.classList.add(
      "-translate-x-full"
    );


    overlay.classList.add(
      "hidden"
    );


    icon.className =
      "fa-solid fa-bars text-[19px]";


    button.setAttribute(
      "aria-expanded",
      "false"
    );


    document.body.classList.remove(
      "overflow-hidden"
    );

  }



  button.addEventListener(
    "click",
    event => {

      event.preventDefault();

      event.stopPropagation();


      if (open) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );



  overlay.addEventListener(
    "click",
    closeMenu
  );



  sidebar
    .querySelectorAll(
      ".dashboard-nav"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          if (
            window.innerWidth < 1024
          ) {

            closeMenu();

          }

        }
      );

    });



  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        open
      ) {

        closeMenu();

      }

    }
  );



  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth >= 1024
      ) {

        open = false;

        sidebar.classList.remove(
          "-translate-x-full"
        );

        sidebar.classList.add(
          "translate-x-0"
        );

        overlay.classList.add(
          "hidden"
        );

        document.body.classList.remove(
          "overflow-hidden"
        );

        icon.className =
          "fa-solid fa-bars text-[19px]";

      } else {

        if (!open) {

          sidebar.classList.remove(
            "translate-x-0"
          );

          sidebar.classList.add(
            "-translate-x-full"
          );

        }

      }

    }
  );

}



/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

  const links =
    document.querySelectorAll(
      ".dashboard-nav"
    );


  links.forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.preventDefault();


        links.forEach(item => {

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


        if (
          link.id === "sidebarLogout"
        ) {

          openLogoutModal();

        }

      }
    );

  });

}



/* =========================================================
   CHANGE PASSWORD
========================================================= */

function setupChangePassword() {

  const openButton =
    document.getElementById(
      "openChangePassword"
    );

  const modal =
    document.getElementById(
      "changePasswordModal"
    );

  const closeButton =
    document.getElementById(
      "closeChangePassword"
    );

  const form =
    document.getElementById(
      "changePasswordForm"
    );

  const newPassword =
    document.getElementById(
      "newPassword"
    );

  const confirmPassword =
    document.getElementById(
      "confirmPassword"
    );

  const error =
    document.getElementById(
      "passwordError"
    );


  if (
    !openButton ||
    !modal ||
    !closeButton ||
    !form
  ) return;



  function openModal(event) {

    if (event) {

      event.preventDefault();

      event.stopPropagation();

    }


    modal.classList.remove(
      "hidden"
    );

    modal.classList.add(
      "flex"
    );


    document.body.classList.add(
      "modal-open"
    );


    const profileMenu =
      document.getElementById(
        "profileMenu"
      );


    if (profileMenu) {

      profileMenu.classList.add(
        "hidden"
      );

    }

  }



  function closeModal() {

    modal.classList.add(
      "hidden"
    );

    modal.classList.remove(
      "flex"
    );


    document.body.classList.remove(
      "modal-open"
    );


    form.reset();


    if (error) {

      error.classList.add(
        "hidden"
      );

      error.textContent = "";

    }

  }



  openButton.addEventListener(
    "click",
    openModal
  );


  closeButton.addEventListener(
    "click",
    closeModal
  );



  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );



  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const password =
        newPassword.value.trim();


      const confirm =
        confirmPassword.value.trim();


      if (!password || !confirm) {

        error.textContent =
          "Please enter both passwords.";

        error.classList.remove(
          "hidden"
        );

        return;

      }


      if (password.length < 6) {

        error.textContent =
          "Password must contain at least 6 characters.";

        error.classList.remove(
          "hidden"
        );

        return;

      }


      if (
        password !== confirm
      ) {

        error.textContent =
          "Passwords do not match.";

        error.classList.remove(
          "hidden"
        );

        return;

      }


      error.classList.add(
        "hidden"
      );


      alert(
        "Password changed successfully."
      );


      closeModal();

    }
  );


}



/* =========================================================
   LOGOUT MODAL
========================================================= */

function setupLogout() {

  const openButton =
    document.getElementById(
      "openLogout"
    );

  const sidebarLogout =
    document.getElementById(
      "sidebarLogout"
    );

  const modal =
    document.getElementById(
      "logoutModal"
    );

  const closeButton =
    document.getElementById(
      "closeLogout"
    );

  const cancelButton =
    document.getElementById(
      "cancelLogout"
    );

  const confirmButton =
    document.getElementById(
      "confirmLogout"
    );


  if (
    !modal ||
    !closeButton ||
    !cancelButton ||
    !confirmButton
  ) return;



  function openModal(event) {

    if (event) {

      event.preventDefault();

      event.stopPropagation();

    }


    modal.classList.remove(
      "hidden"
    );

    modal.classList.add(
      "flex"
    );


    document.body.classList.add(
      "modal-open"
    );


    const profileMenu =
      document.getElementById(
        "profileMenu"
      );


    if (profileMenu) {

      profileMenu.classList.add(
        "hidden"
      );

    }

  }



  function closeModal() {

    modal.classList.add(
      "hidden"
    );

    modal.classList.remove(
      "flex"
    );


    document.body.classList.remove(
      "modal-open"
    );

  }



  window.openLogoutModal =
    openModal;



  openButton?.addEventListener(
    "click",
    openModal
  );


  sidebarLogout?.addEventListener(
    "click",
    event => {

      event.preventDefault();

      openModal();

    }
  );


  closeButton.addEventListener(
    "click",
    closeModal
  );


  cancelButton.addEventListener(
    "click",
    closeModal
  );


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        closeModal();

      }

    }
  );


  confirmButton.addEventListener(
    "click",
    () => {

      alert(
        "Logged out successfully."
      );

      closeModal();

    }
  );


}



/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* DASHBOARD */

    renderMetrics();

    renderRecentEvents();

    renderTicketLegend();

    renderTopEvents();

    renderQuickActions();


    /* CHARTS */

    createTicketChart();

    createSalesChart();


    /* COMMON UI */

    setupProfile();

    setupMobileMenu();

    setupNavigation();


    /* MODALS */

    setupChangePassword();

    setupLogout();


  }
);