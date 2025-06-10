document.addEventListener("DOMContentLoaded", () => {
  const leftTab = document.getElementById("pengajuan-tab");
  const rightTab = document.getElementById("riwayat-tab");
  const leftContent = document.getElementById("pengajuan-content");
  const rightContent = document.getElementById("riwayat-content");

  // Function to switch tabs
  function switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
    // Add styles for active tab
    activeTab.classList.add("border-gray-600", "text-blue");
    activeTab.classList.remove("text-gray-600");

    // Add styles for inactive tab
    inactiveTab.classList.remove("border-gray-600", "text-blue-500");
    inactiveTab.classList.add("text-gray-600");

    // Show active content and hide inactive content
    activeContent.classList.remove("hidden");
    activeContent.classList.add("block");
    inactiveContent.classList.remove("block");
    inactiveContent.classList.add("hidden");
  }

  // Set default active tab to Left
  switchTab(leftTab, rightTab, leftContent, rightContent);

  // Add event listener for Left tab
  leftTab.addEventListener("click", () => {
    switchTab(leftTab, rightTab, leftContent, rightContent);
  });

  // Add event listener for Right tab
  rightTab.addEventListener("click", () => {
    switchTab(rightTab, leftTab, rightContent, leftContent);
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
});// Popup
const openPopupButton = document.getElementById("openPopupButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item"); // Mengambil semua item dalam popup

if (openPopupButton && popup) {
  // Menambahkan event listener untuk tombol klik membuka popup
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden"); // Menampilkan popup
  });

  // Menambahkan event listener untuk setiap item dalam popup
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden"); // Menyembunyikan popup setelah item diklik
    });
  });
}
// Back Button
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.history.back(); // Membawa pengguna ke halaman sebelumnya
});
