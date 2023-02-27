//First Step---->Load Data--->
const loadUrl = async (phone, limit) => {
    const url = ` https://openapi.programming-hero.com/api/phones?search=${phone}`
    const res = await fetch(url);
    const data = await res.json();
    showData(data.data, limit)
}

const showData = (phones, limit) => {
    const cardContainer = document.getElementById('phoneContainer');
    cardContainer.innerText = '';
    const shwoAll = document.getElementById('showAll');

    if (limit && phones.length > 10) {
        phones = phones.slice(0, 10);
        shwoAll.classList.remove('d-none');
    } else {
        shwoAll.classList.add('d-none');
    }


    //Error Handleing for Phone------>
    const noPhone = document.getElementById('noFound');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')

    } else {
        noPhone.classList.add('d-none')
    }

    phones.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-4">
        <img style="width:200px; height:200px" class="img-fluid" src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${element.brand}</h4>
            <h5 class="card-title">${element.phone_name}</h5>
            <p class="card-text">${element.slug}</p>
            <button onclick="phoneDetails('${element.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
        </div>
        `
        cardContainer.appendChild(div)
    });
    loaderBtn(false)
}


document.getElementById('searchBtn').addEventListener('click', function () {
    processSearch(10)
})

document.getElementById('phoneSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
    }

})

//For Loader Button----------->
const loaderBtn = load => {
    const loderShow = document.getElementById('loderShow');
    if (load) {
        loderShow.classList.remove('d-none');
    } else {
        loderShow.classList.add('d-none');
    }
}

document.getElementById('showAllBtn').addEventListener('click', function () {
    processSearch()
})

const processSearch = (limit) => {
    loaderBtn(true);
    const dataInputField = document.getElementById('phoneSearch').value;
    loadUrl(dataInputField, limit)
}




//For details phone------------>
const phoneDetails = async (details) => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
    const res = await fetch(url);
    const data = await res.json();
    showDetails(data.data)
}

const showDetails = phone => {
    // console.log(phone)
    document.getElementById('phoneDetailsModalLabel').innerText = phone.name;
    document.getElementById('phoneDetails').innerHTML = `
    <img src="${phone.image}">
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : "No Release Date Here"}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : "No storage Found"}</p>
    <p>Others: ${phone.others ? phone.others.Bluetooth : "No Bluetooth Found"}</p>
    `
}
loadUrl('phone')