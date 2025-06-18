// Popup
const moreButton = document.getElementById("morebutton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item"); // Mengambil semua item dalam popup

// Menutup popup ketika mengklik di luar popup
document.addEventListener("click", function(event) {
  if (popup && !popup.contains(event.target) && event.target !== moreButton) {
    popup.classList.add("hidden");
  }
});

if (moreButton && popup) {
  // Menambahkan event listener untuk tombol klik membuka popup
  moreButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Mencegah event click menyebar ke document
    popup.classList.toggle("hidden"); // Menampilkan atau menyembunyikan popup
  });

  // Menambahkan event listener untuk setiap item dalam popup
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden"); // Menyembunyikan popup setelah item diklik
    });
  });
}

// Dropdown - Periksa apakah elemen ada sebelum menambahkan event listener
const dropdownButton = document.getElementById("dropdownbutton");
const dropdownMenu = document.getElementById("dropdownmenu");
const dropdownText = document.getElementById("dropdowntext");
const dropdownIcon = document.getElementById("dropdownicon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

if (dropdownButton && dropdownMenu) {
  // Menampilkan atau menyembunyikan menu dropdown saat tombol diklik
  dropdownButton.addEventListener("click", function() {
    dropdownMenu.classList.toggle("hidden"); // Menampilkan atau menyembunyikan menu dropdown
    if (dropdownIcon) {
      dropdownIcon.classList.toggle("transform"); // Memberikan efek rotasi pada ikon
      dropdownIcon.classList.toggle("rotate-180"); // Rotasi 180 derajat pada ikon
    }
  });

  // Menutup dropdown ketika mengklik di luar dropdown
  document.addEventListener("click", function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.remove("rotate-180");
      }
    }
  });

  // Menangani pemilihan item dropdown
  if (dropdownItems.length > 0) {
    dropdownItems.forEach((item) => {
      item.addEventListener("click", function() {
        // Mengubah teks yang ditampilkan di dropdownButton
        if (dropdownText) {
          dropdownText.textContent = item.textContent;
        }

        // Menyembunyikan dropdown setelah item dipilih
        dropdownMenu.classList.add("hidden");

        // Mengubah ikon kembali ke posisi semula (tidak terbalik)
        if (dropdownIcon) {
          dropdownIcon.classList.remove("rotate-180");
        }
      });
    });
  }
}

// Pop up Confirmation
const confirmationButton = document.getElementById("confirmationbutton");
const confirmationPopup = document.getElementById("confirmationpopup");
const closePopupButton = document.getElementById("closepopup");

// Periksa apakah elemen ada sebelum menambahkan event listener
if (confirmationButton && confirmationPopup) {
  // Menambahkan event listener untuk membuka popup
  confirmationButton.addEventListener("click", function() {
    confirmationPopup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener untuk menutup popup
  if (closePopupButton) {
    closePopupButton.addEventListener("click", function() {
      confirmationPopup.classList.add("hidden"); // Menyembunyikan popup
    });
  }
}
