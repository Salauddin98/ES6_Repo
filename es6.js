//Default parameter------->
function defaultParameter(num1, num2 = 0) {
    const result = num1 + num2;
    return result;
}
console.log(defaultParameter(10));

//arrow function--------> with parameter
const arrowFunction = (num1,num2) => num1 + num2 ;
console.log(arrowFunction(10,20));

//arrow function--------> without parameter
const arrowFunctionWithoutParameter = () => 3.14;
console.log(arrowFunctionWithoutParameter());

//arrow function--------> with one parameter
const oneParameter = num => num * 5;
console.log(oneParameter(10));

// (Interview question difference between function declaration ,,, function exprasion and arrow function)---------------------------

//3 dots---->spread operator
const maxNumber = [10,44,55,2,90,1000];
console.log(...maxNumber);
const largestNumber = Math.max(...maxNumber);
console.log(largestNumber);


//object---------->(use the same name for destructuring)
const {name,age,address} = {name:'salauddin',age:23,address:'Tongi'};
console.log(name);

//array destructuring----(not mendatory use same name)
const[first,second] = [10,20];
console.log(first,second);


//some show
const[a,b,...c] = [10,20,30,40,50,60];
console.log(a,b,c);
// here first and second element cover first two paramerter but last parameter cover all the last element except first 2 number

//Map function------------>

const fiveTimes = [2,4,6,8].map(x => x * 2);
console.log(fiveTimes);

//Map function more user-------->(No change main array just return result also same logic forEach)
const findFirstLetter = ['salauddin','alauddin','jamaluddin','karimuddingd'].map(name => name[0]) ;
const findFirstLetterLength = ['salauddin','alauddin','jamaluddin','karimuddingd'].map(name => name.length) ;

console.log(findFirstLetterLength);

//forEach---------->no return value but Map return value
const findFirstForEach = ['salauddin','alauddin','jamaluddin','karimuddingd']
findFirstForEach.forEach(name => console.log(name)) ;

//filter function practice----->
const numberValue = [20,21,33,5,8];
console.log(numberValue.filter(find => find % 2===0));

//find function practice----->(its return first successful condition result)
const numberValueFind = [20,21,33,5,8];
console.log(numberValue.filter(find => find % 2 ===0 ));












