// location dropdown
const locationBtn = document.getElementById("locationBtn");
const locationDropdown = document.getElementById("locationDropdown");
 
locationBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  locationDropdown.classList.toggle("hidden");
});
 
document.addEventListener("click", function () {
  locationDropdown.classList.add("hidden");
});
 
locationDropdown.addEventListener("click", function (e) {
  e.stopPropagation();
});