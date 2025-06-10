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

    // Back Button
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.history.back(); // Membawa pengguna ke halaman sebelumnya
});
