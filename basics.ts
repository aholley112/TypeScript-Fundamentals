//Primatives: number, string, boolean. The core

//More complex types: arrays, objects
//Function types, parameters
//Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

//Type Inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & Types

function add(a: number, b: number): number | string {
    return a + b;
}

function print(value: any){
console.log(value);
}

//Understanding Generics

function insertAtBeginning<T>(array: T[], value: T) {
const newArray = [value, ...array];
return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ){}

    enrol(courseName: string) {
        this.courses.push(courseName); // this is how you add a method to the class.
    }

    listCourses() {
        return this.courses.slice();
    }
}
// Define a new student by instantiating the student calss and then pass in the values into the paramaters. 

// const student = new Student('Max', 'Schwarz', 32, ['Angular']);
// student.enrol('React');
// student.listCourses();

//student.courses => Angular, React
// student. //Calling the method is what this is.


const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
//student.listcourses(); => Angular, React

//student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

//Add new class here

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}

//Configuring TypeScript Comiler
