
function headerModal() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector('.form_header');
  var closeButton = document.querySelector('.button_close_btn');
  var saveButton = document.querySelector('.btn_saveAndClose');
  var backdrop = document.querySelector('.backdrop_header'); // Add this line


  function openForm() {
      console.log('Opening form');
      form.style.transform = 'scale(1)';
      backdrop.style.display = 'block'; 
  }


  function closeForm() {
      console.log('Closing form');
      form.style.transform = 'scale(1.1)';
      backdrop.style.display = 'none'; 
  }

  function saveAndClose(event) {
      event.preventDefault(); 
      console.log('Saving and closing form');
      
      closeForm();
  }

 
  closeButton.addEventListener('click', closeForm);
  saveButton.addEventListener('click', saveAndClose);

 
});