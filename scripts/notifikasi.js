// filter kategori
const categories = document.querySelectorAll(".item-category");

categories.forEach(function(category) {
  category.addEventListener("click", function() {
    categories.forEach(function(cat) {
      cat.classList.remove("active", "bg-blue");
      cat.classList.add("bg-grey");

      // ubah warna teks jadi abu saat tidak aktif
      const text = cat.querySelector("p");
      text.classList.remove("text-white");
      text.classList.add("text-dark-grey");
    });

    // aktifkan kategori yang diklik
    this.classList.remove("bg-grey");
    this.classList.add("active", "bg-blue");

    // ubah warna teks jadi putih untuk kategori aktif
    const activeText = this.querySelector("p");
    activeText.classList.remove("text-dark-grey");
    activeText.classList.add("text-white");
  });
});

// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

if (openPopupButton && popup) {
  // buka popup saat tombol diklik
  openPopupButton.addEventListener("click", function() {
    popup.classList.remove("hidden");
  });

  // tutup popup saat item dipilih
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden");
    });
  });
}
