document.getElementById("openPopupBtn").addEventListener("click", function () {
  document.getElementById("popup").classList.add("active");
});

document.getElementById("closePopupBtn").addEventListener("click", function () {
  document.getElementById("popup").classList.remove("active");
});
