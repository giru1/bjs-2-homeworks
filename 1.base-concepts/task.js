"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	
	if (d === 0) {
	 	arr.push(-b/(2*a))
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d) )/(2*a));
		arr.push((-b - Math.sqrt(d) )/(2*a));
	}
	return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	
	if(Number.isNaN(+percent) || typeof percent === 'string') {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
	}else if(Number.isNaN(+contribution) || typeof contribution === 'string'){
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
	}else if (Number.isNaN(+amount) || typeof amount === 'string'){
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
	}
	
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();
	let differenceYear = date.getFullYear() - currentYear;
	let differenceMonth = differenceYear * 12 - currentMonth + date.getMonth();
	
	let totalAmount;
	let S = amount - contribution;
	let P = percent / 12 / 100;
	
	let payments = S * (P + (P / (((1 + P) ** differenceMonth) - 1)));
	
	totalAmount = payments * differenceMonth;
	
	return +totalAmount.toFixed(2);
	
}
