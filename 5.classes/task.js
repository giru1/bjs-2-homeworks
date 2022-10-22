class PrintEditionItem {
	constructor(...arg) {
		[this.name, this.releaseDate, this.pagesCount] = arg;
		this.state = 100;
		this.type = null;
	}
	
	get state() {
		return this._state;
	}
	
	set state(value) {
		this._state = (value < 0) ? 0 : (value > 100) ? 100 : value;
		return this._state
	}
	
	fix() {
		return this.state * 1.5;
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor(author, ...arg) {
		super(...arg);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, ...arg) {
		super(...arg);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(...arg) {
		super(...arg);
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(...arg) {
		super(...arg);
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor(...arg) {
		super(...arg);
		this.type = "detective"
	}
}

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Задача №2. Библиотека


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}
	
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	
	findBookBy(type, value) {
		let book = this.books.find(el => el[type] === value);
		return book === undefined ? null : book;
	}
	
	giveBookByName(bookName) {
		let book = this.books.splice(this.books.findIndex(el => el.name === bookName),1);
		return book[0] === undefined ? null : book[0]
	}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924)); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


// Задача №3. Журнал успеваемости

class Student {
	constructor(...arg) {
		this.type = "detective"
	}
}

// const student = new Student("Олег Никифоров");
// student.addMark(5, "algebra");
// student.addMark(5, "algebra");
// student.addMark(5, "geometry");
// student.addMark(4, "geometry");
// student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
// student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
// student.getAverageBySubject("biology"); // Несуществующий предмет
// student.getAverage(); // Средний балл по всем предметам 4.75
// student.exclude("Исключен за попытку подделать оценки");
