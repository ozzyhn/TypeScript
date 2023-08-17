/// KALITIM


let Person = function(name, yearofbirth, job) {

    this.name = name;
    this.yearofbirth = yearofbirth;
    this.job = job;

}

let aylin = new Person("aylin", 1980, "teacher");
let kaan = new Person("kaan", 2008, "student");


Person.prototype.calculateage = function() { // PROTOTYPE KALITIM OLAN KISIM OLUYOR
    return 2022 - this.yearofbirth;

}

person.prototype.getName = function() {
    return this.name;
}

console.log(aylin.calculateage()); // Çağırma kısmı böyle oluyor ve hesaplama yapıyor
console.log(aylin.getName());
console.log(aylin);