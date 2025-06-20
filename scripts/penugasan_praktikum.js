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
  const tambahBtn = document.getElementById("tambahButton");
  const modal = document.getElementById("buatBaruModal");
  const backdrop = document.getElementById("modalBackdrop");
  const buatItems = document.querySelectorAll(".buat-item");

  // hidding nya
  if (tambahBtn && modal && backdrop) {
    tambahBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    });

    const closeModal = () => {
      modal.classList.add("hidden");
      backdrop.classList.add("hidden");
    };

    backdrop.addEventListener("click", closeModal);

    buatItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Aksi spesifik bisa ditambahkan di sini
        closeModal();
      });
    });
  }

  const materialItems = document.querySelectorAll(".material-item");
  const assignmentItems = document.querySelectorAll(".assignment-item");

  materialItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "detail_modul.html";
    });
  });

  assignmentItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "detail_modul.html";
    });
  });
});
