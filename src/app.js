import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  const alert = document.querySelector('.alert');

  console.log(alert);

  alert.addEventListener('click',function(event) {
    console.log(event);
    if(alert.classList.contains('alert-warning')) {
        alert.classList.remove('alert-warning');
        alert.classList.add('alert-info');
    } else {
        alert.classList.remove('alert-info');
        alert.classList.add('alert-warning');
    }
  })

  const inputLastName = document.getElementById("lastname");

  inputLastName.addEventListener('input', function(event) {
    // console.log(event);
    console.log(event.target.value, 'value')
    console.log('Input Lastname')
  });


};
