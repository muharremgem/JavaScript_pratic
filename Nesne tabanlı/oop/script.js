//* Constructor ve Nesne Oluşturma */

// let kaan = {
//     name: "kaan",
//     yearOfBirth : 2008,
//     job : "student",
// }

// val = kaan ;
// console.log(val);
// console.log(typeof val);

// function Student (name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;

//     this.calculateAge = function(){
//         return 2022 - this.yearOfBirth;
//     }
// }
//* let ile yaptıgımız zaman 
// let Student = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

//   this.calculateAge = function () {
//     return 2022 - this.yearOfBirth;
//   };
// };

// let muharrem = new Student("muharrem", 1990, "student");
// let furkan = new Student("furkan", 1994, "machine engineering");

// console.log(furkan.name);
// console.log(muharrem.yearOfBirth);
// console.log(muharrem.job);
// console.log(furkan.yearOfBirth);
// console.log(muharrem.name);

// console.log(muharrem.calculateAge());
// console.log(furkan.calculateAge());

//**  Prototype  */

// let Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;

// };

// let rümeysa = new Person("rümeysa", 2002,"Radyoterapi")
// let melih = new Person("melih", 2010,"Student")


// Person.prototype.calculateAge = function(){
//     return 2022 - this.yearOfBirth;    
// }

// Person.prototype.getName = function(){
//     return this.name;
// }

// console.log(rümeysa.calculateAge());
// console.log(rümeysa);
// console.log(rümeysa.getName());
// console.log(melih.getName())
// console.log(melih);
// console.log(melih.calculateAge())

//* Object.create

// let personProto = {
//     calculataAge : function(){
//         return 2022 - this.yearOfBirth;
//     }
// }

// let kaan = Object.create(personProto);

// kaan.name = "kaan";
// kaan.yearOfBirth = 2008;
// kaan.job = "student";


// let aylin = Object.create(personProto,{
//     name: {value: "aylin"},
//     yearOfBirth: {value:1980},
//     job: {value: "teacher"},
// });

// console.log(kaan);
// console.log(kaan.calculataAge());
// console.log(aylin)
// console.log(aylin.calculataAge());


//* Prototype Tabanlı Miras Alma 

let Person = function(name,yearOfBirth,job){
    this.name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    return 2022 - this.yearOfBirth;
}

let Teacher = function(name,yearOfBirth,job,subject){
    
    Person.call(this,)
    this.subject = subject;
    

}