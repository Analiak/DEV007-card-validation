const validator = {
  isValid: function(numeroTarjeta){
    let arrayNumTarjeta = numeroTarjeta.split("");
    let arrayRevesTarjeta = numeroTarjeta.split("").reverse();
    console.log('numero tarjeta original', numeroTarjeta);
    console.log('array num tarjeta', arrayNumTarjeta);
    console.log('array invertido', arrayRevesTarjeta);
    console.log(arrayRevesTarjeta[3]);
    let arrayFinal = arrayRevesTarjeta.map(function(x, index){
      if(index % 2 === 1){
        const resultado = x * 2;
        if(resultado >= 10){
          const unidad = resultado % 10;
          const decena = Math.trunc(resultado / 10);
          return unidad + decena;
        } else {
          return resultado;
        }
      } else {
        return x;
      }
      
    });

    console.log("array-dobles", arrayFinal);
    const suma = arrayFinal.reduce(function(acumulador, elemento){
      return parseInt(acumulador) + parseInt(elemento);
    })
      
    console.log("resultado de la suma es ", suma);

    if (suma % 10 == 0){
      console.log ("Su tarjeta es válida");
      return true;
    } else {
      console.log ("Su tarjeta es inválida");
      return false;
    }
    

  },
  maskify: function (numeroTarjeta) {
    return numeroTarjeta.slice(0,-4).replace(/./g, "#") + numeroTarjeta.slice(-4);
  }
};



  //aca se hace la logica del proyecto
  //creé los métodos isValid y maskify,con split convierte el string en array y con reverse devuelve un string reversado.


export default validator;
