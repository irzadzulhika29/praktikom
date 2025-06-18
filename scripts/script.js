document.addEventListener("DOMContentLoaded", () => {
  // Tab Switching
  const leftTab = document.getElementById("left-tab");
  const rightTab = document.getElementById("right-tab");
  const leftContent = document.getElementById("left-content");
  const rightContent = document.getElementById("right-content");

  if (leftTab && rightTab && leftContent && rightContent) {
    // Function to switch tabs
    function switchTab(activeTab, inactiveTab, activeContent, inactiveContent) {
      activeTab.classList.add("bg-blue", "text-white");
      activeTab.classList.remove("bg-grey", "text-gray-600");
      inactiveTab.classList.add("bg-grey", "text-gray-600");
      inactiveTab.classList.remove("bg-blue", "text-white");

      activeContent.classList.add("active");
      inactiveContent.classList.remove("active");
    }

    // Set "Left" as the active tab by default
    switchTab(leftTab, rightTab, leftContent, rightContent);

    // Add click event to "Left" tab
    leftTab.addEventListener("click", () => {
      switchTab(leftTab, rightTab, leftContent, rightContent);
    });

    // Add click event to "Right" tab
    rightTab.addEventListener("click", () => {
      switchTab(rightTab, leftTab, rightContent, leftContent);
    });
  }

  // Dropdown
  const dropdownButton = document.getElementById("dropdownButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownIcon = document.getElementById("dropdownIcon");

  if (dropdownButton && dropdownMenu && dropdownIcon) {
    dropdownButton.addEventListener("click", () => {
      // Toggle visibility of the dropdown menu
      dropdownMenu.classList.toggle("hidden");

      // Toggle rotation of the dropdown icon
      dropdownIcon.classList.toggle("rotate-180");
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", (event) => {
      if (!event.target.closest(".flex-col")) {
        dropdownMenu.classList.add("hidden");
        dropdownIcon.classList.remove("rotate-180");
      }
    });
  }

  // Carousel
  const carousel = document.getElementById("carousel");
  if (carousel) {
    let currentIndex = 0;
    const totalImages = document.querySelectorAll("#carousel > div").length;

    function moveCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Move to the next image
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      moveCarousel();
    }

    // Move to the previous image
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      moveCarousel();
    }

    // Automatic slide every 3 seconds
    setInterval(nextSlide, 3000);
  }

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
});

// Tab Pengajuan dan Riwayat
document.addEventListener("DOMContentLoaded", function () {
  const pengajuanTab = document.getElementById("pengajuan-tab");
  const riwayatTab = document.getElementById("riwayat-tab");
  const pengajuanContent = document.getElementById("pengajuan");
  const riwayatContent = document.getElementById("riwayat");

  // Activate Pengajuan tab by default
  pengajuanTab.classList.add("border-b-2", "border-black", "text-black");
  pengajuanContent.classList.remove("hidden");

  // Add event listeners to tabs
  pengajuanTab.addEventListener("click", () => {
    // Reset all tabs and content
    pengajuanTab.classList.add("border-b-2", "border-black", "text-black");
    riwayatTab.classList.remove("border-b-2", "border-black", "text-black");

    pengajuanContent.classList.remove("hidden");
    riwayatContent.classList.add("hidden");
  });

  riwayatTab.addEventListener("click", () => {
    // Reset all tabs and content
    riwayatTab.classList.add("border-b-2", "border-black", "text-black");
    pengajuanTab.classList.remove("border-b-2", "border-black", "text-black");

    riwayatContent.classList.remove("hidden");
    pengajuanContent.classList.add("hidden");
  });
});
