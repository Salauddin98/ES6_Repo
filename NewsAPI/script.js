const navbarDataLoad = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => showNavbarCategory(data.data))
}

const showNavbarCategory = (data) => {
    const searchItems = document.getElementById('searchItems');

    data.news_category.map(item => {
        searchItems.innerHTML += `<a onclick="newsDataLoad('${item.category_id}','${item.category_name}')" class="nav-link" href="#">${item.category_name}</a>
       `
    })
}
/* const showNavbarCategory = (data) => {
    const searchItems = document.getElementById('searchItems');
    const ul  = document.createElement('ul')
    ul.classList.add('d-flex','justify-content-between','align-items-center')
    data.map(item => {
       ul.innerHTML += `
       <li style="list-style:none"><a href="#">${item.category_name}</a></li>
       `
       searchItems.appendChild(ul)
   })
} */


//News Show Data---->
const newsDataLoad = (category_id, category_name) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(category_id,category_name)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            showNewsDataLoad(data, category_name)
        })
}

const showNewsDataLoad = (id, category_name) => {
    console.log(id)
    const showData = document.getElementById('showData');
    const alertTitle = document.getElementById('alertTitle');
    alertTitle.innerText = `${id.data.length} items found for ${category_name}`
    showData.innerHTML = '';
    id.data.map(item => {
        // alertTitle.innerHTML = `items ${item.length}`
        const { author, title, thumbnail_url, image_url, details, total_view, rating, _id } = item;
        // console.log(author.img)
        showData.innerHTML += `
        <div class="card mb-3 w-full h-full">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid" src="${image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${details.length > 400 ? details.slice(0, 200) + '...' : details}</p>
                   <div class= "d-flex justify-content-around align-items-center">
                   <div class="d-flex gap-4 align-items-center">
                   <img class="img-fluid" style="width:70px;height:70px;border-radius:50px" src="${author.img}">
                   <div >
                   <h6>${author.name ? author.name : 'No Found Name'}</h6>
                   <h6>${author.published_date}</h6>
                   </div>
                   </div>

                   <div> <i class="fas fa-eye"><span> ${total_view ? total_view : '0'}</span></i></div>
                   <div> 
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star-half"></i>
                   <p class="text-center">${rating.number}</p>
                   </div>

                   <div> 
                  
                   <i type="button" class="fa-solid fa-arrow-right bg-danger-subtle p-2 rounded text-danger" onclick=showModalData('${_id}') data-bs-toggle="modal" data-bs-target="#newsModal"></i>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
        `
    })
}


const showModalData = (news_id) => {
    const URL = ` https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => showModalDetails(data))
}

const showModalDetails = (data) => {
    console.log(data)
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '';
    data.data.map(item => {
        modalBody.innerHTML += `
       <img class="img-fluid" src="${item.image_url}">
       <h5 class="card-title mt-4">${item.title}</h5>
       <p>${item.details}</p>

       <div class= "d-flex justify-content-around align-items-center">
                   <div class="d-flex gx-4 align-items-center">
                   <img class="img-fluid" style="width:70px;height:70px;border-radius:50px" src="${item.author.img}">
                   <div class="ms-3">
                   <h6>${item.author.name ? item.author.name : 'No Found Name'}</h6>
                   <h6>${item.author.published_date}</h6>
                   </div>
                   </div>

                   <div> <i class="fas fa-eye"><span> ${item.total_view ? item.total_view : '0'}</span></i></div>
                   <div> 
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star"></i>
                   <i class="fas fa-star-half"></i>
                   </div>
                   </div>
        `
    })
}
