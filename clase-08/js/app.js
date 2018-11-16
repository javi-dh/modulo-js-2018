/* CONSTANTS */
const main = document.querySelector('#msgContainer');
const form = document.querySelector('#toDoForm');
const doText = document.querySelector('#insertToDo');
const doList = document.querySelector('.list-group');
const btnSaveContainer = document.querySelector('#btnSave');
const btnForgetContainer = document.querySelector('#btnForget');

const saveBtn = document.createElement('button');
saveBtn.classList.add('btn');
saveBtn.classList.add('btn-warning');
saveBtn.innerText = '¿Guardar tareas?';

const forgetBtn = document.createElement('button');
forgetBtn.classList.add('btn');
forgetBtn.classList.add('btn-danger');
forgetBtn.innerText = '¿Olvidar tareas?';

/* ARROW FUNCTIONS */
const forgetList = () => {
	window.localStorage.removeItem('doList');
	forgetBtn.style.display = 'none';

	main.innerHTML = `<div class="alert alert-danger">¡Se olvidaron todas las tareas!</div>`;
	setTimeout(() => {
		main.innerHTML = '';
	}, 4000);
};

const saveList = () => {
	window.localStorage.setItem('doList', doList.innerHTML);
	btnForgetContainer.append(forgetBtn);
	forgetBtn.addEventListener('click', forgetList);

	let cant = doList.children.length;
	main.innerHTML = `<div class="alert alert-success">¡Se agregaron ${cant} tareas!</div>`;
	setTimeout(() => {
		main.innerHTML = '';
	}, 4000);
};

const askForChildren = () => {
	if (doList.children.length === 1 && !window.localStorage.getItem('doList')) {
		btnSaveContainer.append(saveBtn);
		saveBtn.addEventListener('click', saveList);
	}

	if (doList.children.length !== 0) {
		const itemList = Array.from(doList.children);
		itemList.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.remove('list-group-item-info');
				item.classList.add('list-group-item-danger');
			});
		});
	}
};

/* ¿localStorage? */
if (window.localStorage.getItem('doList')) {
	doList.innerHTML = window.localStorage.getItem('doList');

	btnSaveContainer.append(saveBtn);
	btnForgetContainer.append(forgetBtn);

	saveBtn.addEventListener('click', saveList);
	forgetBtn.addEventListener('click', forgetList);
}

/* SUBMIT EVENT */
form.addEventListener('submit', e => {
	e.preventDefault();

	let textForList;

	if (doText.value.trim() === '') {
		doText.classList.add('is-invalid');
		doText.parentElement.querySelector('.invalid-feedback').innerText = 'El campo no puede estar vacío';
	} else {
		textForList = doText.value;
		doText.value = '';
		doText.classList.remove('is-invalid');
		doText.parentElement.querySelector('.invalid-feedback').innerText = '';
		let newItem = `<li class="list-group-item list-group-item-info">${textForList} <button type="button" class="close"><span >&times;</span></button></li>`;
		doList.innerHTML += newItem;
		askForChildren();
		doText.autofocus = true;
	}
});
