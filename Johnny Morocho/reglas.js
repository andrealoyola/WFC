const NA = 26; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		// tile 0
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 2
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 3
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 4
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 5
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 6
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 8
		UP: 2,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 9
		UP: 0,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 10
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 11
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 12
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 13
		UP: 2,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 14
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 15
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 16
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 18
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 20
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 21
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 24
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 25
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
];
