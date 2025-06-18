document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuButton");
  const menuModal = document.getElementById("menuModal");
  const daftarButton = document.getElementById("daftarAsprakButton");

  menuBtn.addEventListener("click", () => {
    menuModal.classList.toggle("hidden");
  });

  // Tutup modal jika klik di luar
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuModal.contains(e.target)) {
      menuModal.classList.add("hidden");
    }
  });

  daftarButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_1.html";
  });
});
