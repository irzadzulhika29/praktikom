document.addEventListener("DOMContentLoaded", () => {
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

  // Dropdown
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownIcon = document.getElementById("dropdownIcon");

  if (dropdownButton && dropdownMenu && dropdownIcon) {
    dropdownButton.addEventListener("click", () => {
      // Toggle visibility of the dropdown menu
      dropdownMenu.classList.toggle("hidden");

      // Toggle rotation of the dropdown icon
      dropdownIcon.classList.toggle("rotate-180");
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", (event) => {
      if (!event.target.closest(".flex-col")) {
        dropdownMenu.classList.add("hidden");
        dropdownIcon.classList.remove("rotate-180");
      }
    });
  }
});

// Pop up 1 Confirmation
const openPopupConfirmationButton = document.getElementById(
  "open-popup-confirmation"
);
const popupConfirmation = document.getElementById("popup-confirmation");
const closePopupConfirmationButton = document.getElementById(
  "close-popup-confirmation"
);

// Menambahkan event listener untuk membuka popup
openPopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.remove("hidden"); // Menampilkan popup
});

// Menambahkan event listener untuk menutup popup
closePopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.add("hidden"); // Menyembunyikan popup
});
