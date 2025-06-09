document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("LupaSandiForm");
  const button = document.getElementById("LupaSandiButton");

  button.addEventListener("click", function () {
    if (button.innerText === "Next") {
      form.classList.add("hidden");
      button.innerText = "Kembali ke Halaman Masuk";
    } else {
      window.location.href = "login_page.html";
    }
  });
});
