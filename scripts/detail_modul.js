let textButton = document.getElementById("buttonSubmitAssignment").textContent;

function toggleGeneralInfo() {
  const content = document.getElementById("informasiUmumContent");
  const iconSvg = document.getElementById("informasiUmumIcon");
  content.classList.toggle("hidden");
  iconSvg.classList.toggle("rotate-90");
}
function handleTabClick(tabName) {
  const assignmentTab = document.getElementById("tabAssignment");
  const materialTab = document.getElementById("tabMaterial");
  const buttonMaterial = document.getElementById("buttonMaterial");
  const buttonAssignment = document.getElementById("buttonAssignment");
  const inactiveTab = ["text-gray-600", "hover:bg-grey", "bg-transparent"];
  const activeTab = ["bg-blue", "text-white"];

  if (tabName === "material") {
    materialTab.classList.remove("hidden");
    assignmentTab.classList.add("hidden");
    buttonMaterial.classList.remove(...inactiveTab);
    buttonMaterial.classList.add(...activeTab);

    buttonAssignment.classList.remove(...activeTab);
    buttonAssignment.classList.add(...inactiveTab);
  } else if (tabName === "assignment") {
    materialTab.classList.add("hidden");
    assignmentTab.classList.remove("hidden");
    buttonAssignment.classList.remove(...inactiveTab);
    buttonAssignment.classList.add(...activeTab);

    buttonMaterial.classList.remove(...activeTab);
    buttonMaterial.classList.add(...inactiveTab);
  }
}

function handleFileUpload(event) {
  const fileList = Array.from(event.target.files);
  const fileDisplay = document.getElementById("uploadedFiles");
  const statusText = document.getElementById("status");
  const btnSubmitAssignment = document.getElementById("buttonSubmitAssignment");

  fileList.forEach((file) => {
    const fileElement = document.createElement("div");
    fileElement.className =
      "flex items-center gap-2 p-2 bg-gray-100 rounded-md text-sm text-gray-800";

    fileElement.innerHTML = `
        <img src="../../assets/svg/pdf-icon.svg" alt="file"  />
        <span>${file.name}</span>
      `;

    fileDisplay.appendChild(fileElement);
  });

  if (fileList.length > 0) {
    statusText.textContent = "Turned in";
    statusText.classList.remove("text-red-600");
    statusText.classList.add("text-green-600");
    btnSubmitAssignment.textContent = "Kumpulkan";
    textButton = btnSubmitAssignment.textContent;
  }

  event.target.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const btnSubmitAssignment = document.getElementById("buttonSubmitAssignment");
  const btnUploadFile = document.getElementById("buttonUploadFile");
  btnSubmitAssignment.addEventListener("click", () => {
    if (btnSubmitAssignment.textContent !== "Batal Kirim") {
      btnSubmitAssignment.textContent = "Batal Kirim";
      btnUploadFile.classList.add("hidden");
    } else {
      btnSubmitAssignment.textContent = textButton;
      btnUploadFile.classList.remove("hidden");
    }
  });
});
