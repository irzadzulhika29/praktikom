// navigasi ke halaman sesuai nama halaman
function handleNavClick(pageName) {
  if (pageName === "beranda_laboran") {
    window.location.href = "home_laboran.html";
  } else if (pageName === "laboratorium") {
    window.location.href = "laboratorium.html";
  } else if (pageName === "profile") {
    window.location.href = "profile_laboran.html";
  }
}

// buka popup saat tombol diklik
const openPopupButton = document.getElementById("filterButton");
const popup = document.getElementById("popup");
const itemPopups = document.querySelectorAll(".item-popup");

if (openPopupButton && popup) {
  // tampilkan popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // sembunyikan popup saat item diklik
  itemPopups.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });
  
  // tutup popup saat klik di luar elemen popup
  document.addEventListener("click", function (event) {
    if (!popup.contains(event.target) && !openPopupButton.contains(event.target)) {
      popup.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});