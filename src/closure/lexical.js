const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    //Funcion interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();


/* ------------------------------------------ */

function sumWithClosure(firstNum = 0) {
  return function (secondNum = 0) {
    return console.log(firstNum + secondNum);
  }
}

sumWithClosure(1)(3);

/* 
  Como se puede ver en este caso la funcion tiene doble parametro,
  si prestas atencion el retorno de la primera funcnion devuelve una
  funcion anonima, para este caso en particular para evitar errores
  se pone valores por defecto en los parametro ya que si no hacemos 
  nos daria error si llamamos la funcion y no le pasamos parametros
  para realizar la suma
*/