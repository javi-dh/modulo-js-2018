var ironMan = {
	nombre: 'Iron Man',
	poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
	energia: 100,
	equipo: 'Avengers',
	getPoder: function (i) {
		return this.poderes[i];
	},
	fight: function () {
		do {
			var rand = Math.floor(Math.random() * 3); // número random entre 0 y 2

			// Si el número rand es 0
			if (rand === 0) {
				this.energia = this.energia - 10; // El poder es 'Volar' de la energía se descuentan 10 puntos
				console.log('Poder:', this.getPoder(0), '- Energia:', this.energia); // Mostramos en consola el resultado
			}

			// Si el número rand es 1
			if (rand === 1) {
				this.energia = this.energia - 15; // El poder es 'Lanzar Misiles' de la energía se descuentan 15 puntos
				console.log('Poder:', this.getPoder(1), '- Energia:', this.energia); // Mostramos en consola el resultado
			}

			// Si el número rand es 2
			if (rand === 2) {
				this.energia = this.energia - 25; // El poder es 'Disparar Láser' de la energía se descuentan 25 puntos
				console.log('Poder:', this.getPoder(2), '- Energia:', this.energia); // Mostramos en consola el resultado
			}
		} while (this.energia > 0);
	}
};

var hulk = {
	nombre: 'Hulk',
	poderes: ['Aplastar', 'Gritar', 'Golpear'],
	energia: 100,
	equipo: 'Avengers',
	getPoder: function (i) {
		return this.poderes[i];
	},
	fight: function () {
		do {
			var rand = Math.floor(Math.random() * 3); // número random entre 0 y 2

			// Si el número rand es 0
			if (rand === 0) {
				this.energia = this.energia - 5; // El poder es 'Volar' de la energía se descuentan 10 puntos
				console.log('Poder:', this.getPoder(0), '- Energia:', this.energia); // Mostramos en consola el resultado
			}

			// Si el número rand es 1
			if (rand === 1) {
				this.energia = this.energia - 25; // El poder es 'Lanzar Misiles' de la energía se descuentan 15 puntos
				console.log('Poder:', this.getPoder(1), '- Energia:', this.energia); // Mostramos en consola el resultado
			}

			// Si el número rand es 2
			if (rand === 2) {
				this.energia = this.energia - 10; // El poder es 'Disparar Láser' de la energía se descuentan 25 puntos
				console.log('Poder:', this.getPoder(2), '- Energia:', this.energia); // Mostramos en consola el resultado
			}
		} while (this.energia > 0);
	}
};

console.log('+++ IRON MAN +++');
ironMan.fight(); // Ejecutamos el método fight() del objeto ironMan

console.log('+++ HULK +++');
hulk.fight(); // Ejecutamos el método fight() del objeto hulk
