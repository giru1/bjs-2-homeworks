// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;

	min = Math.min(...arr);
	max = Math.max(...arr);
	sum = arr.reduce((arr, element) => arr + element, 0);

	avg = +(sum / arr.length).toFixed(2);
	return {min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {	
	return arr.reduce((res, item) => res + item);
}

function makeWork(arrOfArr, func) {
	let res = arrOfArr.map(item => func(item))
	return Math.max(...res);
}

// // Задание 3
function worker2(arr) {
	return Math.abs(Math.max(...arr) - Math.min(...arr))
	
}

