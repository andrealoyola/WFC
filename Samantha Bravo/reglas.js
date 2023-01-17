const NA = 15; // número de azulejos
const imageNames = 'tile';
const imageExtension = '.png';

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
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 2
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
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
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 5
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 8
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 9
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 10
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 11
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 12
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 13
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 14
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 15
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 17
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 18
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 19
		UP: 0,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
];
