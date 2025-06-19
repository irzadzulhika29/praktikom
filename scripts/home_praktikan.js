function handleNavClick(pageName) {
  if (pageName === "beranda") {
    window.location.href = "home_praktikan.html";
  } else if (pageName === "kelas") {
    window.location.href = "class.html";
  } else if (pageName === "pesan") {
    window.location.href = "chat.html";
  } else if (pageName === "profile") {
    window.location.href = "profile.html";
  }
}

function handleSectionClick(name) {
  if (name === "jadwal") {
    window.location.href = "jadwal_praktikan.html";
  } else if (name === "presensi") {
    window.location.href = "presensi.html";
  } else if (name === "peminjamanAlat") {
    window.location.href = "pengajuan.html";
  } else if (name === "rekapStudi") {
    window.location.href = "rekap_studi.html";
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
