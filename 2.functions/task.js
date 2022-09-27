// Задание 1
function getArrayParams(arr) {
	let min, max, sum, avg;

	min = Math.min(...arr);
	max = Math.max.apply(null, arr);
	sum = arr.reduce((arr, element) => arr + element, 0);

	avg = +(sum / arr.length).toFixed(2);
	return {min: min, max: max, avg: avg};
}


// Задание 2
function worker(arr) {
	let sum;
	
	sum = arr.reduce((res, item) => res + item);
	
	return sum;
}

function makeWork(arrOfArr, func) {
	let max;
	
	let res = arrOfArr.map(item => func(item))
	max = Math.max.apply(null,res);
	
	return max;
}

// // Задание 3
function worker2(arr) {
	let result
	result =  Math.abs(Math.max.apply(null, arr) - Math.min(...arr))
	return result
}

