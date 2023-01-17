const celdas = [];
const RETICULA = 10;
let ancho; //altura de celda
let alto; //anchura de celda

const azulejos = [];

let opcionesI = [];

function preload() {
	for (let i = 0; i < NA; i++) {
		azulejos[i] = loadImage(`azulejos/${fileName}${i}${fileExtension}`);
	}
}

function setup() {
	createCanvas(windowHeight * 0.8, windowHeight * 0.8);

	ancho = width / RETICULA;
	alto = height / RETICULA;
	resetCels();
}

function resetCels() {
	for (let i = 0; i < azulejos.length; i++) {
		opcionesI.push(i);
	}

	for (let i = 0; i < RETICULA * RETICULA; i++) {
		celdas[i] = {
			colapsada: false,
			opciones: [...opcionesI],
		};
	}

	// esta sección verifica si la celda está en algun
	// borde de la pantalla pa asignar solo las opciones
	// que tengan un cero el borde
	for (let x = 0; x < RETICULA; x++) {
		for (let y = 0; y < RETICULA; y++) {
			const celdaIndex = x + y * RETICULA;
			const celdaActual = celdas[celdaIndex];

			if (x == 0) {
				checkBorder(celdaActual, 'LEFT');
			} else if (x == RETICULA - 1) {
				checkBorder(celdaActual, 'RIGHT');
			}

			if (y == 0) {
				checkBorder(celdaActual, 'UP');
			} else if (y == RETICULA - 1) {
				checkBorder(celdaActual, 'DOWN');
			}
		}
	}
}

function checkBorder(_celda, _regla) {
	const nuevasOpciones = [];
	for (let i = 0; i < _celda.opciones.length; i++) {
		if (reglas[_celda.opciones[i]][_regla] == 0) {
			const celdaCompatible = _celda.opciones[i];
			nuevasOpciones.push(celdaCompatible);
		}
	}
	_celda.opciones = nuevasOpciones;
}

function draw() {
	const celdasConOpciones = celdas.filter((celda) => {
		return celda.opciones.length > 0;
	});

	const celdasDisponibles = celdasConOpciones.filter((celda) => {
		return celda.colapsada == false;
	});
	if (celdasDisponibles.length > 0) {
		celdasDisponibles.sort((a, b) => {
			return a.opciones.length - b.opciones.length;
		});

		const celdasPorColapsar = celdasDisponibles.filter((celda) => {
			return (
				celda.opciones.length == celdasDisponibles[0].opciones.length
			);
		});

		const celdaSeleccionada = random(celdasPorColapsar);
		celdaSeleccionada.colapsada = true;

		const opcionSeleccionada = random(celdaSeleccionada.opciones);
		celdaSeleccionada.opciones = [opcionSeleccionada];

		for (let x = 0; x < RETICULA; x++) {
			for (let y = 0; y < RETICULA; y++) {
				const celdaIndex = x + y * RETICULA;
				const celdaActual = celdas[celdaIndex];

				// Este código es para dibujar las celdas sin opciones
				if (celdaActual.opciones.length < 1) {
					fill(255, 180, 180);
					stroke(180, 0, 0);
					strokeWeight(2);
					rect(x * ancho, y * alto, ancho, alto);
					line(
						x * ancho,
						y * alto,
						x * ancho + ancho,
						y * ancho + alto
					);
					line(
						x * ancho,
						y * ancho + alto,
						x * ancho + ancho,
						y * alto
					);
				}

				// esta sección busca y ubica la celda colapsada actual.
				if (celdaActual.colapsada) {
					const indiceDeAzulejo = celdaActual.opciones[0];
					const reglasActuales = reglas[indiceDeAzulejo];
					image(
						azulejos[indiceDeAzulejo],
						x * ancho,
						y * alto,
						ancho,
						alto
					);
					// Cambiar entropía UP
					if (y > 0) {
						const indiceUP = x + (y - 1) * RETICULA;
						const celdaUP = celdas[indiceUP];
						if (!celdaUP.colapsada) {
							cambiarEntropia(
								celdaUP,
								reglasActuales['UP'],
								'DOWN'
							);
						}
					}
					// Cambiar entropía RIGHT
					if (x < RETICULA - 1) {
						const indiceRIGHT = x + 1 + y * RETICULA;
						const celdaRIGHT = celdas[indiceRIGHT];
						if (!celdaRIGHT.colapsada) {
							cambiarEntropia(
								celdaRIGHT,
								reglasActuales['RIGHT'],
								'LEFT'
							);
						}
					}
					// Cambiar entropía DOWN
					if (y < RETICULA - 1) {
						const indiceDOWN = x + (y + 1) * RETICULA;
						const celdaDOWN = celdas[indiceDOWN];
						if (!celdaDOWN.colapsada) {
							cambiarEntropia(
								celdaDOWN,
								reglasActuales['DOWN'],
								'UP'
							);
						}
					}
					// Cambiar entropía LEFT
					if (x > 0) {
						const indiceLEFT = x - 1 + y * RETICULA;
						const celdaLEFT = celdas[indiceLEFT];
						if (!celdaLEFT.colapsada) {
							cambiarEntropia(
								celdaLEFT,
								reglasActuales['LEFT'],
								'RIGHT'
							);
						}
					}
				} else {
					// strokeWeight(6);
					// rect(x * ancho, y * alto, ancho, alto);
				}
			}
		}
		// noLoop();
	}
}

function cambiarEntropia(_celda, _regla, _opuesta) {
	const nuevasOpciones = [];
	for (let i = 0; i < _celda.opciones.length; i++) {
		if (_regla == reglas[_celda.opciones[i]][_opuesta]) {
			const celdaCompatible = _celda.opciones[i];
			nuevasOpciones.push(celdaCompatible);
		}
	}
	_celda.opciones = nuevasOpciones;
}

function mouseClicked() {
	background(255);

	resetCels();
}
