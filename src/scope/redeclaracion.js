/*--------------- VAR  --------------*/
var firstName; // undefined
firstName = 'oscar';

console.log(firstName);

/*-----------------------------------*/

var lastName = 'David'; // Declarar / Asignar
lastName = 'Ana'; // Asignar

console.log(lastName);

/*-----------------------------------*/

var secondName = 'David'; // Declarar / Asignando
var secondName = 'Ana'; // Redeclarar y asignar

console.log(secondName);

/*-------------- LET ----------------*/

let fruit = 'apple'; // Declarar y Asignar
fruit = 'kiwi'; //Reasignar

/* ---------------------------------

Con let nosotros no podemos redeclarar una variable, si nos dejaria 
darle un nuevo valor.

let fruit = 'banana'; 

------------------------------------
*/

/*------------ CONST ----------------*/

const animal = 'dog'; // Declarar y asignar
console.log(animal);

/*
En los siguientes ejemplos podemos ver que con CONST no podemos
reasignar un valor a una constante y mucho menos reclararla, pero
hay que entender que esto pasa porque las constantes son inmutables

animal = 'cat'; // Reasignar
const animal = 'snake'; //Declarar y asgignar
*/

const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

/*
Bueno como veran en este caso puedo dar valores nuevos a la constante
"vehicles", pero ¿no era que no se podia dar nuevos valores a una 
constante?, lo que pasa en este caso es que en realidad no estamos 
reasignando sino apuntando a una nueva referencia.
*/
