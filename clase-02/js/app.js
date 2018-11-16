/* :::ITERADORES::: */
// Ej. 2 - Tabla de multiplicar
for (var i = 1; (3 * i) <= 135; i++) {
	/*
		En la condición del FOR tenemos esto (i * 3) <= 135
		(i * 3) - Da la multimplicación de 3 x 1, 3 x 2, 3 x 3, etc. Pues i aumenta de a uno
		(i * 3) <= 135 - Mientras que el resultado de dicha multiplicación sea menor o igual a 135 se hará ejecuta el bucle
	*/
	console.log('3 x ' + i + ' = ' + (i * 3));
}

// Ej. 3 - Dado
var dado = Math.ceil(Math.random() * 6); // Número random entre 1 y 6
console.log('Valor random: ' + dado);
switch (dado) {
	// Si el número random es 2, 4 ó 6
	case 2:
	case 4:
	case 6:
		console.log('El número ' + dado + ' es par.');
		break;
	default:
		console.log('El número ' + dado + ' es impar.');
}

// Ej. 4 - Aleatorio
var intentos = 1; // Al inicio nuestro contador de intentos será igual a 1
do {
	var aleatorio = Math.ceil(Math.random() * 37); // Numero aleatorio entre 1 y 37
	intentos++; // Cada vez que se ejecute el DO/WHILE le sumamos 1 a la cantidad de intentos
} while (aleatorio !== 19);
console.log('Salió el número 19, se tomaron ' + intentos + ' intentos para ello');

// Ej. 5 - for / continue
var pares = []; // Array vacío que va a guardar los números pares
for (var n = 1; n <= 100; n++) {
	if (n % 2 === 0) { // Si el número de la iteración, al ser dividido entre 2 su residuo es igual a 0, es par.
		pares.push(n); // Como el número es par, los insertamos en el array vacío
	}
}
console.log(pares);

/* :::FUNCIONES::: */
// Ej. 1 - From object to array
var estudiante = {
	nombre: 'Han Solo',
	curso: 'A new hope',
	dni: 25121977,
	email: 'hansolo@anewhope.com'
};

var objToArray = []; // Array vacío para insertar los valores del objeto estudiante

// Esta función recibe un objeto
function fromObjectToArray (obj) {
	for (var x in obj) { // Iteramos el objeto que nos den por parámetro con el FOR/IN
		objToArray.push(obj[x]); // Insertamos en el array vacío el valor de cada propiedad del objeto
		// obj[x] -> nos da el valor de la propiedad del objeto, si pusieramos solamente 'x' obtenemos la propiedad
	}
	return objToArray; // retornamos el array
}

console.log(fromObjectToArray(estudiante));

// Ej. 2 - Cambiar color del body

// Esta función recibe un string
function cambiarColorDeFondoDelBody (color) {
	// Si el parámetro recibido NO ES green NI #0f0 NI #00FF00 entramos el IF
	if (color !== 'green' && color !== '#0f0' && color !== '#00ff00') {
		document.body.style.backgroundColor = color; // Asignamos el valor que llegó en el parámetro al fondo del body
		return true; // Retornamos true para definir si se pudo cambiar el color
	}
	return false; // Si NO ingresó al IF retornamos false.
}

console.log('Cambió de color el body: ' + cambiarColorDeFondoDelBody('yellow'));

// Ej. 3 - Capturando los párrafos
var losP = document.querySelectorAll('p'); // Capturamos todos los <p> de nuestro documento

// Expresión de una función - Recibe como parámetro los <p> que capturamos y los recorre
var recorrerLosPe = function (losPe) {
	var noAfectados = 0; // Inicializamos nuestro contador en 0
	for (var i = 0; i < losPe.length; i++) {
		// A los elementos <p> que son pares
		if (i % 2 === 0) {
			losPe[i].style.backgroundColor = 'red';
			losPe[i].style.fontWeight = 'bold';
			losPe[i].style.textAlign = 'center';
		} else {
			noAfectados++; // Sumamos de a 1 a nuestro contador de <p> no afectados
		}
	}
	return noAfectados; // Retorno la variable noAfectados
};

console.log('Párrafos no afectados: ' + recorrerLosPe(losP));

/* :::MÉTODOS DE ARRAY::: */
// Ej. 1 - Array de 1 al 20

var nuevoArray = []; // Creamos un array vacío

for (var z = 1; z <= 20; z++) {
	nuevoArray.push(z); // Insertamos los números del 1 al 20 al array vacío
}

// Ej. 2 - Raíz cuadrada
// .map() - Recibe un callback, ese callback recibe un parámetro que será uno a uno los elementos del array que recorre
// .map() - Retorna un array nuevo
var raizCuadrada = nuevoArray.map(function (item) {
	return Math.sqrt(item); // Retorna la raíz cuadrada de cada uno de los elementos del array recibido
});

console.log(raizCuadrada); // Mostramos en consola el array nuevo creado a partir del mapeo del array de números

// Ej. 3 - Detective
var enigma = ['l', 1, 'a', 2, 2, 5, 'p', 5, 7, 5, 3, 'e', 6, 'r', 7, 6, 5, 3, 2, 1, 's', 9, 9, 9, 6, 'e', 2, 'v', 5, 'e', 3, 'r', 2, 'a', 1, 6, 4, 1, 2, 'n', 2, 'c', 3, 5, 5, 5, 7, 'i', 4, 'a', 5, 2, 1, 3, 'e', 6, 's', 7, 'l', 4, 'a', 3, 'c', 2, 3, 1, 5, 3, 2, 'l', 3, 'a', 4, 'v', 5, 'e', 6];

// .filter() - Recibe un callback, ese callback recibe un parámetro que será uno a uno los elementos del array que recorre
// .filter() - Retorna un array nuevo
var alturaCalle = enigma.filter(function (item) {
	return typeof item !== 'string'; // Devuelve los elementos del array recibido que cumple con la condición de ser tipo string
}).reduce(function (acum, item) {
	// .reduce() - Recibe un callback, ese callback recibe dos parámetros. Un acumulador y cada uno de los elementos del array
	// .reduce() - Retorna un solo dato, puede ser String, número u objeto
	return acum + item;
});

var nombreCalle = enigma.filter(function (item) {
	return typeof item !== 'number';
}).reduce(function (acum, item) {
	return acum + item;
});

console.log(nombreCalle + ' ' + alturaCalle);
