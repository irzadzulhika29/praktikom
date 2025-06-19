// popup
const openPopupButton = document.getElementById("moreButton");
const popup = document.getElementById("popup");
const popupItems = document.querySelectorAll(".popup-item");

if (openPopupButton && popup) {
  // buka popup saat tombol diklik
  openPopupButton.addEventListener("click", function () {
    popup.classList.remove("hidden");
  });

  // tutup popup saat item diklik
  popupItems.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("hidden");
    });
  });

  // tutup popup saat klik di luar elemen popup
  document.addEventListener("click", function (event) {
    if (!popup.contains(event.target) && !openPopupButton.contains(event.target)) {
      popup.classList.add("hidden");
    }
  });
}

// dropdown
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownText = document.getElementById("dropdownText");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// toggle dropdown saat tombol diklik
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
  dropdownIcon.classList.toggle("transform");
  dropdownIcon.classList.toggle("rotate-180");
});

// ganti teks dropdown saat item dipilih
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropdownText.textContent = item.textContent;
    dropdownMenu.classList.add("hidden");
    dropdownIcon.classList.remove("rotate-180");
  });
});

// status presensi
const buttons = document.querySelectorAll(".btn-status");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // reset semua tombol ke bg abu
    buttons.forEach((btn) => {
      btn.classList.remove("bg-blue", "text-white");
      btn.classList.add("bg-grey");
    });

    // aktifkan tombol yang diklik
    button.classList.add("bg-blue", "text-white");
    button.classList.remove("bg-grey");
  });
});
