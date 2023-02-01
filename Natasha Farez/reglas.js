const NA = 47; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png';
const reglas = [
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
		UP: 1,
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
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 5
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 9
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 10
		UP: 2,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 11
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 12
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 13
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 14
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 20
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 21
		UP: 0,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 23
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 24
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 25
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 26
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
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
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 29
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 30
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 32
		UP: 3,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 33
		UP: 1,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 34
		UP: 3,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 35
		UP: 3,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 2,
	},
	{
		// tile 36
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 37
		UP: 1,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 38
		UP: 1,
		RIGHT: 2,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 39
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 40
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 41
		UP: 0,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 42
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 43
		UP: 0,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 44
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 45
		UP: 2,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 46
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
];
