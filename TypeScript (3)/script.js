// let kaan = {
//     name: "kaan",
//     year: 2009,
//     job: "student",

// }
// val = kaan;
// console.log(val);

function Student(name, year, job) {
    this.name = name;
    this.job = job;
    this.year = year;
    console.log(this);
}

let kaan = new Student("oguz", "student", 22);

let lütfiye = new Student("lutfik", 52, "homewoman");
console.log(kaan.name);
console.log(kaan.job);




console.log(lütfiye.name);
console.log(lütfiye.job);