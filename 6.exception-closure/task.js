function parseCount(val) {
	let res = Number.parseInt(val)
	if (isNaN(res)) {
		throw new Error ('Невалидное значение');
	} else {
		return res;
	}
}

function validateCount(val) {
	try {
		return parseCount(val)
	} catch (err) {
		return err;
	}
}

// console.log(parseCount("123"))
// console.log(parseCount("012"))
// console.log(parseCount("ыфва"))
//
//
// console.log(validateCount("56"))
// console.log(validateCount("ыфва"))
// console.log(validateCount("ыфва"))

class Triangle {
	constructor (a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
		if ((b+c)<a || (a+c)<b || (a+b)<c) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	};

	getPerimeter() {
		return this.a + this.b + this.c
	}
	
	getArea() {
		let p = this.getPerimeter() / 2;
		return Number(Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3))
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch (e) {
		return new class Simple {
			getPerimeter = () => "Ошибка! Треугольник не существует"
			getArea = () => "Ошибка! Треугольник не существует"
		}
	}
}

const triangle1 = new Triangle(2,5,5);
const triangle2 = new Triangle(6,10,15);
const triangle3 = new Triangle(1,3,3);

console.log(triangle1.getPerimeter())
console.log(triangle1.getArea())