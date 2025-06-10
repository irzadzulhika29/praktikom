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
