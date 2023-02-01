const NA = 28; // número de azulejos
const fileName = 'Pers ';
const fileExtension = '.png';

const reglas = [
	// reglas de los bordes de cada azulejo
	{
		// Pers 0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 1
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 2
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 3
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 4
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 5
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// Pers 6
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// Pers 7
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// Pers 8
		UP: 2,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// Pers 9
		UP: 3,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// Pers 10
		UP: 3,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// Pers 11
		UP: 3,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// Pers 12
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 13
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 14
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 15
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 16
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 17
		UP: 2,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// Pers 18
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 19
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 20
		UP: 0,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 21
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// Pers 22
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 23
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 24
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// Pers 25
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 26
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// Pers 27
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
];
