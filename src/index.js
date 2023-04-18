import validator from './validator.js';

console.log(validator);
//hice un boton que escucha el evento click, toma el valor del input y se lo pasa a la funcion isValid
let button= document.getElementById("validar");
button.addEventListener("click" , function () {
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;
    validator.isValid(numeroTarjeta);

/*let revesTarjeta = numeroTarjeta.split("").reverse().join("");
document.getElementById("revesTarjeta").innerHTML = revesTarjeta;
     alert (revesTarjeta);

/*const validator = {
    isValid: function(numeroTarjeta){
console.log ("voy a validar la siguiente tarjeta:" + numeroTarjeta)
}, 
    maskify: function(numeroTarjeta){
console.log("voy a enmascarar los numeros de esta tarjeta:" + numeroTarjeta) 
    }
}
validator.maskify("12345")*/     
});

let buttonMask= document.getElementById("maskify");
buttonMask.addEventListener("click", function (){
    const numeroTarjeta = document.getElementById("numero-tarjeta").value;
    document.getElementById("mask").innerHTML = validator.maskify(numeroTarjeta);
})


