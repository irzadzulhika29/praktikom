document.getElementById("actionButton").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim().toLowerCase();

  // Simulasi login sederhana
  if (email === "laboran") {
    window.location.href = "../pages/laboran/home_laboran.html";
  } else if (email === "praktikum") {
    window.location.href = "../pages/praktikan_asprak/home_praktikan.html";
  } else if (email === "dosen") {
    window.location.href = "../pages/praktikan_asprak/home_praktikan.html";
  } else {
    alert("Email tidak dikenal. Gunakan 'praktikum' atau 'laboran'.");
  }
});
