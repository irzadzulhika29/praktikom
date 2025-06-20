// Fungsi untuk menangani klik tombol notifikasi
function handleNotificationClick() {
  window.location.href = "notifikasi_praktikan.html";
}

// Fungsi untuk menangani klik tab "My Classes" atau "Teaching"
function handleTabClick(tabName) {
  const classListSection = document.getElementById("classListSection");
  const teachingMessageSection = document.getElementById(
    "teachingMessageSection"
  );
  const myClassesTabButton = document.getElementById("myClassesTabButton");
  const teachingTabButton = document.getElementById("teachingTabButton");

  // Kelas dasar untuk tab (status tidak aktif)
  const inactiveTabClasses = [
    "text-gray-600",
    "hover:bg-grey",
    "bg-transparent",
  ];
  const activeTabClasses = ["bg-blue", "text-white"]; // Kelas untuk tab aktif

  if (tabName === "myClasses") {
    classListSection.classList.remove("hidden");
    teachingMessageSection.classList.add("hidden");

    myClassesTabButton.classList.remove(...inactiveTabClasses);
    myClassesTabButton.classList.add(...activeTabClasses);

    teachingTabButton.classList.remove(...activeTabClasses);
    teachingTabButton.classList.add(...inactiveTabClasses);
  } else if (tabName === "teaching") {
    classListSection.classList.add("hidden");
    teachingMessageSection.classList.remove("hidden");

    teachingTabButton.classList.remove(...inactiveTabClasses);
    teachingTabButton.classList.add(...activeTabClasses);

    myClassesTabButton.classList.remove(...activeTabClasses);
    myClassesTabButton.classList.add(...inactiveTabClasses);
  }
}

// Fungsi untuk menangani navigasi dari bottom navigation bar
function handleNavClick(pageName) {
  if (pageName === "beranda") {
    window.location.href = "home_dosen.html";
  } else if (pageName === "kelas") {
    window.location.href = "kelas_dosen.html";
  } else if (pageName === "pesan") {
    window.location.href = "pesan_dosen.html";
  } else if (pageName === "profile") {
    window.location.href = "profile_dosen.html";
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

// Inisialisasi saat DOM (Document Object Model) selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi progress ring untuk setiap kartu kelas
  const card1Progress = document.getElementById("classCard1ProgressContainer");
  document.querySelectorAll(".class-card").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = "kelas_detail.html";
    });
  });

  if (card1Progress) {
    card1Progress.innerHTML = createProgressRing(70); // Contoh persentase
  }
  const card2Progress = document.getElementById("classCard2ProgressContainer");
  if (card2Progress) {
    card2Progress.innerHTML = createProgressRing(50); // Contoh persentase
  }
  const card3Progress = document.getElementById("classCard3ProgressContainer");
  if (card3Progress) {
    card3Progress.innerHTML = createProgressRing(30); // Contoh persentase
  }
  handleTabClick("myClasses");
});
