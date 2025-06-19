// popup
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

// dropdown 1 - Semester
const semesterDropdownButton = document.getElementById(
  "semesterDropdownButton"
);
const semesterDropdownMenu = document.getElementById("semesterDropdownMenu");
const semesterDropdownText = document.getElementById("semesterDropdownText");
const semesterDropdownIcon = document.getElementById("semesterDropdownIcon");
const semesterDropdownItems = document.querySelectorAll(
  ".semester-dropdown-item"
);

// Dapatkan elemen parent dari dropdown semester untuk menempatkan z-index pada container
const semesterDropdownContainer = semesterDropdownButton.closest(".relative");

semesterDropdownButton.addEventListener("click", function () {
  semesterDropdownMenu.classList.toggle("hidden");
  semesterDropdownIcon.classList.toggle("transform");
  semesterDropdownIcon.classList.toggle("rotate-180");

  // Tambah atau hapus kelas z-index saat dropdown dibuka/ditutup
  if (!semesterDropdownMenu.classList.contains("hidden")) {
    semesterDropdownContainer.classList.add("z-20"); // Menambahkan z-index tinggi saat terbuka
  } else {
    semesterDropdownContainer.classList.remove("z-20"); // Menghapus z-index saat tertutup
  }
});

semesterDropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    semesterDropdownText.textContent = item.textContent;
    semesterDropdownMenu.classList.add("hidden");
    semesterDropdownIcon.classList.remove("rotate-180");
    semesterDropdownContainer.classList.remove("z-20"); // Pastikan z-index dihapus saat item dipilih
  });
});

// dropdown 2 - Jenis Semester
const typeDropdownButton = document.getElementById("typeDropdownButton");
const typeDropdownMenu = document.getElementById("typeDropdownMenu");
const typeDropdownText = document.getElementById("typeDropdownText");
const typeDropdownIcon = document.getElementById("typeDropdownIcon");
const typeDropdownItems = document.querySelectorAll(".type-dropdown-item");

// Dapatkan elemen parent dari dropdown semester untuk menempatkan z-index pada container
const typeDropdownContainer = typeDropdownButton.closest(".relative");

typeDropdownButton.addEventListener("click", function () {
  typeDropdownMenu.classList.toggle("hidden");
  typeDropdownIcon.classList.toggle("transform");
  typeDropdownIcon.classList.toggle("rotate-180");

  // Tambah atau hapus kelas z-index saat dropdown dibuka/ditutup
  if (!typeDropdownMenu.classList.contains("hidden")) {
    typeDropdownContainer.classList.add("z-20"); // Menambahkan z-index tinggi saat terbuka
  } else {
    typeDropdownContainer.classList.remove("z-20"); // Menghapus z-index saat tertutup
  }
});

typeDropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    typeDropdownText.textContent = item.textContent;
    typeDropdownMenu.classList.add("hidden");
    typeDropdownIcon.classList.remove("rotate-180");
    typeDropdownContainer.classList.remove("z-20"); // Pastikan z-index dihapus saat item dipilih
  });
});
