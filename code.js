const toggleBtn = document.getElementById("dashboardToggle");
const contentMiddle = document.getElementById("contentmiddle");

toggleBtn.addEventListener("click", () => {
  contentMiddle.classList.toggle("active");
});