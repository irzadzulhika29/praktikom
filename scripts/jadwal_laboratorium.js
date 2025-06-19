// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

// buka popup saat tombol diklik
if (openPopupButton && popup) {
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // tutup popup saat item diklik
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden");
    });
  });
}

// dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownText = document.getElementById("dropdownText");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// toggle dropdown saat tombol diklik
dropdownButton.addEventListener("click", function() {
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("transform");
  dropdownIcon.classList.toggle("rotate-180");
});

// pilih item dropdown
dropdownItems.forEach(item => {
  item.addEventListener("click", function() {
    dropdownText.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  });
});
