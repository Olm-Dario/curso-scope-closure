console.log(nameOfDog);

var nameOfDog = 'elmo';
console.log(nameOfDog);
/*
  Para el primer caso el console nos dara " undefined ", esto es debido
  a que estamos queriendo acceder a un valor que no esta definido, js 
  lo que hace es alevar como "primera linea" y le asigna el valor "undefined". Hay que tener cuadado debido a que en este caso no nos dara un error.
  
  Luego cuando asignamos un valor y usamos el console.log, como ya le asegnamos un valor nos traera ese valor
*/

nameOfDogg();

function nameOfDogg() {
  console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';

/*
  Salida: "El mejor perrito es undefined"

  Bueno, aca tenemos otro caso del mismo problema, js primero eleva las variables y les asigna undefined como dijimos anteriormente, luego eleva la funcion y por ultimo hace la llamada a esa funcion, entonces es por esto que cuando llamamos a la variable "elmo" en la funcion nos da "undefined". Nuevamente esto no nos dara un error asi que hay que tener mucho cuadado con estos casos.
*/