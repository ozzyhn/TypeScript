let Person = function(name, yearofbirth, job) {
    this.name = name;
    this.yearofbirth = yearofbirth;
    this.job = job;

}

Person.prototype.calculateAge = function() {
    return 2022 - this.yearofbirth;
}

let teacher = function(subject) {
    Person.call(this, name, yearofbirth, job); // BU METOD KALITIM ALIYOR
    this.subject = subject;
}

//KALITIM YAPTIK PERSON PROTOTYPENINDAN

teacher.prototype = object.create(Person.prototype);

// SET TEACHER CONSTRUCTOR
teacher.prototype.constructor = teacher;

let aylin = new teacher("aylin", 1980, "teacher", "mat");
console.log(aylin.calculateage());