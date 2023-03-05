const loadData = (searchId, limit) => {
    document.getElementById("male").classList.add("d-none");
    document.getElementById("female").classList.add("d-none");
    document.getElementById('showDetailsContainer').innerHTML = '';
    url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchId}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showData(data.player, limit)
        })
}

//For Show Data----------->
const showData = (data, limit) => {
    // document.getElementById('playerSearchBtn').value = '';
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    //For validadtion----->
    const noPhone = document.getElementById('noFound');
    if (data === null) {
        noPhone.classList.remove('d-none')

    } else {
        noPhone.classList.add('d-none')
    }

    //For sliceing----------->
    const showAll = document.getElementById('showAll');
    // console.log(data.length)
    const length = data.length
    if (limit && length > 4) {
        data = data.slice(0, 4);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none');
    }

    data.forEach(element => {
        // console.log(element)
        const div = document.createElement('div');
        div.classList.add('col');
        const { strThumb, strPlayer, strNationality, idPlayer } = element;
        div.innerHTML = `
        <div class="card h-full">
            <img src="${strThumb ? strThumb : "https://picsum.photos/500/300?random=3"
            } "class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${strPlayer}</h5>
         <p class="card-text">Nationality: ${strNationality}</p>
       </div>
       <div class="my-3 mx-3">
      <button onclick="showModal('${idPlayer}')" type="button" class="btn btn-danger">Details</button>
     <button type="button" class="btn btn-primary">Delete</button>
     </div>
     </div>
        `
        cardContainer.appendChild(div);
    });
    // loderBtn(false)
    document.getElementById("load").classList.add("d-none");
}

//For player Search -------->
document.getElementById('searchBtn').addEventListener('click', function () {
    processSearch(4)
})

//For search click enter------>
document.getElementById('playerSearchBtn').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(4)
    }

})

//For loder ------->
// const loderBtn = (isLoding) => {
//     const isLoder = document.getElementById('load');
//     if (isLoding) {
//         isLoder.classList.remove('d-none')
//     } else {
//         isLoder.classList.add('d-none')
//     }
// }

//For showAllData----------->
document.getElementById('showAllBtn').addEventListener('click', function () {
    processSearch();
})

const processSearch = (limit) => {
    document.getElementById("load").classList.remove("d-none");
    // loderBtn(true)
    const inputFieldValue = document.getElementById('playerSearchBtn');
    const storeValue = inputFieldValue.value;
    // console.log(inputFieldValue)
    loadData(storeValue, limit)
    inputFieldValue.value = '';
}


//For show Modal---------->
const showModal = id => {
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`
    fetch(URL)
        .then(res => res.json())
        .then(details => showModalDetails(details.players[0]))
}

const showModalDetails = (details) => {
    console.log(details)
    const showDetailsContainer = document.getElementById('showDetailsContainer');
    const div = document.createElement('div');
    const { strThumb, strPlayer, strDescriptionEN, strGender } = details;
    if (strGender === "Male") {
        document.getElementById("male").classList.remove("d-none");
    } else {
        document.getElementById("female").classList.remove("d-none");
    }
    div.innerHTML = `
    <div class="card mb-3 mt-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name: ${strPlayer}</h5>
        <p class="card-text">Description: ${strDescriptionEN.slice(0, 100) + '...'}</p>
        <p class="card-text">Gender: ${strGender}</p>
      </div>
    </div>
  </div>
</div>
    `
    showDetailsContainer.appendChild(div)
}



loadData('messi');