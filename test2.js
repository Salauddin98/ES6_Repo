//convert oddArray form evenArray---------->
const oddArray = [1, 3, 5, 7, 9];
const convertEvenArray = oddArray.map(value => value + 1);
console.log(convertEvenArray);

//apply array.filter method for find numbers which is divisible by 10----->
const findNumber = [33, 50, 79, 78, 90, 101, 30];
const findDivisibleNumber = findNumber.filter(value => value % 10 === 0);
console.log(findDivisibleNumber);

//apply array.find method for find numbers which is divisible by 10----->
const findNumbers = [33, 50, 79, 78, 90, 101, 30];
const findDivisibleNumbers = findNumber.find(value => value % 10 === 0);
console.log(findDivisibleNumbers);

//sum of the age--------->
const people = [
  { name: 'mena', age: 20 },
  { name: 'rina', age: 30 },
  { name: 'tina', age: 40 },
]
// console.log(people[1].age);
let sum = 0;
for (value of people) {
  sum = sum + value.age
}
console.log(sum);

//find object output----------->
let data = {
  location: [{ country: 'dhaka', city: 'Bangladesh' }]
}
console.log(data.location[0].city);

//find object 2-------->
const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
console.log(user.email);
console.log(user.address.street);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);


//ternary operator----->
let paragraph = ''
let isStudent = false;
paragraph = (isStudent === true) ? 'He is a student' : 'He is not a student';
console.log(paragraph);

//change object---->using destructuring
const details = { name: 'mena', age: 20, address: 'dhaka' }
const { address: house, name, age } = details;
console.log(house);

//object sharing process------------>
const information1 = { name: 'mena', age: 20, address: 'dhaka' }
const information2 = { ...information1 };
information1.city = 'Bangladesh';
console.log(information1, information2);
console.log(information1['age']);

//optional chaining------------>(when we think we face error)
const information3 = { name: 'mena', age: 20, address: 'dhaka' };
console.log(information3?.class?.read);
console.log('No break cz i apply optional chaining');

//More forEach and map use------------->
const arrayElement = [10, 20, 30.40, 50];
arrayElement.map((value, index, array) => {
  console.log(value + ' ' + index + ' ' + array);
})

//array related problem----->
const person = [
  { id: 'ID01', name: 'abul', age: 20 },
  { id: 'ID02', name: 'babul', age: 22 },
  { id: 'ID01', name: 'cabul', age: 23 },
]

const info = {};
const findResult = person.map(value => {
  const id = value.id;
  const name = value.name;
  info[id] = name;
})
console.log(info);
console.log(info.ID02);

//Use Reduce function ---------->
const arrayReduce = [1, 2, 3, 4, 5];
const reduceResult = arrayReduce.reduce((previous, current) => {
  return previous * current;
}, 1)

console.log(reduceResult);


//class practice----------------->
class Students {
  name;
  department;

  constructor(name, department) {
    this.name = name;
    this.department = department
  }
  getOutput(){
    console.log(`My name is ${this.name}. My department is ${this.department}`);
  }
}
const student1 = new Students('salauddin','CSE');
student1.getOutput();


//inheritence practice---------->
class Person{
  name;
  age;
  constructor(name,age){
      this.name = name;
      this.age = age;
  }
  showName(){
      console.log(`My name Is ${this.name}`)
  }
}

class Student extends Person{
  subject;
  roll;
  constructor(name,age,subject,roll){
      super(name,age)
      this.subject = subject;
      this.roll = roll;
  }
  showDetails(){
      console.log(this.name,this.age,this.subject,this.roll)
  }
}

class Teacher extends Person{
  
  faculty;
  designation;
  constructor(name,age,faculty,designation){
      super(name,age)
      this.faculty = faculty;
      this.designation = designation;
  }
  showDetails(){
      console.log(this.name,this.age,this.faculty,this.designation)
  }
}

const st = new Student("mehedy",25,'CSE',23232)
const th = new Teacher('hasan',43,'EEE','LECTURER')

st.showDetails()

th.showDetails()
