// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

if (openPopupButton && popup) {
  // tampilkan popup saat tombol moreButton diklik
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // sembunyikan popup saat item popup diklik
  popupItems.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });
}

// popup confirmation
const confirmationButton = document.getElementById("confirmationButton");
const confirmationPopup = document.getElementById("confirmationPopup");
const closePopupButton = document.getElementById("closePopup");

if (confirmationButton && confirmationPopup) {
  // tampilkan popup konfirmasi saat tombol diklik
  confirmationButton.addEventListener("click", function () {
    confirmationPopup.classList.remove("hidden");
  });

  if (closePopupButton) {
    // sembunyikan popup konfirmasi saat tombol tutup diklik
    closePopupButton.addEventListener("click", function () {
      confirmationPopup.classList.add("hidden");
    });
  }
}