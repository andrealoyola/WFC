const NA = 46; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png';

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
		DOWN: 4,
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
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 5
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
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
		RIGHT: 4,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 1,
		RIGHT: 4,
		DOWN: 2,
		LEFT: 4,
	},
	{
		// tile 9
		UP: 4,
		RIGHT: 4,
		DOWN: 4,
		LEFT: 4,
	},
	{
		// tile 10
		UP: 1,
		RIGHT: 4,
		DOWN: 2,
		LEFT: 4,
	},
	{
		// tile 11
		UP: 3,
		RIGHT: 4,
		DOWN: 3,
		LEFT: 4,
	},
	{
		// tile 12
		UP: 1,
		RIGHT: 4,
		DOWN: 2,
		LEFT: 4,
	},
	{
		// tile 13
		UP: 4,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 4,
	},
	{
		// tile 14
		UP: 4,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 4,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 3,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 20
		UP: 4,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 21
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 24
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 25
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 26
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 27
		UP: 4,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 28
		UP: 0,
		RIGHT: 4,
		DOWN: 0,
		LEFT: 4,
	},
	{
		// tile 29
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 4,
	},
	{
		// tile 30
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 32
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 33
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 34
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 4,
	},
	{
		// tile 35
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 36
		UP: 0,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 4,
	},
	{
		// tile 37
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 38
		UP: 4,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 39
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 4,
	},
	{
		// tile 40
		UP: 0,
		RIGHT: 4,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 41
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 4,
	},
	{
		// tile 42
		UP: 1,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 4,
	},
	{
		// tile 43
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 44
		UP: 1,
		RIGHT: 0,
		DOWN: 4,
		LEFT: 0,
	},
	{
		// tile 45
		UP: 4,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
];
