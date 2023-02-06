// variables

var a; //declarado
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion

//Global Scope
var fruit = 'apple'; //global

function bastFruit() {
	console.log(fruit);
}

bastFruit();

//Caso especial
function countries() {
	country = 'Argentina'; // Global
	console.log(country);
}

countries();
console.log(country);
