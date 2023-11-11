function headerModal() {
  var dropdownContent = document.getElementById("myDropdown");
  var computedStyle = window.getComputedStyle(dropdownContent);

  if (computedStyle.display === "block" || computedStyle.display === "") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}