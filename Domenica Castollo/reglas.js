const NA = 32; // número de azulejos
const fileName = 'tile_';
const fileExtension = '.jpg';

const reglas = [
	// reglas de los bordes de cada azulejo
	{
		// tile 0
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 2
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 3
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
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
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 9
		UP: 3,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 10
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 11
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 12
		UP: 4,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 13
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 14
		UP: 4,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 0,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 20
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 21
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 3,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 23
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 24
		UP: 4,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 25
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 26
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 27
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 28
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 29
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 30
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
];
