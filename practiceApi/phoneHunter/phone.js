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
loadUrl('iphone')





 <div class="w-50 border border-danger-subtle p-3 bg-danger-subtle">
    <h4 class=" fs-5" id="detailsModalLabel">${data.description}</h4>
    <div class="d-flex gap-3 mt-3">
    <div class="border border-secondary-subtle rounded p-2 bg-light text-success">
    <ul style="list-style:none">
    <li class="text-center"><h6>${data.pricing[0].price ? data.pricing[0].price : 'No More'}</h6></li>
    <li><h5>${data.pricing[0].plan}</h5></li>
    </ul>
    </div>
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger">
    <ul style="list-style:none">
    <li ><h6>${data.pricing[1].price}</h6></li>
    <li><h5>${data.pricing[1].plan}</h5></li>
    </ul>
    </div>
    <div class="border border-secondary-subtle rounded p-2 bg-light text-danger-emphasis">
    <ul style="list-style:none">
    <li ><h6>${data.pricing[2].price}</h6></li>
    <li><h5>${data.pricing[2].plan}</h5></li>
    </ul>
    </div>
    </div>

    <div class="d-flex gap-5">
    <div class="mt-4">
    <h4>Features</h4>
    <ul>
    <li>${data.features[1].feature_name}</li>
    <li>${data.features[2].feature_name}</li>
    <li>${data.features[3].feature_name}</li>
    </ul>
    </div>
    <div class="mt-4">
    <h4>Integrations</h4>
    <ul>
    <li>${data.integrations[0] ? data.integrations[0] : 'No Data Found'}</li>
    <li>${data.integrations[1] ? data.integrations[1] : 'No Data Found' }</li>
    <li>${data.integrations[2] ? data.integrations[2] : 'No Data Found'}</li>
    </ul>
    </div>
    </div>
    </div>


    
    <div class="w-50 border border-danger-subtle p-3">
    <img class="img-fluid" src="${data.image_link[0]}">
    <div class="position-relative">
    <h6 style="position:absolute; top:-270px; left:350px;background-color:#fb5200; padding:8px 15px;color:white;border-radius:10px">${data.accuracy.score ? data.accuracy.score : 'No Accuracy'} accuracy</h6>
    </div>
    <h5 class="text-center  mt-2 fw-bold">${data.input_output_examples[0].input}</h5>
    <p class="text-center mt-2">${data.input_output_examples[1].output ? data.input_output_examples[1].output : 'No! Not Yet! Take a break!'}</p>
    </div>