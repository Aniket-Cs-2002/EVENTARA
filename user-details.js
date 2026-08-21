"use strict";

/* =========================================================
   EVENTARA USER DETAILS
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   USER DATA
========================================================= */

const users = [

  {
    id: 1,
    name: "Samiran Kaur",
    username: "@samiran_kaur",
    email: "samiran_kaur@gmail.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },

  {
    id: 2,
    name: "Joann Brekke",
    username: "@samiran_kaur",
    email: "lonnie60@gmail.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },

  {
    id: 3,
    name: "Norma Nader",
    username: "@samiran_kaur",
    email: "darrell63@gmail.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },

  {
    id: 4,
    name: "Lonnie Kuphal",
    username: "@samiran_kaur",
    email: "bert9@yahoo.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },

  {
    id: 5,
    name: "Jennie Stamm",
    username: "@samiran_kaur",
    email: "christina38@gmail.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  },

  {
    id: 6,
    name: "Adrian Bins",
    username: "@samiran_kaur",
    email: "albert50@hotmail.com",
    phone: "+91 9874053384",
    role: "User",
    joined: "03 aug 2026",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },

  {
    id: 7,
    name: "Michael Carter",
    username: "@michael_carter",
    email: "michael@gmail.com",
    phone: "+91 9874053344",
    role: "User",
    joined: "04 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },

  {
    id: 8,
    name: "Sarah Wilson",
    username: "@sarah_wilson",
    email: "sarah@gmail.com",
    phone: "+91 9874053355",
    role: "User",
    joined: "05 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },

  {
    id: 9,
    name: "David Miller",
    username: "@david_miller",
    email: "david@gmail.com",
    phone: "+91 9874053366",
    role: "User",
    joined: "06 aug 2026",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },

  {
    id: 10,
    name: "Emily Cooper",
    username: "@emily_cooper",
    email: "emily@gmail.com",
    phone: "+91 9874053377",
    role: "User",
    joined: "07 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/49.jpg"
  },

  {
    id: 11,
    name: "Robert Thomas",
    username: "@robert_thomas",
    email: "robert@gmail.com",
    phone: "+91 9874053388",
    role: "User",
    joined: "08 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },

  {
    id: 12,
    name: "Olivia Parker",
    username: "@olivia_parker",
    email: "olivia@gmail.com",
    phone: "+91 9874053399",
    role: "User",
    joined: "09 aug 2026",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/women/26.jpg"
  },

  {
    id: 13,
    name: "James Anderson",
    username: "@james_anderson",
    email: "james@gmail.com",
    phone: "+91 9874053311",
    role: "User",
    joined: "10 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },

  {
    id: 14,
    name: "Sophia Martin",
    username: "@sophia_martin",
    email: "sophia@gmail.com",
    phone: "+91 9874053322",
    role: "User",
    joined: "11 aug 2026",
    status: "active",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },

  {
    id: 15,
    name: "Daniel White",
    username: "@daniel_white",
    email: "daniel@gmail.com",
    phone: "+91 9874053333",
    role: "User",
    joined: "12 aug 2026",
    status: "inactive",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  }

];


/* =========================================================
   STATE
========================================================= */

const state = {

  currentPage: 1,

  rowsPerPage: 6,

  search: "",

  status: "all"

};


/* =========================================================
   DOM
========================================================= */

const tableBody =
  document.getElementById("userTableBody");

const searchInput =
  document.getElementById("userSearch");

const statusFilter =
  document.getElementById("statusFilter");

const pagination =
  document.getElementById("pagination");

const userCountText =
  document.getElementById("userCountText");

const selectAll =
  document.getElementById("selectAll");


/* =========================================================
   GET FILTERED USERS
========================================================= */

function getFilteredUsers() {

  return users.filter((user) => {

    const search =
      state.search.toLowerCase().trim();

    const matchesSearch =
      !search ||
      user.name.toLowerCase().includes(search) ||
      user.username.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.phone.toLowerCase().includes(search);

    const matchesStatus =
      state.status === "all" ||
      user.status === state.status;

    return matchesSearch && matchesStatus;

  });

}


/* =========================================================
   RENDER USERS
========================================================= */

function renderUsers() {

  if (!tableBody) return;

  const filteredUsers =
    getFilteredUsers();

  const start =
    (state.currentPage - 1) *
    state.rowsPerPage;

  const end =
    start + state.rowsPerPage;

  const visibleUsers =
    filteredUsers.slice(start, end);


  if (!visibleUsers.length) {

    tableBody.innerHTML = `

      <div
        class="
          flex
          min-h-[220px]
          items-center
          justify-center
          text-[14px]
          text-[#999]
        "
      >
        No users found.
      </div>

    `;

    updateCount(filteredUsers);

    renderPagination(filteredUsers);

    return;

  }


  tableBody.innerHTML =
    visibleUsers
      .map(renderUserRow)
      .join("");


  updateCount(filteredUsers);

  renderPagination(filteredUsers);

  updateSelectAll();

}


/* =========================================================
   USER ROW
========================================================= */

function renderUserRow(user) {

  const active =
    user.status === "active";


  return `

    <div
      class="
        user-table-row
        grid
        min-h-[76px]
        grid-cols-[38px_2.2fr_1.65fr_1.2fr_1.15fr_1fr_1fr_100px]
        items-center
        px-[12px]
        text-[13px]
        text-[#333]
      "
      data-user-id="${user.id}"
    >

      <!-- CHECKBOX -->

      <div class="flex justify-center">

        <input
          type="checkbox"
          class="user-checkbox row-checkbox"
          data-id="${user.id}"
        />

      </div>


      <!-- USER -->

      <div class="flex min-w-0 items-center gap-[11px]">

        <img
          src="${user.image}"
          alt="${user.name}"
          class="
            h-[34px]
            w-[34px]
            shrink-0
            rounded-full
            object-cover
          "
        />

        <div class="min-w-0">

          <p
            class="
              truncate
              text-[16px]
              font-medium
              text-[#252525]
            "
          >
            ${user.name}
          </p>

          <p
            class="
              truncate
              text-[12px]
              text-[#999]
            "
          >
            ${user.username}
          </p>

        </div>

      </div>


      <!-- EMAIL -->

      <span class="truncate pr-2 text-[14px]">
        ${user.email}
      </span>


      <!-- PHONE -->

      <span class="whitespace-nowrap text-[14px]">
        ${user.phone}
      </span>


      <!-- ROLE -->

      <span
        class="
          flex
          h-[28px]
          w-[108px]
          items-center
          justify-center
          rounded-[5px]
          bg-[#f8edff]
          text-[13px]
          font-medium
          text-[#a437e6]
        "
      >
        ${user.role}
      </span>


      <!-- JOINED -->

      <span
        class="
          whitespace-nowrap
          text-[14px]
          text-[#666]
        "
      >
        ${user.joined}
      </span>


      <!-- STATUS -->

      <span
        class="
          flex
          h-[28px]
          w-[100px]
          items-center
          justify-center
          gap-2
          rounded-[5px]
          text-[13px]
          font-medium
          ${
            active
              ? "bg-[#e9ffe8] text-[#159b24]"
              : "bg-[#ffe8f0] text-[#e12169]"
          }
        "
      >

        <span class="text-[9px]">
          •
        </span>

        ${active ? "Active" : "Inactive"}

      </span>


      <!-- ACTION -->

      <div
        class="
          flex
          items-center
          justify-center
          gap-2
        "
      >

        <button
          type="button"
          class="
            edit-user
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#e2e2e2]
            text-[#a437e6]
            transition
            hover:bg-[#f8edff]
          "
          data-id="${user.id}"
          title="Edit user"
        >
          <i class="fa-solid fa-pen text-[14px]"></i>
        </button>


        <button
          type="button"
          class="
            delete-user
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            rounded-[7px]
            border
            border-[#e2e2e2]
            text-[#e12169]
            transition
            hover:bg-[#fff0f5]
          "
          data-id="${user.id}"
          title="Delete user"
        >
          <i class="fa-regular fa-trash-can text-[14px]"></i>
        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   COUNT
========================================================= */

function updateCount(filteredUsers) {

  if (!userCountText) return;


  const total =
    filteredUsers.length;


  if (!total) {

    userCountText.textContent =
      "Showing 0 users";

    return;

  }


  const start =
    (state.currentPage - 1) *
    state.rowsPerPage + 1;

  const end =
    Math.min(
      start + state.rowsPerPage - 1,
      total
    );


  userCountText.textContent =
    `Showing ${start}–${end} of ${total} registered users`;

}


/* =========================================================
   PAGINATION
========================================================= */

function renderPagination(filteredUsers) {

  if (!pagination) return;


  const totalPages =
    Math.ceil(
      filteredUsers.length /
      state.rowsPerPage
    );


  if (totalPages <= 1) {

    pagination.innerHTML = "";

    return;

  }


  let html = "";


  /* PREVIOUS */

  html += `

    <button
      type="button"
      class="
        pagination-btn
        flex
        h-[40px]
        w-[40px]
        shrink-0
        items-center
        justify-center
        rounded-[7px]
        border
        border-[#e5e5e5]
        bg-white
        text-[#aaa]
        transition
        hover:border-[#a437e6]
        hover:text-[#a437e6]
        ${
          state.currentPage === 1
            ? "pointer-events-none opacity-50"
            : ""
        }
      "
      data-page="${state.currentPage - 1}"
    >
      <i class="fa-solid fa-chevron-left text-[11px]"></i>
    </button>

  `;


  const pages = getPaginationPages(totalPages);


  pages.forEach((page) => {

    if (page === "...") {

      html += `

        <span
          class="
            flex
            h-[40px]
            w-[40px]
            shrink-0
            items-center
            justify-center
            text-[#333]
          "
        >
          ...
        </span>

      `;

      return;

    }


    const active =
      page === state.currentPage;


    html += `

      <button
        type="button"
        class="
          pagination-btn
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-[7px]
          border
          text-[14px]
          transition
          ${
            active
              ? "border-[#a437e6] bg-white text-[#a437e6] shadow-sm"
              : "border-[#e5e5e5] bg-white text-[#333] hover:border-[#a437e6] hover:text-[#a437e6]"
          }
        "
        data-page="${page}"
      >
        ${page}
      </button>

    `;

  });


  /* NEXT */

  html += `

    <button
      type="button"
      class="
        pagination-btn
        flex
        h-[40px]
        w-[40px]
        shrink-0
        items-center
        justify-center
        rounded-[7px]
        border
        border-[#e5e5e5]
        bg-white
        text-[#333]
        transition
        hover:border-[#a437e6]
        hover:text-[#a437e6]
        ${
          state.currentPage === totalPages
            ? "pointer-events-none opacity-50"
            : ""
        }
      "
      data-page="${state.currentPage + 1}"
    >
      <i class="fa-solid fa-chevron-right text-[11px]"></i>
    </button>

  `;


  pagination.innerHTML = html;

}


/* =========================================================
   PAGINATION PAGE LIST
========================================================= */

function getPaginationPages(totalPages) {

  if (totalPages <= 7) {

    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

  }


  const pages = [1];


  if (state.currentPage > 3) {

    pages.push("...");

  }


  const start =
    Math.max(
      2,
      state.currentPage - 1
    );

  const end =
    Math.min(
      totalPages - 1,
      state.currentPage + 1
    );


  for (
    let i = start;
    i <= end;
    i++
  ) {

    pages.push(i);

  }


  if (
    state.currentPage <
    totalPages - 2
  ) {

    pages.push("...");

  }


  pages.push(totalPages);


  return pages;

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  if (!searchInput) return;


  searchInput.addEventListener(
    "input",
    function () {

      state.search =
        this.value;

      state.currentPage = 1;

      renderUsers();

    }
  );

}


/* =========================================================
   STATUS FILTER
========================================================= */

function setupStatusFilter() {

  if (!statusFilter) return;


  statusFilter.addEventListener(
    "change",
    function () {

      state.status =
        this.value;

      state.currentPage = 1;

      renderUsers();

    }
  );

}


/* =========================================================
   PAGINATION CLICK
========================================================= */

function setupPagination() {

  if (!pagination) return;


  pagination.addEventListener(
    "click",
    function (event) {

      const button =
        event.target.closest(
          ".pagination-btn"
        );


      if (!button) return;


      const page =
        Number(
          button.dataset.page
        );


      if (!page) return;


      const filteredUsers =
        getFilteredUsers();


      const totalPages =
        Math.ceil(
          filteredUsers.length /
          state.rowsPerPage
        );


      if (
        page < 1 ||
        page > totalPages
      ) {

        return;

      }


      state.currentPage =
        page;


      renderUsers();

    }
  );

}


/* =========================================================
   SELECT ALL
========================================================= */

function setupSelectAll() {

  if (!selectAll) return;


  selectAll.addEventListener(
    "change",
    function () {

      const checkboxes =
        document.querySelectorAll(
          ".row-checkbox"
        );


      checkboxes.forEach(
        (checkbox) => {

          checkbox.checked =
            selectAll.checked;

        }
      );

    }
  );

}


/* =========================================================
   UPDATE SELECT ALL
========================================================= */

function updateSelectAll() {

  if (!selectAll) return;


  const checkboxes =
    document.querySelectorAll(
      ".row-checkbox"
    );


  if (!checkboxes.length) {

    selectAll.checked = false;

    return;

  }


  selectAll.checked =
    [...checkboxes].every(
      checkbox =>
        checkbox.checked
    );

}


/* =========================================================
   TABLE ACTIONS
========================================================= */

function setupTableActions() {

  if (!tableBody) return;


  tableBody.addEventListener(
    "click",
    function (event) {

      /* EDIT */

      const editButton =
        event.target.closest(
          ".edit-user"
        );


      if (editButton) {

        const id =
          Number(
            editButton.dataset.id
          );


        const user =
          users.find(
            item =>
              item.id === id
          );


        if (user) {

          alert(
            `Edit user: ${user.name}`
          );

        }


        return;

      }


      /* DELETE */

      const deleteButton =
        event.target.closest(
          ".delete-user"
        );


      if (deleteButton) {

        const id =
          Number(
            deleteButton.dataset.id
          );


        const index =
          users.findIndex(
            item =>
              item.id === id
          );


        if (index === -1) return;


        const user =
          users[index];


        const confirmed =
          confirm(
            `Delete ${user.name}?`
          );


        if (!confirmed) return;


        users.splice(
          index,
          1
        );


        const filteredUsers =
          getFilteredUsers();


        const totalPages =
          Math.max(
            1,
            Math.ceil(
              filteredUsers.length /
              state.rowsPerPage
            )
          );


        if (
          state.currentPage >
          totalPages
        ) {

          state.currentPage =
            totalPages;

        }


        renderUsers();

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


  links.forEach(
    (link) => {

      link.addEventListener(
        "click",
        function (event) {

          if (
            link.id ===
            "sidebarLogout"
          ) {

            event.preventDefault();

            openLogoutModal();

            return;

          }


          if (
            link.getAttribute("href") ===
            "#"
          ) {

            event.preventDefault();

          }


          links.forEach(
            (item) => {

              item.classList.remove(
                "active",
                "bg-[#f0e5ff]",
                "text-[#8f2ce3]"
              );

              item.classList.add(
                "text-[#303030]"
              );

            }
          );


          link.classList.remove(
            "text-[#303030]"
          );

          link.classList.add(
            "active",
            "bg-[#f0e5ff]",
            "text-[#8f2ce3]"
          );


          /* Close mobile menu */

          if (
            window.innerWidth < 1024
          ) {

            closeMobileSidebar();

          }

        }
      );

    }
  );

}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const sidebar =
  document.getElementById("sidebar");

const mobileButton =
  document.getElementById(
    "mobileMenuButton"
  );

const mobileOverlay =
  document.getElementById(
    "mobileOverlay"
  );


function openMobileSidebar() {

  if (
    !sidebar ||
    !mobileOverlay ||
    !mobileButton
  ) return;


  sidebar.classList.remove(
    "-translate-x-full"
  );

  sidebar.classList.add(
    "translate-x-0"
  );


  mobileOverlay.classList.remove(
    "hidden"
  );


  requestAnimationFrame(
    () => {

      mobileOverlay.classList.remove(
        "opacity-0"
      );

      mobileOverlay.classList.add(
        "opacity-100"
      );

    }
  );


  mobileButton.innerHTML =
    `<i class="fa-solid fa-xmark"></i>`;


  mobileButton.setAttribute(
    "aria-expanded",
    "true"
  );


  document.body.classList.add(
    "overflow-hidden"
  );

}


function closeMobileSidebar() {

  if (
    !sidebar ||
    !mobileOverlay ||
    !mobileButton
  ) return;


  sidebar.classList.remove(
    "translate-x-0"
  );

  sidebar.classList.add(
    "-translate-x-full"
  );


  mobileOverlay.classList.remove(
    "opacity-100"
  );

  mobileOverlay.classList.add(
    "opacity-0"
  );


  mobileButton.innerHTML =
    `<i class="fa-solid fa-bars"></i>`;


  mobileButton.setAttribute(
    "aria-expanded",
    "false"
  );


  document.body.classList.remove(
    "overflow-hidden"
  );


  setTimeout(
    () => {

      if (
        window.innerWidth < 1024
      ) {

        mobileOverlay.classList.add(
          "hidden"
        );

      }

    },
    300
  );

}


function setupMobileSidebar() {

  if (
    !sidebar ||
    !mobileButton ||
    !mobileOverlay
  ) return;


  mobileButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();


      const isOpen =
        sidebar.classList.contains(
          "translate-x-0"
        );


      if (isOpen) {

        closeMobileSidebar();

      } else {

        openMobileSidebar();

      }

    }
  );


  mobileOverlay.addEventListener(
    "click",
    closeMobileSidebar
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        window.innerWidth < 1024
      ) {

        closeMobileSidebar();

      }

    }
  );


  window.addEventListener(
    "resize",
    function () {

      if (
        window.innerWidth >= 1024
      ) {

        sidebar.classList.remove(
          "-translate-x-full"
        );

        sidebar.classList.add(
          "translate-x-0"
        );

        mobileOverlay.classList.add(
          "hidden"
        );

        mobileOverlay.classList.remove(
          "opacity-100"
        );

        mobileOverlay.classList.add(
          "opacity-0"
        );

        document.body.classList.remove(
          "overflow-hidden"
        );

      } else {

        if (
          !sidebar.classList.contains(
            "translate-x-0"
          )
        ) {

          sidebar.classList.add(
            "-translate-x-full"
          );

        }

      }

    }
  );

}


/* =========================================================
   PROFILE DROPDOWN
========================================================= */

function setupProfileMenu() {

  const toggle =
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


  if (!toggle || !menu) return;


  toggle.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();


      const isHidden =
        menu.classList.contains(
          "hidden"
        );


      if (isHidden) {

        menu.classList.remove(
          "hidden"
        );

        if (chevron) {

          chevron.classList.add(
            "rotate-180"
          );

        }

      } else {

        menu.classList.add(
          "hidden"
        );

        if (chevron) {

          chevron.classList.remove(
            "rotate-180"
          );

        }

      }

    }
  );


  menu.addEventListener(
    "click",
    function (event) {

      event.stopPropagation();

    }
  );


  document.addEventListener(
    "click",
    function () {

      menu.classList.add(
        "hidden"
      );

      if (chevron) {

        chevron.classList.remove(
          "rotate-180"
        );

      }

    }
  );

}


/* =========================================================
   CHANGE PASSWORD
========================================================= */

function openChangePasswordModal() {

  const modal =
    document.getElementById(
      "changePasswordModal"
    );


  if (!modal) return;


  modal.classList.remove(
    "hidden"
  );

  modal.classList.add(
    "flex"
  );


  document.body.classList.add(
    "overflow-hidden"
  );


  const menu =
    document.getElementById(
      "profileMenu"
    );


  const chevron =
    document.getElementById(
      "profileChevron"
    );


  if (menu) {

    menu.classList.add(
      "hidden"
    );

  }


  if (chevron) {

    chevron.classList.remove(
      "rotate-180"
    );

  }

}


function closeChangePasswordModal() {

  const modal =
    document.getElementById(
      "changePasswordModal"
    );


  if (!modal) return;


  modal.classList.add(
    "hidden"
  );

  modal.classList.remove(
    "flex"
  );


  document.body.classList.remove(
    "overflow-hidden"
  );

}


function setupChangePassword() {

  const openButton =
    document.getElementById(
      "openChangePasswordModal"
    );

  const backButton =
    document.getElementById(
      "changePasswordBack"
    );

  const modal =
    document.getElementById(
      "changePasswordModal"
    );

  const form =
    document.getElementById(
      "changePasswordForm"
    );


  if (
    !openButton ||
    !backButton ||
    !modal ||
    !form
  ) return;


  openButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();

      openChangePasswordModal();

    }
  );


  backButton.addEventListener(
    "click",
    function () {

      closeChangePasswordModal();

    }
  );


  modal.addEventListener(
    "click",
    function (event) {

      if (
        event.target === modal
      ) {

        closeChangePasswordModal();

      }

    }
  );


  form.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const newPassword =
        document.getElementById(
          "changePasswordNew"
        ).value.trim();


      const confirmPassword =
        document.getElementById(
          "changePasswordConfirm"
        ).value.trim();


      const error =
        document.getElementById(
          "changePasswordError"
        );


      if (!newPassword || !confirmPassword) {

        error.textContent =
          "Please enter both passwords.";

        error.classList.remove(
          "hidden"
        );

        return;

      }


      if (
        newPassword !==
        confirmPassword
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


      form.reset();

      closeChangePasswordModal();

    }
  );

}


/* =========================================================
   LOGOUT MODAL
========================================================= */

function openLogoutModal() {

  const modal =
    document.getElementById(
      "logoutModal"
    );


  if (!modal) return;


  modal.classList.remove(
    "hidden"
  );

  modal.classList.add(
    "flex"
  );


  document.body.classList.add(
    "overflow-hidden"
  );


  /* Close profile */

  const menu =
    document.getElementById(
      "profileMenu"
    );

  const chevron =
    document.getElementById(
      "profileChevron"
    );


  if (menu) {

    menu.classList.add(
      "hidden"
    );

  }


  if (chevron) {

    chevron.classList.remove(
      "rotate-180"
    );

  }


  /* Close mobile sidebar */

  if (
    window.innerWidth < 1024
  ) {

    closeMobileSidebar();

  }

}


function closeLogoutModal() {

  const modal =
    document.getElementById(
      "logoutModal"
    );


  if (!modal) return;


  modal.classList.add(
    "hidden"
  );

  modal.classList.remove(
    "flex"
  );


  document.body.classList.remove(
    "overflow-hidden"
  );

}


function setupLogout() {

  const profileLogout =
    document.getElementById(
      "profileLogout"
    );

  const sidebarLogout =
    document.getElementById(
      "sidebarLogout"
    );

  const back =
    document.getElementById(
      "logoutBack"
    );

  const no =
    document.getElementById(
      "logoutNo"
    );

  const yes =
    document.getElementById(
      "logoutYes"
    );

  const modal =
    document.getElementById(
      "logoutModal"
    );


  if (profileLogout) {

    profileLogout.addEventListener(
      "click",
      function () {

        openLogoutModal();

      }
    );

  }


  if (sidebarLogout) {

    sidebarLogout.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        openLogoutModal();

      }
    );

  }


  if (back) {

    back.addEventListener(
      "click",
      closeLogoutModal
    );

  }


  if (no) {

    no.addEventListener(
      "click",
      closeLogoutModal
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target === modal
        ) {

          closeLogoutModal();

        }

      }
    );

  }


  if (yes) {

    yes.addEventListener(
      "click",
      function () {

        /*
          Replace this with your
          real logout redirect later.
        */

        window.location.href =
          "index.html";

      }
    );

  }

}


/* =========================================================
   KEYBOARD ESCAPE FOR MODALS
========================================================= */

function setupGlobalEscape() {

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key !== "Escape"
      ) return;


      closeChangePasswordModal();

      closeLogoutModal();


      const profileMenu =
        document.getElementById(
          "profileMenu"
        );


      if (profileMenu) {

        profileMenu.classList.add(
          "hidden"
        );

      }


      if (
        window.innerWidth < 1024
      ) {

        closeMobileSidebar();

      }

    }
  );

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderUsers();

    setupSearch();

    setupStatusFilter();

    setupPagination();

    setupSelectAll();

    setupTableActions();

    setupNavigation();

    setupMobileSidebar();

    setupProfileMenu();

    setupChangePassword();

    setupLogout();

    setupGlobalEscape();

  }
);