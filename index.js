import validator from './validator.js';

console.log(validator);
//hice un boton que escucha el evento click, toma el valor del input y se lo pasa a la funcion isValid
const button= document.getElementById("validar");
button.addEventListener("click" , function () {
  const numeroTarjeta = document.getElementById("numero-tarjeta").value;
  if (validator.isValid(numeroTarjeta) ){
    document.getElementById("numero-tarjeta").value = validator.maskify(numeroTarjeta);
    alert ("Su tarjeta es válida");
  } else {
    alert ("Su tarjeta es inválida");
  }
});