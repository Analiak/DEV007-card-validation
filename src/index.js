import validator from './validator.js';

console.log(validator);
let button= document.getElementById("validar");
button.addEventListener("click" , function () {
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;
    alert(numeroTarjeta);
});

//const string = "4,3,4,9,5,6,5,2,0,2,5,8,0,8,9,4";
//return '434'.charAt(1);

 