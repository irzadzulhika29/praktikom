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
