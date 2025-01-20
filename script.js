//toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika humbergur menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class active untuk search box
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
//ketika humbergur menu diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//klik diluar sidebar untuk menghilangkan nav
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

const images = [
  "url(img/sepatu1.jpg)",
  "url(img/sepatu2.jpg)",
  "url(img/sepatu3.jpg)",
];
let currentIndex = 0;

function changeBackground() {
  // Ganti background-image
  document.querySelector(".hero").style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Set background awal
document.querySelector(".hero").style.backgroundImage = images[currentIndex];

// Ganti gambar setiap 5 detik
setInterval(changeBackground, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("visible"); // Tambahkan kelas saat elemen muncul di viewport
      }
    });
  });

  observer.observe(aboutSection); // Amati elemen
});
