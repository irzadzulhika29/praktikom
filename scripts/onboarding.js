document.addEventListener("DOMContentLoaded", () => {
  const nextBtn1 = document.getElementById("nextBtn1");
  const nextBtn2 = document.getElementById("nextBtn2");
  const masukBtn = document.getElementById("masukBtn");

  if (nextBtn1) {
    nextBtn1.addEventListener("click", () => {
      window.location.href = "../pages/onboarding_2.html";
    });
  } else if (nextBtn2) {
    nextBtn2.addEventListener("click", () => {
      window.location.href = "../pages/onboarding_3.html";
    });
  } else {
    masukBtn.addEventListener("click", () => {
      window.location.href = "../pages/login_page.html";
    });
  }
});
