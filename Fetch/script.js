// //1---> For index.html
// function forLoadData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => dataLoad(data));
// }

// function dataLoad(data) {
//     // console.log(data)
//     const ul = document.getElementById('ulContainer');
//     for (const value of data) {
//         // console.log(value.email);
//         const li = document.createElement('li');
//         li.innerText = value.email;
//         ul.appendChild(li);
//     }




// //2) ---For photos.html
// function forLoadData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => dataLoad(data));
// }

// function dataLoad(data) {
//     // console.log(data)
//     const forDiv = document.getElementById('divContainer');
//     for (const value of data) {
//         // console.log(value.email);
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//         <h2>${value.userId}</h2>
//         <h3>${value.title}</h3>
//         <p>${value.body}</p>
//         `;
//         forDiv.appendChild(div);
//     }
// }

// forLoadData();


 
//For kanye.rest-------->
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => findData(data));
}

const findData = data => {
    const divCreate = document.getElementById('divContainer');
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('commonClass')
        div.innerHTML = `
        <h1>Country Name: ${element.capital ? element.capital[0] : 'No capital'}</h1>
        <button onclick="forButton('${element.cca2}')">click me</button>
        `
        divCreate.appendChild(div)
        // console.log(element);
    });
}

const forButton = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url).then(res => res.json()).then(data => showResultDetails(data[0]));

}

const showResultDetails = (country => {
    const setElement = document.getElementById('showResult');
    setElement.innerHTML = `
    <h3>Country Name:${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
})

loadData();

//For country Project---------->


