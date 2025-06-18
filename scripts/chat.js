const itemChat = document.querySelectorAll(".item-chat");
itemChat.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "chat_detail_chat.html";
  });
});

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
const openPopupButton = document.getElementById("morebutton");
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
