// filter
const categories = document.querySelectorAll(".item-category");
categories.forEach(function (category) {
  category.addEventListener("click", function () {
    categories.forEach(function (cat) {
      cat.classList.remove("active", "bg-blue");
      cat.classList.add("bg-grey");
      // Tambahkan juga perubahan warna teks
      const text = cat.querySelector("p");
      text.classList.remove("text-white");
      text.classList.add("text-dark-grey");
    });

    this.classList.remove("bg-grey");
    this.classList.add("active", "bg-blue");
    // Ubah warna teks untuk kategori yang aktif
    const activeText = this.querySelector("p");
    activeText.classList.remove("text-dark-grey");
    activeText.classList.add("text-white");
  });
});

// Popup
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

// Dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownText = document.getElementById("dropdownText");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Menambahkan event listener untuk tombol klik membuka atau menutup dropdown
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden"); // Menampilkan atau menyembunyikan menu dropdown
  dropdownIcon.classList.toggle("transform"); // Memberikan efek rotasi pada ikon
  dropdownIcon.classList.toggle("rotate-180"); // Rotasi 180 derajat pada ikon
});

// Menangani pemilihan item dropdown
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Mengubah teks yang ditampilkan di dropdownButton
    dropdownText.textContent = item.textContent;

    // Menyembunyikan dropdown setelah item dipilih
    dropdownMenu.classList.add("hidden");

    // Mengubah ikon kembali ke posisi semula (tidak terbalik)
    dropdownIcon.classList.remove("rotate-180");
  });
});


// Pop up 1 Confirmation
const openPopupConfirmationButton = document.getElementById(
  "confirmationButton"
);
const popupConfirmation = document.getElementById("confirmationPopup");
const closePopupConfirmationButton = document.getElementById(
  "closePopup"
);
// Menambahkan event listener untuk membuka popup
openPopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.remove("hidden"); // Menampilkan popup
});
// Menambahkan event listener untuk menutup popup
closePopupConfirmationButton.addEventListener("click", function () {
  popupConfirmation.classList.add("hidden"); // Menyembunyikan popup
});
