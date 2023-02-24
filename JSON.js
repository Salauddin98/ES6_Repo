//JavaScript any value to convert JSON--------->
const information3 = { name: 'mena', age: 20, address: 'dhaka' };
const convertJson = JSON.stringify(information3);
console.log(convertJson);

//Agian convert object or others--->
const convertPrevious = JSON.parse(convertJson);
console.log(convertPrevious)
