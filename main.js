// class Student {
//     constructor( name, surname, age, courses, cours ){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.courses = courses;
//         this.cours = cours
//     }
// }

// class User extends Student{
//     constructor(name , surname , age, courses, cours) {
//         super(name,surname,age, courses, cours) 
//     }
//     getFullName() {
//         console.log(`FullName : ${this.name} ${this.surname} Age: ${this.age} `);    
//     }

//     getCourse() {
//         return Math.random() * course

//     }
// }

// const FullName = new User("Rahmatisho" , "Abdulazizov" , "16" , course = [1,2,3,4,5])
// FullName.getFullName()
// FullName.console.log(getCourse());

// class User {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
// }

// const today = new Date();
// today.setFullYear(today.getFullYear() + 8);

// class Student extends User {
//     constructor(name, surname, year){
//         super(name, surname)
//         this.year = year;
//     }

//     getFullName() {
//     return` IF: ${this.name + ' ' + this.surname};`
//   };

//     getCourse() {
//         return `Rate: ${today.getFullYear() - this.year};`
//     }
// }

// const student = new Student('Aydemir', 'Rakhatbekov', 2027)
// console.log(student.getFullName());
// console.log(Entry `year: ${student.year}`);
// console.log(Current `year: ${today.getFullYear()}`);
// console.log(student.getCourse());


class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

const today = new Date();
today.setFullYear(today.getFullYear() + 8);

class Student extends User {
    constructor(name, surname, year){
        super(name, surname)
        this.year = +year;
    }

    getFullName() {
		return `И.Ф.: ${this.name + ' ' + this.surname}`; 
	};

    getCourse() {
        return `Курс: ${today.getFullYear() - this.year}`;
    }
}

const student = new Student('Рахматшо', 'Абдулазизов', 2024)
console.log(student.getFullName());
console.log(`Год поступления: ${student.year}`);
console.log(`Текущий год: ${today.getFullYear()}`);
console.log(student.getCourse());