window.onload = function () {
	var formulario = document.querySelector('.contact-form');

	var campos = formulario.elements;

	campos = Array.from(campos);
	campos.pop();

	const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	const regexNumbers = /^\d+$/;

	var campoFullName = formulario.fullName;
	var campoEmail = formulario.email;
	var campoPhone = formulario.phone;
	var campoPassword = formulario.password;
	var campoRePassword = formulario.rePassword;
	var campoCountry = formulario.country;
	var finalData = {};

	function validateEmpty () {
		var error = this.parentElement.querySelector('.invalid-feedback');
		var nombreCampo = this.parentElement.querySelector('label').innerText;
		if (this.value.trim() === '') {
			this.classList.add('is-invalid');
			error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
		} else {
			error.innerText = '';
			this.classList.remove('is-invalid');
		}
	}

	function validateEmptyAndEmail () {
		var error = this.parentElement.querySelector('.invalid-feedback');
		var nombreCampo = this.parentElement.querySelector('label').innerText;
		if (this.value.trim() === '') {
			this.classList.add('is-invalid');
			error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
		} else if (!regexEmail.test(this.value.trim())) {
			error.innerText = 'Escribí un formato de email valido';
		} else {
			error.innerText = '';
			this.classList.remove('is-invalid');
		}
	}

	function validateEmptyAndNumber () {
		var error = this.parentElement.querySelector('.invalid-feedback');
		var nombreCampo = this.parentElement.querySelector('label').innerText;
		if (this.value.trim() === '') {
			this.classList.add('is-invalid');
			error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
		} else if (!regexNumbers.test(this.value.trim())) {
			error.innerText = 'El teléfono debe contener solo números';
		} else {
			error.innerText = '';
			this.classList.remove('is-invalid');
		}
	}

	campoFullName.addEventListener('blur', validateEmpty);
	campoEmail.addEventListener('blur', validateEmptyAndEmail);
	campoPhone.addEventListener('blur', validateEmptyAndNumber);
	campoCountry.addEventListener('blur', validateEmpty);

	campoPassword.addEventListener('blur', function () {
		var error = this.parentElement.querySelector('.invalid-feedback');
		var nombreCampo = this.parentElement.querySelector('label').innerText;
		if (this.value.trim() === '') {
			this.classList.add('is-invalid');
			error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
		} else if (this.value.trim().length < 4) {
			error.innerText = 'La contraseña debe tener más de 4 caracteres';
		} else {
			error.innerText = '';
			this.classList.remove('is-invalid');
		}
	});

	campoRePassword.addEventListener('change', function () {
		var error = this.parentElement.querySelector('.invalid-feedback');
		if (this.value.trim() !== campoPassword.value.trim()) {
			this.classList.add('is-invalid');
			error.innerText = 'Las contraseñas no coinciden';
		} else {
			error.innerText = '';
			this.classList.remove('is-invalid');
		}
	});

	formulario.addEventListener('submit', function (e) {
		e.preventDefault();
		if (
			campoFullName.value.trim() === '' ||
			campoEmail.value.trim() === '' ||
			campoPhone.value.trim() === '' ||
			campoPassword.value.trim() === '' ||
			campoRePassword.value.trim() === '' ||
			campoCountry.value.trim() === ''
		) {
			campos.forEach(function (campo) {
				var error = campo.parentElement.querySelector('.invalid-feedback');
				var nombreCampo = campo.parentElement.querySelector('label').innerText;
				if (campo.value.trim() === '') {
					campo.classList.add('is-invalid');
					error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
				}
			});
		} else if (campoRePassword.value !== campoPassword.value) {
			campoRePassword.classList.add('is-invalid');
			campoRePassword.parentElement.querySelector('.invalid-feedback').innerText = 'Las contraseñas no coinciden';
		} else {
			campos.forEach(function (campo) {
				finalData[campo.name] = campo.value;
				var error = campo.parentElement.querySelector('.invalid-feedback');
				campo.classList.remove('is-invalid');
				campo.value = '';
				error.innerText = '';
			});
			formulario.style.display = 'none';

			var ul = document.createElement('ul');

			for (var key in finalData) {
				if (key !== 'password' && key !== 'rePassword') {
					var li = document.createElement('li');
					li.innerText = key + ': ' + finalData[key];
					ul.append(li);
				}
			}

			document.querySelector('.col-md-8').append(ul);
		}
	});
};
