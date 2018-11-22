// En el evento onload se dispara la función
window.onload = function () {
	// Capturamos todos los <p> del documento
	var losP = document.querySelectorAll('p');

	// Inicializamos la variable por defecto asumiendo que el <p> de mayor longitud es el 1ero
	var elMasLargo = losP[0].innerText.length;

	// Declaramos la variable cantECMA y asignamos su valor inicial en cero
	var cantECMA = 0;

	// Iteramos sobre la cantidad total de <p>'s
	for (var unP of losP) {
		/*
		* elMasLargo lo vamos a hayar comparando el valor actual de la variable con el <p> de esa iteración
		* de ellos dos obtendremos el más largo y lo asignaremos a la variable elMasLargo
		* En cada iteración se hace dicha comparación
		*/
		elMasLargo = Math.max(elMasLargo, unP.innerText.length);

		// Si el <p> de ésta iteración tiene 1 vez o más el string "ECMA"...
		if (unP.innerText.match(/ECMA/g)) {
			// ...a la variable cantECMA cuyo valor inicial es cero le sumamos la cantidad de veces que se encontró el string
			// ( recordar que match() retorna un array con todas las coincidencias del string buscando )
			cantECMA = cantECMA + unP.innerText.match(/ECMA/g).length;
		}

		// Si dentro del <p> de ésta iteración se encuentra la existencia de la palabra "ActionScript"...
		if (unP.innerText.indexOf('ActionScript') !== -1) {
			// ...reemplazamos esa palabra por la palabra 'PORQUERÍASCRIPT'
			unP.innerText = unP.innerText.replace('ActionScript', 'PORQUERÍASCRIPT');
		}
	}

	// Iteramos sobre la cantidad total de <p>'s
	for (var unPLargo of losP) {
		// Si el valor de la variable elMasLargo coincide con la longitud de ese <p> en esta iteración...
		if (elMasLargo === unPLargo.innerText.length) {
			// ...a ese <p> le asignamos un color de fondo rojo
			unPLargo.style.background = 'red';
		}
	}

	// Hacemos los console.log() correspondientes:
	console.log('El p más largo tiene: ' + elMasLargo + ' letras');
	console.log('En el documento aparecen ' + cantECMA + ' veces la palabra ECMA');
};
