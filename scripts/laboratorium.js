// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

// buka popup saat tombol diklik
if (openPopupButton && popup) {
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // tutup popup saat item diklik
  popupItems.forEach(function(item) {
    item.addEventListener("click", function() {
      popup.classList.add("hidden");
    });
  });
}

// navigasi halaman berdasarkan nama
function handleNavClick(pageName) {
  if (pageName === "beranda_laboran") {
    window.location.href = "home_laboran.html";
  } else if (pageName === "laboratorium") {
    window.location.href = "laboratorium.html";
  } else if (pageName === "profile") {
    window.location.href = "profile_laboran.html";
  }
}
