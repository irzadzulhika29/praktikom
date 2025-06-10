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

// Mendapatkan elemen-elemen
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownText = document.getElementById("dropdownText");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownItems = document.querySelectorAll(".dropdown-item");

// Menampilkan atau menyembunyikan menu dropdown saat tombol diklik
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

const backButton = document.getElementById("backButton");
if (backButton) {
  backButton.addEventListener("click", function () {
    // Mencoba menggunakan history.back(), jika tidak berhasil redirect ke halaman laporan
    if (window.history.length > 1) {
      window.history.back(); // Membawa pengguna ke halaman sebelumnya
    } else {
      // Fallback jika tidak ada history sebelumnya
      window.location.href = "laporan.html";
    }
  });
}
