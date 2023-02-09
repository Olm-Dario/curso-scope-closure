'use strict';
/* Modo Estricto ECMAscript 5 */

pi = 3.1416;
console.log(pi);

/* Para este caso me devuelve el valor de la 
variable "pi" siempre y cuando no tenga " 'use strict'; "
al comienzo del archivo 
*/


function myfunction() {
  return pi = 3.1416;
}

console.log(myfunction());