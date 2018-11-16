let ul = document.querySelector('ul');
let span = document.querySelector('h2 span');
let form = document.querySelector('form');
let contForm = document.querySelector('.col-4');
let campos = Array.from(form.elements);
campos.pop();

const ajaxCall = (url, callback, params = null) => {
	window.fetch(url, params)
		.then(response => {
			if (params) return response.text();
			else return response.json();
		})
		.then(data => callback(data))
		.catch(error => console.error(`Error: `, error));
};

const getMovies = (data) => {
	const totalMovies = data.length;

	ul.innerHTML = '';
	span.innerText = totalMovies;

	for (let i of data) {
		ul.innerHTML += `<li class="list-group-item list-group-item-info">${i.title}</li>`;
	}
};

const setMovie = data => {
	if (data === 'Insertado') {
		contForm.innerHTML += `<div class="alert alert-success">Película insertada exitosamente</div>`;
	}
};

setInterval(() => { ajaxCall('http://localhost:2020/get.php', getMovies); }, 1000);

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let data = {
		title: campos[0].value,
		rating: campos[1].value,
		awards: campos[2].value,
		release_date: campos[3].value
	};

	if (
		data.title === '' ||
		data.rating === '' ||
		data.awards === '' ||
		data.release_date === ''
	) {
		window.alert('Campos vaciós');
	} else {
		const formData = new FormData();
		formData.append('data', JSON.stringify(data));

		ajaxCall('http://localhost:2020/post.php', setMovie, {
			method: 'POST',
			body: formData
		});
		campos.forEach(campo => { campo.value = ''; });
	}
});
