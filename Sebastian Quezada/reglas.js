const NA = 45; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png.png';
const reglas = [
	//reglas de los bordes de cada azulejo
	{
		// tile 0
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 1
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 2
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 3
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 4
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 5
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 8
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 9
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
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
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 12
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 13
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 14
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 15
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
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
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 20
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 21
		UP: 0,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 22
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 24
		UP: 1,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 25
		UP: 2,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 26
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 27
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 28
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 29
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 30
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 32
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 33
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 34
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 35
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 36
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 37
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 38
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 39
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 40
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 41
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 42
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 43
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 44
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
];
