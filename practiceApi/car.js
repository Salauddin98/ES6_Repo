const loadData = () => {
    fetch('car.json')
        .then(res => res.json())
        .then(data => showOutput(data))
}
 
const showOutput = (data) => {
    const cardContainer = document.getElementById('cardContainer');
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
          <img src="${element.imageURL}" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">Car Name: ${element.name}</h4>
            <p class="card-text">Car Details: ${element.description}</p>
            <button class="btn btn-primary">Car Price: ${element.price}</button>
          </div>
        </div>
        `
        cardContainer.appendChild(div)
    });
}
loadData()