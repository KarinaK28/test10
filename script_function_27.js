// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
	
}

// Место для третьей задачи
function getMathResult(num, oft) {
	if (typeof(oft) !== "number" || oft  <= 0) {
		return num;
	}
	let str = '';
	for (let i = 1; i <= oft ; i++) {
		if (i === oft) {
			str += `${num * i}`;
		} else {
		str += `${num * i}---`;
	}
	}
return str;
}
console.log(getMathResult(2, 5));