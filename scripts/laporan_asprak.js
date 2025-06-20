document.addEventListener("DOMContentLoaded", function () {
  const tabKehadiranBtn = document.getElementById("tabKehadiranBtn");
  const tabPenilaianBtn = document.getElementById("tabPenilaianBtn");
  const tabKehadiran = document.getElementById("tabKehadiran");
  const tabPenilaian = document.getElementById("tabPenilaian");

  const kehadiranData = document.getElementById("kehadiranData");
  const penilaianData = document.getElementById("penilaianData");

  const mahasiswa = [
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "100%",
      nilai: "A",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "80%",
      nilai: "B",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "90%",
      nilai: "B+",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "A",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "C",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "B−",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "C+",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "A",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "A",
    },
    {
      nama: "MUHAMMAD IRZA DZULHIKA",
      nim: "235150401111006",
      kehadiran: "70%",
      nilai: "B",
    },
  ];

  function renderKehadiran() {
    kehadiranData.innerHTML = "";
    mahasiswa.forEach((mhs, index) => {
      kehadiranData.innerHTML += `
        <div class="flex text-sm py-2 border-b">
          <div class="w-1/6">0${index + 1}</div>
          <div class="w-3/6">${mhs.nama}<br><span class="text-xs">${
        mhs.nim
      }</span></div>
          <div class="w-2/6">${mhs.kehadiran}</div>
        </div>`;
    });
  }

  function renderPenilaian() {
    penilaianData.innerHTML = "";
    mahasiswa.forEach((mhs, index) => {
      penilaianData.innerHTML += `
        <div class="flex text-sm py-2 border-b">
          <div class="w-1/6">0${index + 1}</div>
          <div class="w-3/6">${mhs.nama}<br><span class="text-xs">${
        mhs.nim
      }</span></div>
          <div class="w-2/6">${mhs.nilai}</div>
        </div>`;
    });
  }

  tabKehadiranBtn.addEventListener("click", () => {
    tabKehadiran.classList.remove("hidden");
    tabPenilaian.classList.add("hidden");
    tabKehadiranBtn.classList.add(
      "border-b-2",
      "border-blue-500",
      "text-blue",
      "font-semibold"
    );
    tabPenilaianBtn.classList.remove(
      "border-b-2",
      "border-blue-500",
      "text-blue",
      "font-semibold"
    );
  });

  tabPenilaianBtn.addEventListener("click", () => {
    tabKehadiran.classList.add("hidden");
    tabPenilaian.classList.remove("hidden");
    tabKehadiranBtn.classList.remove(
      "border-b-2",
      "border-blue-500",
      "text-blue",
      "font-semibold"
    );
    tabPenilaianBtn.classList.add(
      "border-b-2",
      "border-blue-500",
      "text-blue",
      "font-semibold"
    );
  });

  // Initial render
  renderKehadiran();
  renderPenilaian();
});
