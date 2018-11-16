window.onload = function () {
	var losP = document.querySelectorAll('p');

	var elMasLargo = losP[0].innerText.length;

	var cantECMA = 0;

	for (var unP of losP) {
		elMasLargo = Math.max(elMasLargo, unP.innerText.length);
		if (unP.innerText.match(/ECMA/g)) {
			cantECMA = cantECMA + unP.innerText.match(/ECMA/g).length;
		}
		if (unP.innerText.indexOf('ActionScript') !== -1) {
			console.log(unP);
			unP.innerText = unP.innerText.replace('ActionScript', 'PORQUERÍASCRIPT');
		}
	}

	for (var unPLargo of losP) {
		if (elMasLargo === unPLargo.innerText.length) {
			unPLargo.style.background = 'red';
		}
	}

	console.log('El p más largo tiene: ' + elMasLargo + ' letras');
	console.log('En el documento aparecen ' + cantECMA + ' veces la palabra ECMA');
};
