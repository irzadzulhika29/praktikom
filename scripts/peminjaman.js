// tab navigasi
document.addEventListener("DOMContentLoaded", () => {
  const leftTab = document.getElementById("pengajuanTab");
  const rightTab = document.getElementById("riwayatTab");
  const leftContent = document.getElementById("pengajuanContent");
  const rightContent = document.getElementById("riwayatContent");

  // fungsi untuk mengganti tab
  function switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
    activeTab.classList.add("border-b-2", "text-blue");
    activeTab.classList.remove("text-gray-600");

    inactiveTab.classList.remove("border-b-2", "text-blue");
    inactiveTab.classList.add("text-gray-600");

    activeContent.classList.remove("hidden");
    activeContent.classList.add("block");
    inactiveContent.classList.remove("block");
    inactiveContent.classList.add("hidden");
  }

  // tab default yang aktif adalah pengajuan
  if (leftTab && rightTab && leftContent && rightContent) {
    switchTab(leftTab, rightTab, leftContent, rightContent);

    // event saat tab pengajuan diklik
    leftTab.addEventListener("click", () => {
      switchTab(leftTab, rightTab, leftContent, rightContent);
    });

    // event saat tab riwayat diklik
    rightTab.addEventListener("click", () => {
      switchTab(rightTab, leftTab, rightContent, leftContent);
    });
  }
});

// filter kategori
const categories = document.querySelectorAll(".item-category");
categories.forEach(function(category) {
  category.addEventListener("click", function() {
    categories.forEach(function(cat) {
      cat.classList.remove("active", "bg-blue");
      cat.classList.add("bg-grey");

      // ubah warna teks jadi abu saat tidak aktif
      const text = cat.querySelector("p");
      if (text) {
        text.classList.remove("text-white");
        text.classList.add("text-dark-grey");
      }
    });

    // aktifkan kategori yang diklik
    this.classList.remove("bg-grey");
    this.classList.add("active", "bg-blue");

    // ubah warna teks jadi putih untuk kategori aktif
    const activeText = this.querySelector("p");
    if (activeText) {
      activeText.classList.remove("text-dark-grey");
      activeText.classList.add("text-white");
    }
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

// popup konfirmasi tolak/terima
const rejectButton = document.getElementById("rejectButton");
const acceptButton = document.getElementById("acceptButton");
const acceptPopup = document.getElementById("acceptPopup");
const rejectPopup = document.getElementById("rejectPopup");

if (rejectButton && acceptButton && acceptPopup && rejectPopup) {
  const closeAcceptButton = acceptPopup.querySelector(".close-button");
  const closeRejectButton = rejectPopup.querySelector(".close-button");

  // tombol tolak diklik
  rejectButton.addEventListener("click", function() {
    acceptPopup.classList.add("hidden");
    rejectPopup.classList.remove("hidden");
  });

  // tombol terima diklik
  acceptButton.addEventListener("click", function() {
    rejectPopup.classList.add("hidden");
    acceptPopup.classList.remove("hidden");
  });

  // tombol kirim pada popup diterima
  if (closeAcceptButton) {
    closeAcceptButton.addEventListener("click", function() {
      acceptPopup.classList.add("hidden");
    });
  }

  // tombol kirim pada popup ditolak
  if (closeRejectButton) {
    closeRejectButton.addEventListener("click", function() {
      rejectPopup.classList.add("hidden");
    });
  }
}