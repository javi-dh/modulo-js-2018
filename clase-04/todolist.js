// Asignamo el evento load al window, le pasamos como callback una declaración de una función
window.addEventListener('load', wO);

function wO () {
	do {
		// Preguntamos por la cantidad de tareas y parseamos el dato a un número
		var cantTareas = Number(window.prompt('¿Cantidad de tareas?'));

		// Si la cantidad de tareas no es un número o es menor a 3 alertamos y evitamos que se ejecute lo que está después del IF
		if (isNaN(cantTareas) || cantTareas < 3) {
			window.alert('Ingresa un número mayor o igual a 3');
			continue;
		}

		// Al no entrar en el IF preguntamos al usuario si quiere confirmar la cantidad de tareas ingresadad
		var confirma = window.confirm('¿Querés ingresar ' + cantTareas + ' tareas?');
	} while (isNaN(cantTareas) || cantTareas < 3 || !confirma); // Haremos lo anterior mientras que la cantidad de tareas no sea un número o si siendo un número es menor a 3 o si el usuario no da confirmación

	var listadoTareas = []; // Creamos el array vacío que tendrá todas las tareas

	// Iteramos tantas veces como cantidad de tareas hayan ingresado
	for (var i = 1; i <= cantTareas; i++) {
		do {
			// preguntamos por el texto de cada tarea
			var textoTarea = window.prompt('Ingresá el texto de la tarea #' + i);

			// Si el campo de texto está vacío, alertamos y evitamos que se ejecuten las demás líneas después del IF
			if (textoTarea === '') {
				window.alert('El texto no puede estar vacío');
				continue;
			}

			// Al no entrar al IF se inserta en el array listadoTareas el texto de la tarea
			listadoTareas.push(textoTarea);
		} while (textoTarea === ''); // Haremos esto mientras el texto de la tarea sea vacío
	}

	var body = document.body; // Capturamos al body

	var ul = document.createElement('ul'); // Creamos un nodo UL

	// Iteramos el array listadoTareas
	for (var n = 0; n < listadoTareas.length; n++) {
		// Por cada posición en ese array creamos un NODO li
		var li = document.createElement('li');

		// Al nodo creado le insertamos el texto de la tarea. El valor de la posición i dentro del array
		li.innerText = listadoTareas[n];

		// Insertamos el nodo li a la lista creada
		ul.append(li);
	}

	body.innerHTML = '<h2>To Do List</h2>'; // Insertamos un <h2> al body

	body.append(ul); // Insertamos la lista <ul> creada con sus nodos <li> al body

	var p = document.createElement('p'); // Creamos un nodo <p>

	//
	p.innerHTML = 'Cantidad de tareas completadas: <b>0</b>'; // Insertamos contenido HTML al nodo <p> creado

	body.append(p); // Insertamos el nodo <p> creado al <body>

	var lis = Array.from(ul.children); // Capturamos todos los <li> de la lista <ul> parseando la colección HTML en un array

	var tareasCompletasTag = document.querySelector('p b').innerText; // Capturamos el elemento donde podremos la cantidad de tareas completadas

	var tareasCompletasTagValue = tareasCompletasTag.innerText; // Capturamos el contenido de texto interno que tiene el elemento de la cantidad de tareas completadas

	// Iteramos el array de elementos <li>
	lis.forEach(function (li) {
		// Asignamos a cada elemento <li> el evento click
		li.addEventListener('click', function () {
			// Al hace click sobre el <li> sumamos 1 a la cantidad de tareas completadas
			tareasCompletasTagValue++;

			// Al elemento que muestra la cantidad de tareas completadas le insertamos como texto el valor de la variable anterior
			tareasCompletasTag.innerText = tareasCompletasTagValue;

			// Al dar click sobre el <li> esperamos medio segundo para aplicarle este css
			setTimeout(function () {
				li.style.display = 'none';
			}, 500);

			// Si la cantidad de tareas completadas es mayor a la cantidad de elementos que tiene el array de elementos <li>
			if (tareasCompletasTagValue >= lis.length) {
				// Creamos un nodo H3
				var h3 = document.createElement('h3');

				// Insertamos este texto al nodo creado
				h3.innerHTML = '¡Felicitaciones, estás al día! <br> <i>5</i>';

				// Insertamos el nodo <h3> al body
				body.append(h3);

				// Capturamos el tag <i> que hay dentro de ese nodo <h3>
				var iTag = document.querySelector('h3 i');

				// Seteamos un contador con el valor de 5
				var cont = 5;

				// Generamos un intervalo de tiempo que se ejecuta cada segundo
				var timer = setInterval(function () {
					// Vamos descontando de a 1 al cont
					cont--;

					// Si el valo de cont es menor a 1
					if (cont < 1) {
						// Redirigiremos al sitio web de Netflix
						window.location = 'https://netflix.com';

						// Limpiamos el intervalo
						clearInterval(timer);
					}

					// Insertamos el valor de cont para mostrarlo en pantalla
					iTag.innerText = cont;
				}, 1000);
			}
		});
	});

	// Declaramos la variable counter, le asignamos el valor 0
	var counter = 0;

	// Generamos la expresión de una función que pasaremos como callback al setInterval de más abajo
	var intervalFn = function () {
		counter++; // sumamos de a 1 al counter
		console.log(counter);

		// Si el counter es igual a 5 alertamos
		if (counter === 5) {
			window.alert('¿Ey, estás ahí?');
		}
	};

	// Este intervalo se ejecuta cada segundo y llama como callback a la expresión de función intervalFn
	var timer2 = setInterval(intervalFn, 1000);

	// Cada vez que el mouse se mueva:
	window.onmousemove = function () {
		clearInterval(timer2); // reiniciamos el intervalo timer2
		counter = 0; // asignamos valor cero al counter
		timer2 = setInterval(intervalFn, 1000); // volvemos a iniciar el timer2
	};
};
