const NA = 74; // número de azulejos
const fileName = 'tile ';
const fileExtension = '.png';

const reglas = [
	// reglas de los borded de cada azulejo
	{
		// tile 0
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 2
		UP: 1,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 3
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 4
		UP: 1,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 5
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 6
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 9
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 10
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 11
		UP: 2,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 12
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 13
		UP: 2,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 14
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 3,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 16
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 18
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
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
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 21
		UP: 2,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 22
		UP: 2,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 2,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 1,
	},
	{
		// tile 24
		UP: 3,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 25
		UP: 3,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 26
		UP: 3,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 27
		UP: 3,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 28
		UP: 3,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 29
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 30
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 2,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 32
		UP: 2,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 33
		UP: 2,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 34
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 35
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 36
		UP: 2,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 37
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 38
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 39
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 40
		UP: 2,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 41
		UP: 3,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 42
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 43
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 44
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 45
		UP: 2,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 46
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 47
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 48
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 49
		UP: 3,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 50
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 51
		UP: 0,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 52
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 53
		UP: 0,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 54
		UP: 0,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
	{
		// tile 55
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 56
		UP: 2,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 57
		UP: 1,
		RIGHT: 0,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 58
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 59
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 60
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 61
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 62
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 63
		UP: 3,
		RIGHT: 1,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 64
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 65
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 66
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 67
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 68
		UP: 1,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 0,
	},
	{
		// tile 69
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 70
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 71
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 72
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 73
		UP: 0,
		RIGHT: 1,
		DOWN: 2,
		LEFT: 1,
	},
];
