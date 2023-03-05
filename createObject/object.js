const player = {}
player.name = 'salauddin';
player.age = 23;
player.bat = function () {
    console.log(this.name, 'swing your bat');
}
console.log(player)
player.bat();

//object constructor---------(here its create prototipical chain ....it is find vale up to up when its not found any data then its return undefind)
const mohammed = Object.create(player);
console.log(mohammed.age);
console.log(mohammed.personality);

//Create class using Class----------->
class Person {
    name = 'salauddin';
    description = 'he is a student';
    constructor(age) {
        this.age = age
    }
}
const person1 = new Person(20);
console.log(person1)

//Object create---------------------------->
const human = {
    name: 'salauddin',
    age: 23,
    study: 'Math',
    salary: 6000,
    subject: ['bangla', 'english', 'math'],
    exam: function () {
        return this.name + ' ' + 'Perticipating in an exam';
    },
    improveExam: function (subject) {
        // this.exam();
        return `${this.name} is taken improvement exam on ${subject}`

    },
    treatDay: function (budget) {
        return this.salary - budget
    }
}
console.log(human.exam())
console.log(human.improveExam('Research and inovation lab'))
console.log('Now my amount is :', human.treatDay(3000));

//show output object value------------->
const trade = {
    todayProfit: 4,
    place: 'binance',
    item: 'cryptocurrency'
}

console.log(Object.keys(trade))
console.log(Object.values(trade))
console.log(Object.entries(trade))
console.log(trade)
Object.seal(trade) //Its use when we protect no workig delete...but we can modify this object---->
Object.freeze(trade) // its use when we no change any value of object---
delete trade.todayProfit;
trade.item = 'onion'
console.log(trade)

const towDimonsionalArray = [
    ['todayProfit', 4],
    ['place', 'binance'],
    ['item', 'cryptocurrency']
]


//Loop throw in an object------>
//First option-------->
const teacher = {
    name: 'Atel Ali',
    power: 'Lecturer',
    salary: 40000
}
const convertValeuOfArray = Object.values(teacher);
for (const value of convertValeuOfArray) {
    console.log(value)
}

const keys = Object.keys(teacher);
for (const key of keys) {
    console.log(key, teacher[key])
}

//object loop using for in------------->
console.log('Use for in of object loop---')
for (const value in teacher) {
    console.log(value, teacher[value])
}


//advance loop for object---------->
console.log('Advance System for loop of object---')
for (const [key, value] of Object.entries(teacher)) {
    console.log(key, value);
}

//Compare objects, referential integrity
//it is not use because when position is chage it is not work--->
const number1 = { a: 2, b: 2, c: 3 }
const number2 = { a: 2, b: 2, c: 3 }
const convertNumber1 = JSON.stringify(number1);
const convertNumber2 = JSON.stringify(number2);
if (convertNumber1 === convertNumber2) {
    console.log("Same")
} else {
    console.log("Not Same Bro")
}

//second option--->
const number3 = { a: 2, b: 2, d: 3 }
const number4 = { a: 2, b: 2, c: 3 }
function compareObject(first, second) {
    const firstObject = Object.keys(first)
    const secondObject = Object.keys(second)
    if(firstObject.length === secondObject.length){
        for(const key of firstObject){
            if(first[key] !== second[key]){
                return false;
            }
        }
    }
    return true;
}

console.log(compareObject(number3,number4))

//Borrow method from object and use it on another object
// (use call and apply and bind for this issue)

//Understand this keyword in JavaScript