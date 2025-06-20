function handleNavClick(pageName) {
  if (pageName === "beranda") {
    window.location.href = "home_praktikan.html";
  } else if (pageName === "kelas") {
    window.location.href = "kelas.html";
  } else if (pageName === "pesan") {
    window.location.href = "chat.html";
  } else if (pageName === "profile") {
    window.location.href = "profile.html";
  } else if (pageName === "beranda_laboran") {
    window.location.href = "home_laboran.html";
  } else if (pageName === "laboratorium") {
    window.location.href = "laboratorium.html";
  } else if (pageName === "profile_laboran") {
    window.location.href = "profile_laboran.html";
  } else if (pageName === "profile_dosen") {
    window.location.href = "profile_dosen.html";
  } else if (pageName === "kelas_dosen") {
    window.location.href = "kelas_dosen.html";
  } else if (pageName === "pesan_dosen") {
    window.location.href = "pesan_dosen.html";
  } else if (pageName === "beranda_dosen") {
    window.location.href = "home_dosen.html";
  }
}
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
