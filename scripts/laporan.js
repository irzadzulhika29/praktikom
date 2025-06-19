// popup
const moreButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

// tutup popup saat klik di luar
document.addEventListener("click", function(event) {
  if (popup && !popup.contains(event.target) && event.target !== moreButton) {
    popup.classList.add("hidden");
  }
});

// toggle popup saat tombol diklik
if (moreButton && popup) {
  moreButton.addEventListener("click", function(event) {
    event.stopPropagation(); 
    popup.classList.toggle("hidden");
  });

  // tutup popup saat item dipilih
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
if (dropdownButton && dropdownMenu) {
  dropdownButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle("hidden");
    if (dropdownIcon) {
      dropdownIcon.classList.toggle("transform");
      dropdownIcon.classList.toggle("rotate-180");
    }
  });

  // tutup dropdown saat klik di luar
  document.addEventListener("click", function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.remove("rotate-180");
      }
    }
  });

  // ganti teks dan tutup dropdown saat item dipilih
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function() {
      if (dropdownText) {
        dropdownText.textContent = item.textContent;
      }
      dropdownMenu.classList.add("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.remove("rotate-180");
      }
    });
  });
}

// popup konfirmasi
const confirmationButton = document.getElementById("confirmationButton");
const confirmationPopup = document.getElementById("confirmationPopup");
const closePopupButton = document.getElementById("closePopup");

// buka dan tutup popup konfirmasi
if (confirmationButton && confirmationPopup) {
  confirmationButton.addEventListener("click", function() {
    confirmationPopup.classList.remove("hidden");
  });

  if (closePopupButton) {
    closePopupButton.addEventListener("click", function() {
      confirmationPopup.classList.add("hidden");
    });
  }
}
