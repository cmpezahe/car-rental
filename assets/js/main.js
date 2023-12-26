const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);

//====== Available options =====

// ==== REVIEWS SECTION =================
const reviewSection = [
  {
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Lauran",
    stars: 4,
    comments:
      "Just rented with YB—effortless reservation on their user-friendly site, transparent pricing, and a spotless car. Quick pickup and return. <br><strong>Highly recommend for hassle-free rentals! Highly recommend for hassle-free rentals!</strong>",
  },
  {
    avatarUrl:
      "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Liam",
    stars: 5,
    comments:
      "Just had a stellar rental with YB! Smooth website, no surprises in pricing, and the car was clean and reliable. Super easy return process. <strong>Highly recommended!</strong>",
  },
  {
    avatarUrl:
      "https://cdn.pixabay.com/photo/2020/08/21/08/46/african-5505598_960_720.jpg",
    user: "Kayley",
    stars: 5,
    comments:
      "Just rented from YB and it was fantastic! Easy website, transparent pricing, and a spotless car. Quick return process too.<br> <strong>Highly recommend!</strong>",
  },
];

function createReviewsElement(review) {
  const revcontainer = document.createElement("div");
  revcontainer.classList.add("box");

  revcontainer.innerHTML = `
    <div class="rev-img">
      <img src="${review.avatarUrl}" alt="User Avatar">
    </div>

    <h2>${review.user}</h2>
    <div class="rating">
      ${"<i class='bx bxs-star'></i>".repeat(review.stars)}
    </div>
    <p><i class='bx bxs-quote-alt-left'></i>${
      review.comments
    }<i class='bx bxs-quote-alt-right'></i></p>
  `;

  return revcontainer;
}

const reveContainer = document.getElementById("reviews-container");
reviewSection.forEach((review) =>
  reveContainer.appendChild(createReviewsElement(review))
);

// SECOND JS FILE
