// const loadUrl = () => {
//     fetch('https://restcountries.com/v3.1/all')
//         .then(res => res.json())
//         .then(data => showResult(data))
// }
// const showResult = (data) => {
//     const cardContainer = document.getElementById('cardContainer');
//     data.forEach(element => {
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div class="card text-center p-3">
//         <div class="text-center">
//         <img class="img-fluid" style="width:300px; height:200px" src="${element.flags.png}" class="card-img-top" alt="...">
//         </div>
//           <div class="card-body">
//             <h4 class="card-title">Name: ${element.name.common}</h4>
//             <h5 class="card-text">Official Name: ${element.name.official}</h5>
//             <h5 class="card-text">Capital City: ${element.capital}</h5>
//           </div>
//         </div>
//         `
//         cardContainer.appendChild(div)
//     });
// }

// loadUrl()







const countryName = (region) => {
  const url = `https://restcountries.com/v3.1/region/${region}`
  fetch(url)
    .then(res => res.json())
    .then(item => {
      // console.log(item);
      searchCountry(item)
    })
}

const searchCountry = (item) => {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerText = '';
  item.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
      <div class="card text-center p-3">
      <div class="text-center">
      <img class="img-fluid" style="width:300px; height:200px" src="${element.flags.svg}" class="card-img-top" alt="...">
      </div>
        <div class="card-body">
          <h4 class="card-title">Name: ${element.name.common}</h4>
          <h5 class="card-text">Official Name: ${element.name.official}</h5>
          <h5 class="card-text">Capital City: ${element.capital ? element.capital[0] : 'No Capital'}</h5>
          <button onclick="detailsBtn(${element.ccn3})" class="btn btn-primary">Show Details</button>
        </div>
      </div>
      `
    cardContainer.appendChild(div)
  });
}


const detailsBtn = code => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then(res => res.json())
    .then(data => showModalResult(data[0]))
}
const showModalResult = (items) => {
  // console.log(items)
  document.getElementById('mealDetailsLabel').innerText = items.name.common;
  const foodBody = document.getElementById('foodBody');
  foodBody.innerHTML = `
 <img class="img-fluid" src="${items.flags.svg}">
 <h1>${items.capital}</h1>
 `
}
countryName('asia')







