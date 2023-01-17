const NA = 24; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		// tile 0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 2
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 3
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 4
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 5
		UP: 4,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 9
		UP: 2,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 10
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 11
		UP: 4,
		RIGHT: 2,
		DOWN: 4,
		LEFT: 2,
	},
	{
		// tile 12
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 13
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 14
		UP: 3,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 3,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 4,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 20
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 21
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
];
