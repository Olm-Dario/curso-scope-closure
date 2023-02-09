function greeting() {
  let userName = 'Dario';

  function displayUserName() {
    return `Hello ${userName}`;
  }
  return displayUserName();
}

const g = greeting();

console.log(g);
console.log(g());

/*
  La salida: 
  ----------------------------
  [Function: displayUserName]
  Hello Dario
  ----------------------------


---------------------------------------------------------------------
|  ¿Que pasa si nosotros retornamos como funcion a displayUserName? |
---------------------------------------------------------------------

function greeting() {
  let userName = 'Dario';

  function displayUserName() {
    return `Hello ${userName}`;
  }
  return displayUserName();
}

const g = greeting();

console.log(g);
console.log(g());


La salida: 
  ----------------------------
  Hello Dario
  TypeError: g is not a function
  ----------------------------

  En este caso nos daria un error

*/