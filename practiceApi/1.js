
const findData = () => {
    fetch('1.json')
        .then(res => res.json())
        .then(data => showOutput(data.result))
}

const showOutput = (result) => {
    const cardContainer = document.getElementById('cardContainer');
    for (const value of result) {
        // console.log(value)
        // console.log(value.name.common)      
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="border border-primary p-4">
        <div class="card-body">
        <h4 class="card-title">Name: ${value.name.common}</h4>
        <h5 class="card-subtitle mb-2">Age: ${value.age}</h5>
        <p class="card-text font-bold">Street: ${value.address.street}, House no: ${value.address.house} </p>   
    </div>
        </div>
       
        `
        cardContainer.appendChild(div)
    }
}
findData()
























