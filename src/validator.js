const validator = {
  isValid: function(numeroTarjeta){
    let arrayNumTarjeta = numeroTarjeta.split("");
    let arrayRevesTarjeta = numeroTarjeta.split("").reverse();
    console.log('numero tarjeta original', numeroTarjeta);
    console.log('array num tarjeta', arrayNumTarjeta);
    console.log('array invertido', arrayRevesTarjeta);

    /*let arrayPares = arr.filter((element, index) => { 
      return (index % 2 === 0);
    })*/


    console.log(arrayRevesTarjeta[3]);
    

  },
  maskify: function (numeroTarjeta) {
    return numeroTarjeta.slice(0,-4).replace(/./g, "#") + numeroTarjeta.slice(-4);
  }
}



  //aca se hace la logica del proyecto
  //creé los métodos isValid y maskify,con split convierte el string en array y con reverse devuelve un string reversado.


export default validator;
