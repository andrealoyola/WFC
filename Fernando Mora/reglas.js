const NA = 19; // número de azulejos
const fileName = 'Artboard ';
const fileExtension = '.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		// TITLE 0
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 1
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// TITLE 2
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// TITLE 3
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// TITLE 4
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// TITLE 5

		UP: 2,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// TITLE 6
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// TITLE 7
		UP: 2,
		RIGHT: 5,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// TITLE 8
		UP: 3,
		RIGHT: 6,
		DOWN: 7,
		LEFT: 5,
	},
	{
		// TITLE 9
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 6,
	},
	{
		// TITLE 10
		UP: 4,
		RIGHT: 0,

		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 11
		UP: 3,
		RIGHT: 5,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 12
		UP: 4,
		RIGHT: 0,
		DOWN: 8,
		LEFT: 5,
	},
	{
		// TITLE 13
		UP: 7,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 14
		UP: 7,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 15
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 6,
	},
	{
		// TITLE 16
		UP: 8,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 17
		UP: 0,
		RIGHT: 5,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// TITLE 18
		UP: 7,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
];
