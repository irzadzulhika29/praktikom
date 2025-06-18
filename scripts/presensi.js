// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item"); // Mengambil semua item dalam popup

if (openPopupButton && popup) {
  // Menambahkan event listener untuk tombol klik membuka popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener untuk setiap item dalam popup
  popupItems.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden"); // Menyembunyikan popup setelah item diklik
    });
  });
}

// dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownText = document.getElementById("dropdownText");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("transform");
  dropdownIcon.classList.toggle("rotate-180");
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownText.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  });
});

// status presensi
const buttons = document.querySelectorAll(".btn-status");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hapus bg-blue dan tambahkan bg-grey pada semua tombol
    buttons.forEach((btn) => {
      btn.classList.remove("bg-blue");
      btn.classList.add("bg-grey");
    });

    // Tambahkan bg-blue dan hapus bg-grey pada tombol yang diklik
    button.classList.add("bg-blue");
    button.classList.remove("bg-grey");
    
    // Tambahkan text-white pada tombol yang diklik
    button.classList.add("text-white");
  });
});

// Menambahkan event listener untuk dokumen untuk menutup popup saat klik di luar
document.addEventListener("click", function(event) {
  if (!popup.contains(event.target) && !openPopupButton.contains(event.target)) {
    popup.classList.add("hidden");
  }
});
