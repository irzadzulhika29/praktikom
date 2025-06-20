function handleNavClick(pageName) {
  if (pageName === "beranda_dosen") {
    window.location.href = "home_dosen.html";
  } else if (pageName === "kelas_dosen") {
    window.location.href = "kelas_dosen.html";
  } else if (pageName === "pesan_dosen") {
    window.location.href = "pesan_dosen.html";
  } else if (pageName === "profile_dosen") {
    window.location.href = "profile_dosen.html";
  }
}

// Popup
const openPopupButton = document.getElementById("openPopupButton");
const popup = document.getElementById("popup");
const itemPopups = document.querySelectorAll(".item-popup");

if (openPopupButton && popup) {
  // Menambahkan event listener untuk tombol klik membuka popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener pada setiap item dalam popup untuk menutup popup setelah item diklik
  itemPopups.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden"); // Menyembunyikan popup setelah item diklik
    });
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
