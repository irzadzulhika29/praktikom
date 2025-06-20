// Fungsi untuk toggle informasi umum
function toggleGeneralInfo() {
  const content = document.getElementById("informasiUmumContent");
  const iconSvg = document.getElementById("informasiUmumIcon");
  content.classList.toggle("hidden");
  iconSvg.classList.toggle("rotate-90");
}

// Fungsi untuk menangani navigasi dari bottom navigation bar
function handleNavClick(pageName) {
  if (pageName === "penugasan") {
    window.location.href = "penugasan_praktikum.html";
  } else if (pageName === "peserta") {
    window.location.href = "peserta_praktikum.html";
  } else if (pageName === "forum") {
    window.location.href = "detail_class.html";
  }
}

function handleFiturAsprak(name) {
  if (name === "penilaian") {
    window.location.href = "kelas_penilaian_asprak.html";
  } else if (name === "presensi") {
    window.location.href = "kelas_presensi_asprak.html";
  } else if (name === "laporan") {
    window.location.href = "laporan_asprak.html";
  }
}

// Fungsi untuk membuat progress ring (lingkaran progres)
function createProgressRing(percentage, colorCode = "#FF6823") {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return `
        <div class="relative w-16 h-16 flex-shrink-0">
            <svg class="w-full h-full" viewBox="0 0 36 36">
                <circle class="text-gray-200"
                    stroke-width="3.8"
                    stroke="currentColor" 
                    fill="transparent"
                    r="${radius}"
                    cx="18"
                    cy="18"
                />
                <circle class="progress-ring__circle--animated"
                    stroke-width="3.8"
                    stroke-dasharray="${circumference} ${circumference}"
                    style="stroke-dashoffset: ${offset}; stroke: ${colorCode};"
                    stroke-linecap="round"
                    fill="transparent"
                    r="${radius}"
                    cx="18"
                    cy="18"
                />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-lg font-semibold" style="color: ${colorCode};">${percentage}%</span>
            </div>
        </div>
    `;
}

// Fungsi untuk memperbarui progress bar presensi
function updatePresensiBar(percentage) {
  const progressBarFill = document.getElementById("presensiProgressBarFill");
  const percentageText = document.getElementById("presensiPercentageText");

  if (progressBarFill && percentageText) {
    progressBarFill.style.width = percentage + "%";
    percentageText.textContent = percentage + "%";
  }
}

// Inisialisasi saat DOM (Document Object Model) selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  const progressContainer = document.getElementById(
    "classDetailProgressContainer"
  );
  if (progressContainer) {
    progressContainer.innerHTML = createProgressRing(70);
    updatePresensiBar(100);
  }

  const infoContent = document.getElementById("informasiUmumContent");
  const infoIcon = document.getElementById("informasiUmumIcon");
  if (infoContent && infoIcon) {
    // Pastikan elemen ada
    if (infoContent.classList.contains("hidden")) {
      infoIcon.classList.remove("rotate-0");
    } else {
      infoIcon.classList.add("rotate-0");
    }
  }

  const modul = document.getElementById("modul");
  if (modul) {
    modul.addEventListener("click", function () {
      window.location.href = "detail_modul.html";
    });
  }
});
