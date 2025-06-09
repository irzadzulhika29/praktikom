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
