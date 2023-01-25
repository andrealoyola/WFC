const NA = 28; // número de azulejos
const fileName = 'per-';
const fileExtension = '.png';
const reglas = [
	// reglas de los borded de cada azulejo
	{
		//per-0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-01
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		//per-02
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		//per-03
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		//per-04
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		//per-05
		UP: 1,
		RIGHT: 2,
		DOWN: 4,
		LEFT: 3,
	},
	{
		//per-06
		UP: 1,
		RIGHT: 2,
		DOWN: 4,
		LEFT: 3,
	},
	{
		//per-07
		UP: 1,
		RIGHT: 2,
		DOWN: 4,
		LEFT: 3,
	},
	{
		//per-08
		UP: 7,
		RIGHT: 2,
		DOWN: 4,
		LEFT: 3,
	},
	{
		//per-09
		UP: 4,
		RIGHT: 0,
		DOWN: 5,
		LEFT: 0,
	},
	{
		//per-10
		UP: 4,
		RIGHT: 0,
		DOWN: 5,
		LEFT: 0,
	},
	{
		//per-11
		UP: 4,
		RIGHT: 0,
		DOWN: 5,
		LEFT: 0,
	},
	{
		//per-12
		UP: 6,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-13
		UP: 5,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-14
		UP: 5,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-15
		UP: 5,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-16
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 3,
	},
	{
		//per-17
		UP: 6,
		RIGHT: 3,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//per-18
		UP: 6,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		//per-19
		UP: 0,
		RIGHT: 0,
		DOWN: 7,
		LEFT: 0,
	},
	{
		//per-20
		UP: 0,
		RIGHT: 3,
		DOWN: 6,
		LEFT: 0,
	},
	{
		//per-21
		UP: 0,
		RIGHT: 0,
		DOWN: 6,
		LEFT: 2,
	},
	{
		//per-22
		UP: 7,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 3,
	},
	{
		//per-23
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 3,
	},
	{
		//per-24
		UP: 6,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 7,
	},
	{
		//per-25
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 3,
	},
	{
		//per-26
		UP: 0,
		RIGHT: 3,
		DOWN: 0,
		LEFT: 2,
	},
	{
		//per-27
		UP: 7,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 6,
	},
];
