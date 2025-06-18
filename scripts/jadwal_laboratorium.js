// popup
const openPopupButton = document.getElementById("morebutton");
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


// dropdown
const dropdownButton = document.getElementById("dropdownbutton");
const dropdownMenu = document.getElementById("dropdownmenu");
const dropdownText = document.getElementById("dropdowntext");
const dropdownIcon = document.getElementById("dropdownicon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownButton.addEventListener("click", function() {
  dropdownMenu.classList.toggle("hidden"); 
  dropdownIcon.classList.toggle("transform"); 
  dropdownIcon.classList.toggle("rotate-180"); 
});

dropdownItems.forEach(item => {
  item.addEventListener("click", function() {
    dropdownText.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  });
});

