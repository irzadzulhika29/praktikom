function switchTab(tab) {
  const tabBerlangsung = document.getElementById("tabBerlangsung");
  const tabRiwayat = document.getElementById("tabRiwayat");
  const listBerlangsung = document.getElementById("listBerlangsung");
  const listRiwayat = document.getElementById("listRiwayat");

  if (tab === "berlangsung") {
    tabBerlangsung.classList.add("bg-blue", "text-white");
    tabRiwayat.classList.remove("bg-blue", "text-white");
    tabRiwayat.classList.add("text-gray-600");
    listBerlangsung.classList.remove("hidden");
    listRiwayat.classList.add("hidden");
  } else {
    tabRiwayat.classList.add("bg-blue", "text-white");
    tabBerlangsung.classList.remove("bg-blue", "text-white");
    tabBerlangsung.classList.add("text-gray-600");
    listRiwayat.classList.remove("hidden");
    listBerlangsung.classList.add("hidden");
  }
}
