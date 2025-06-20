function handleNavClick(pageName) {
  if (pageName === "penugasan") {
    window.location.href = "penugasan_praktikum.html";
  } else if (pageName === "peserta") {
    window.location.href = "peserta_praktikum.html";
  } else if (pageName === "forum") {
    window.location.href = "kelas_detail.html";
  } else if (pageName === "peserta_dosen") {
    window.location.href = "peserta_dosen.html";
  } else if (pageName === "forum_dosen") {
    window.location.href = "kelas_detail_dosen.html";
  } else if (pageName === "penugasan_dosen") {
    window.location.href = "penugasan_dosen.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const tambahBtn = document.querySelector(".bg-gradient-blue");
  const modal = document.getElementById("buatBaruModal");
  const backdrop = document.getElementById("modalBackdrop");

  tambahBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
  });

  backdrop.addEventListener("click", () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  };

  document.querySelectorAll(".buat-item").forEach((item) => {
    item.addEventListener("click", () => {
      // Bisa tambahkan redirect/aksi spesifik di sini
      closeModal();
    });
  });
});
