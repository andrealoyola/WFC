const NA = 18; // número de azulejos
const fileName = 'title ';
const fileExtension = '.png';
const reglas = [
	// reglas de los borded de cada azulejo
	{
		// title 0
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// title 1
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// title 2
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 3
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 4
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// title 5
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// title 6
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// title 7
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 8
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 9
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// title 10
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 11
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// title 12
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},

	{
		// title 13
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},

	{
		// title 14
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},

	{
		// title 15
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},

	{
		// title 16
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},

	{
		// title 17
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
];
