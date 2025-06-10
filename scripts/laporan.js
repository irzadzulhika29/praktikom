// Popup
const openPopupButton = document.getElementById("openPopupButton");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopupButton");

if (openPopupButton && popup && closePopupButton) {
  // Menambahkan event listener untuk tombol klik membuka popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener untuk tombol klik menutup popup
  closePopupButton.addEventListener("click", function () {
    popup.classList.add("hidden"); // Menyembunyikan popup
  });
}

// Back Button
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.history.back(); // Membawa pengguna ke halaman sebelumnya
});
