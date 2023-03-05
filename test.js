//arrow spread operator--------->
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [1, 3, 4, 5, 6, 7];
const margeArray = [...arr1, ...arr2];
console.log(margeArray);

//using arrow function take 3 parameter and return result---->
const multiplyResult = (a, b, c) => a * b * c;
console.log(multiplyResult(10, 20, 30));

//using backtick for print some line--->
const backTick = `I am a web developer. 
I love to code
I love biryani
`
console.log(backTick);

//write a arrow function and return some value and using default parameter--->
const arrowDefault = (a, b = 10) => a + b;
console.log(arrowDefault(10));

//write an array function return even name ----------------->
const friendName = ['salauddin', 'alauddin', 'afseruddin', 'jamaluddin'];
const check = friendName => {
    const updateResult = [];
    for (const value of friendName) {
        if (value.length % 2 === 0) {
            updateResult.push(value);
        }
    }
    return updateResult

}
console.log(check(friendName));

//using filter function---------------->
const findEvenName = friendName.filter(value => value.length % 2 === 0)
console.log(findEvenName);


//using arrow function find square and average --------------->
const arrayElement = [2, 4, 6, 8, 10];
const findAverageResult = arrayElement => {
    const storeValue = [];
    let sum = 0;
    let average = 0;
    for (const value of arrayElement) {
        storeValue.push(Math.pow(value,2))
    }for(const result of storeValue){
        sum = sum + result;
        average = sum / storeValue.length;
    }
  
    return average;
}
// console.log(object);
console.log(findAverageResult(arrayElement));

//take 2 array input and return the maximum number result------>
const array1 = [2, 4, 6, 8, 10];
const array2 = [1, 3, 5, 7, 9];
const margeTowArray = [...array1, ...array2];

const maximumNumber = margeTowArray => Math.max(...margeTowArray);
console.log(maximumNumber(margeTowArray));

//callback function practice---------------->
function practice1(callback){
    console.log("Hi my name is salauddin");
    callback();
}

function practice2(){
    console.log("Hi i am a Mohammed")
}

practice1(practice2)










