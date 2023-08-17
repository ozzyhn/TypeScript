//


let personProto = {
    calculateAge: function() {
        return 2021 - this.yearofbirth;
    }
}
let kaan = object.create(personProto);

kaan.name = "kaan";
kaan.yearofbirth = 1990;
kaan.job = "student";


let aylin = object.create(personProto, {
    name: { value: "Aylin" },
    yearofbirth: { value: 1980 },
    job: { value: "student" }
})

console.log(kaan.calculateAge());

console.log(aylin.calculateAge());