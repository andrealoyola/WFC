const NA = 21; // número de azulejos
const fileName = 'coso';
const fileExtension = '.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		// coso0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso1
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso2
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// coso3
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// coso4
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// coso5
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// coso6
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso7
		UP: 1,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// coso8
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// coso9
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// coso10
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// coso11
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// coso12
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso13
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso14
		UP: 1,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// coso15
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso16
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso17
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// coso18
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		//coso19
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// coso20
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
];
