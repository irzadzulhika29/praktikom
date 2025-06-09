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
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => {
    window.location.href = "regis_asprak_5.html";
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
