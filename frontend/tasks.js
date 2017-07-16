function name() { return 'f'+(~~(Math.random()*1000000)).toString(16) }

var tasks = [
	{
		text: `Каким образом можно скопировать объект? Реализуйте функцию копирования. Приведите минимум 2 варианта ответов (больше - лучше).`
	},
	{
		text: `Каким образом можно безопасно получить свойства из объекта? Предложите варианты, реализуйте функцию.`
	},
	{
		text: `Реализуйте функцию проверки на синтаксическую верность открывающихся и закрывающихся скобок. Реализовать функцию нужно для скобок: `,
		input: [
			'"()"',
			'"<>[]{}"',
			'"()[]{}<>"'
		],
		variants: [
			'Покажите самую короткую реализацию',
			'Покажите вариант с выводом сообщений об ошибках, с указанием номера строки и позиции каретки'
		],
		code: (()=>{
			return `${name()}('( [ < ( [ ok ] )> ])') == 0; // ok`
		})()
	},
	{
		text: `Реализуйте функцию, на вход которой подается строка параметров от URL запроса, а на выходе получается хеш объект для строки вида: `,
		input: [
			'"?a=1&b=2&foo=ab&bar=cd&buz=abcd1234"',
			'"?foo=a&a[]=1&bar=b&a=2"',
			'"?foo=a&a[foo]=1&a[bar]=b&a[buz]=2"'
		],
		variant: 'Предложите самый короткий вариант реализации. Предложите реализацию, которая будет работать в IE11. Предложите несколько вариантов решения задачи с пояснениями.',
		code: (()=>{
			return `var ${name()} = ${name()}('?query=string') // = { query: 'string' } `
		})()
	},
	{
		text: 'Реализуйте метод map для массива. При этом нельзя использовать циклы в любом их варианте (for, while, forEach, etc) и готовые решения и библиотеки.'
	},
	{
		text: 'Реализуйте функцию reduce для массива. Предложите наиболее компактный вариант.'
	},
	{
		text: 'Напишите функцию, которая считает сумму для натуральных чисел от 1 до N \n' +
		'Формат данных, передаваемых на вход - на ваше усмотрение. Предложите несколько вариантов решения.'
	},
	{
		text: 'Напишите функцию, котора перемножит натуральные числа от 1 до N. \n' +
		'После того как вы придумали простое решение, подумайте над решением в котором не будут использованы циклы и замыкания. Предложите несколько вариантов решения (минимум 4).'
	},
	{
		text: 'Проведите рефакторинг колбэк-функции sort(...), сократите код до минимума: ',
		code: (()=>{
			return `
Array.from(Array(100))
	.map(i=>~~(Math.random()*10000))
	.sort(
		// Refactor here:
		function ${name()}(a, b){
			if (a - b === 0) { return 0; }
			else if (a - b < 0) { return -1; }
			else if (a - b > 0) { return 1; } }
	)`
		})()
	},
	{
		text: 'Напишите функцию sum, которая пройдет следующие тесты: ',
		code: (()=>{
			let n = name();
			return `
console.assert( 10 === ${n}(1, 2, 3, 4), '# 1');
console.assert( 10 === ${n}(1)(2, 3, 4), '# 2');
console.assert( 10 === ${n}(1, 2)(3, 4), '# 3'); 
console.assert( 10 === ${n}(1, 2, 3)(4), '# 4'); 
console.assert( 10 === ${n}(1)(2)(3)(4), '# 5'); 
		`})()
	},
	{
		text: `Создайте объект, который будет работать следующим образом:
magicJSON = 'foo=123'; 
magicJSON = 'bar=[1,2,3]'; 
magicJSON = 'buz="abc"'; 
magicJSON = 'o={a:1,b:2}'; 
		`,
		input: [
			`
console.log( 'string' == typeof magicJSON ); // true
console.log( magicJSON ); // '{"foo":123,"bar":[1,2,3],"buz":"abc","o":{"a":1,"b":2}}'
			`,
			`
console.log( 'object' == typeof magicJSON ); // true
console.log( magicJSON ); // {"foo":123,"bar":[1,2,3],"buz":"abc","o":{"a":1,"b":2}}
			`
		]
	},
	{
		text: `Создайте объект, который будет работать следующим образом:
magicJSON = { foo: 123 };
magicJSON = { bar: [1,2,3] };
magicJSON = { buz: "abc" };
magicJSON = { obj: {a:1,b:2} };
		`,
		input: [
			`
console.log('string' == typeof magicJSON);
console.log(magicJSON); // '{"foo":123,"bar":[1,2,3],"buz":"abc","obj":{"a":1,"b":2}}'
			`
		]
	},
	{
		text: `Проведите рефакторинг кода, сократите его до минимума:`,
		code: (()=> `
function ${name()}{
	if (vote >= 0 && vote <= 20) { return '★☆☆☆☆'; }
	else if (vote > 20 && vote <= 40) { return '★★☆☆☆'; }
	else if (vote > 40 && vote <= 60) { return '★★★☆☆'; }
	else if (vote > 60 && vote <= 80) { return '★★★★☆'; }
	else if (vote > 80 && vote <= 100) { return '★★★★★'; }
}
		`)()
	},
	{
		text: `Проведите рефакторинг кода, сократите его до минимума: `,
		code: `
function ${name()}(s, a, b) {
	if (s.match(/^$/)) { return -1; }
	var i = s.length -1;
	var aIndex = -1;
	var bIndex = -1;
	while ((aIndex == -1) && (bIndex == -1) && (i > 0))
	{
		if (s.substring(i, i +1) == a)
		{
			aIndex = i;
		}
		if (s.substring(i, i +1) == b)
		{
			bIndex = i;
		}
		i = i - 1;
	}
	if (aIndex != -1)
	{
		if (bIndex == -1)
		{
			return aIndex;
		}
		else
		{
			return Math.max(aIndex, bIndex);
		}
	}
	if (bIndex != -1)
	{
		return bIndex;
	}
	else
	{
		return -1;
	}
}
		`
	}
];