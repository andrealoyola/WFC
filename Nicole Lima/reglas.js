const NA = 25; // número de azulejos
const fileName = '';
const fileExtension = '.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		//0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},

	{
		//1
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//2
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//3
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//4
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},

	{
		//5
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},

	{
		//6
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},

	{
		//7
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},

	{
		//8
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},

	{
		//9
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},

	{
		//10
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//11
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},

	{
		//12
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//13
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//14
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},

	{
		//15
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//16
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},

	{
		//17
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},

	{
		//18
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},

	{
		//19
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},

	{
		//20
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//21
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},

	{
		//22
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//23
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},

	{
		//24
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
];
