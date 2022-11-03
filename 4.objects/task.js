function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
        this.marks = [mark]
    } else {
		this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = mark
    } else {
		// this.marks = [].concat(this.marks, ...mark);
		this.marks.push(...mark)
    }
}

Student.prototype.getAverage = function () {
	if (this.marks.length === 0) {
		return 0
	} else {
		return this.marks.reduce((sprev, mark) => sprev + mark, 0)/this.marks.length
	}
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason
  
}

let student1 = new Student("Vadim", 'man', 31)
let student2 = new Student("Stepan", 'man', 45)
let student3 = new Student("Alexei", 'women', 25)

student1.addMark(5)
student1.addMarks([1,1,1,1,1])
student1.getAverage()
console.log(student1)
console.log(student1.getAverage())
console.log(student1.exclude('low grades'))
console.log(student1)