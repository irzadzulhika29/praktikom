document.addEventListener("DOMContentLoaded", () => {
  const daftarButton = document.getElementById("daftarButton");
  const lanjutButton = document.getElementById("lanjutButton");
  daftarButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_2.html";
  });

  lanjutButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_3.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lanjutButton = document.getElementById("lanjutButton");
  lanjutButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_3.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lanjutButton2 = document.getElementById("lanjutButton2");
  lanjutButton2.addEventListener("click", () => {
    window.location.href = "regis_asprak_4.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lanjutButton2 = document.getElementById("lanjutButton3");
  lanjutButton2.addEventListener("click", () => {
    window.location.href = "regis_asprak_7.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_5.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const submitButton2 = document.getElementById("submitButton2");
  submitButton2.addEventListener("click", () => {
    window.location.href = "regis_asprak_6.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Hapus kelas aktif dari semua card
      cards.forEach((c) =>
        c.classList.remove("bg-blue-100", "border-blue-300")
      );
      // Tambahkan kelas aktif ke card yang diklik
      card.classList.add("bg-blue-100", "border-blue-300");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card1");
  const lanjutButton3 = document.getElementById("lanjutButton3");

  // Pastikan event listener hanya ditambahkan sekali
  lanjutButton3.addEventListener("click", () => {
    if (lanjutButton3.innerText === "Lanjut") {
      window.location.href = "regis_asprak_7.html";
    } else if (lanjutButton3.innerText === "Tambah") {
      window.location.href = "regis_asprak_2.html";
    }
  });

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const isActive = card.classList.contains("bg-blue-100");

      // Reset semua card
      cards.forEach((c) =>
        c.classList.remove("bg-blue-100", "border-blue-300")
      );

      // Jika sebelumnya tidak aktif, aktifkan
      if (!isActive) {
        card.classList.add("bg-blue-100", "border-blue-300");

        // Ubah tombol jika perlu
        if (lanjutButton3.innerText === "Tambah") {
          lanjutButton3.innerText = "Lanjut";
        }
      } else {
        // Tidak ada card aktif setelah diklik ulang
        if (lanjutButton3.innerText === "Lanjut") {
          lanjutButton3.innerText = "Tambah";
        }
      }
    });
  });
});
