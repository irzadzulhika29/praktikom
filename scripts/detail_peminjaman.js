const tolakButton = document.getElementById("tolak-confirmation");
const terimaButton = document.getElementById("terima-confirmation"); // Tombol Terima dengan ID
const popupDiterima = document.getElementById("popup-diterima");
const popupDitolak = document.getElementById("popup-ditolak");
const closeDiterimaButton = popupDiterima.querySelector(".close-button"); // Tombol Kirim pada popup diterima
const closeDitolakButton = popupDitolak.querySelector(".close-button"); // Tombol Kirim pada popup ditolak

// Menambahkan event listener untuk tombol Tolak
tolakButton.addEventListener("click", function () {
  // Menyembunyikan popup diterima, menampilkan popup ditolak
  popupDiterima.classList.add("hidden");
  popupDitolak.classList.remove("hidden");
});

// Menambahkan event listener untuk tombol Terima
terimaButton.addEventListener("click", function () {
  // Menyembunyikan popup ditolak, menampilkan popup diterima
  popupDitolak.classList.add("hidden");
  popupDiterima.classList.remove("hidden");
});

// Menambahkan event listener untuk tombol "Kirim" pada popup diterima
closeDiterimaButton.addEventListener("click", function () {
  popupDiterima.classList.add("hidden"); // Menyembunyikan popup diterima
});

// Menambahkan event listener untuk tombol "Kirim" pada popup ditolak
closeDitolakButton.addEventListener("click", function () {
  popupDitolak.classList.add("hidden"); // Menyembunyikan popup ditolak
});

// Popup
const openPopupButton = document.getElementById("openPopupButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item"); // Mengambil semua item dalam popup

if (openPopupButton && popup) {
  // Menambahkan event listener untuk tombol klik membuka popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener untuk setiap item dalam popup
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden"); // Menyembunyikan popup setelah item diklik
    });
  });
}


// Back Button
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.history.back(); // Membawa pengguna ke halaman sebelumnya
});
