// filter kategori
const categories = document.querySelectorAll(".item-category");
categories.forEach(function (category) {
  category.addEventListener("click", function () {
    // reset semua kategori
    categories.forEach(function (cat) {
      cat.classList.remove("active", "bg-blue");
      cat.classList.add("bg-grey");
      const text = cat.querySelector("p");
      text.classList.remove("text-white");
      text.classList.add("text-dark-grey");
    });

    // aktifkan kategori yang diklik
    this.classList.remove("bg-grey");
    this.classList.add("active", "bg-blue");
    const activeText = this.querySelector("p");
    activeText.classList.remove("text-dark-grey");
    activeText.classList.add("text-white");
  });
});

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
  popupItems.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });
}

// dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownText = document.getElementById("dropdownText");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// toggle dropdown saat tombol diklik
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("transform");
  dropdownIcon.classList.toggle("rotate-180");
});

// pilih item dropdown
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownText.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  });
});

// popup konfirmasi
const openPopupConfirmationButton =
  document.getElementById("confirmationButton");
const popupConfirmation = document.getElementById("confirmationPopup");
const closePopupConfirmationButton = document.getElementById("closePopup");

// buka popup konfirmasi
openPopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.remove("hidden");
});

// tutup popup konfirmasi
closePopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.add("hidden");
});
