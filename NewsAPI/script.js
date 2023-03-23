let fetchData = [];

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
    // console.log(category_name)
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    // console.log(category_id,category_name)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            fetchData = data.data
            showNewsDataLoad(data.data, category_name)
        })
}

const showNewsDataLoad = (data, category_name) => {
    const showData = document.getElementById('showData');
    const alertTitle = document.getElementById('alertTitle');
    const alertCount = document.getElementById('alertCount');
    alertCount.innerText = `${data.length} items found for `
    alertTitle.innerText = `${category_name}`
    showData.innerHTML = '';
    data.map(item => {
        // alertTitle.innerHTML = `items ${item.length}`
        const { author, title, thumbnail_url, image_url, details, total_view, rating, _id } = item;
        // console.log(author.img)
        showData.innerHTML += `
        <div class="card mb-3 w-full h-full">
        <div class="row g-0">
            <div class="col-md-4">
                <img class="img-fluid" src="${image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 ">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${details.length > 400 ? details.slice(0, 200) + '...' : details}</p>
                   <div class= "d-flex justify-content-around align-items-center">
                   <div class="d-flex gap-4 align-items-center">
                   <img class="img-fluid rounded-circle" style="width:70px;height:70px;" src="${author.img}">
                   <div >
                   <h6>${author.name ? author.name : 'No Found Name'}</h6>
                   <h6>${author.published_date}</h6>
                   </div>
                   </div>

                   <div> <i class="fas fa-eye"><span> ${total_view ? total_view : '0'}</span></i></div>
                   <div id="try"> 
                   ${showRating(rating.number)}
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
       <h5 class="card-title mt-4 ${item.others_info.is_trending || item.others_info.is_todays_pick ? 'd-block' : 'd-none'}">${item.title ? item.title : ""} <span class="badge text-bg-danger">${item.others_info.is_trending ? "Trending" : ""}</span> <span class="badge text-bg-success">${item.others_info.is_todays_pick ? "Todays Pick" : ""}</span></h5>
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
                   <div id="ratingCount"> 
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

const trendingNews = () => {
    console.log(fetchData)
    let trendingNews = fetchData.filter(item => item.others_info.is_trending === true)
    if (trendingNews.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Found Trending News!!',
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
        // console.log(trendingNews)
        const alertTitle = document.getElementById('alertTitle').innerText;
        showNewsDataLoad(trendingNews, alertTitle)
    }

}

const todayPickShow = () => {
    const todayPickShow = fetchData.filter(item => item.others_info.is_todays_pick === true);
    if (todayPickShow.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Found Todays Pick News!!',
            // footer: '<a href="">Why do I have this issue?</a>'
        })
    } else {
        const alertTitle = document.getElementById('alertTitle').innerText;
        showNewsDataLoad(todayPickShow, alertTitle)
    }
}


//Show ratting dynamically----->
const showRating = rating => {
    let ratingCount = '';
    for (i = 0; i < Math.floor(rating); i++) {
        ratingCount += `
        <i class="fas fa-star"></i>
        `
    }
    if (rating - Math.floor(rating) > 0) {
        ratingCount += `
        <i class="fas fa-star-half"></i>
        `
    }
    return ratingCount;
}

//Sort by ratting----->
const ratingBySort = () => {
    console.log(fetchData)
    const sortData = fetchData.sort((a, b) => (a.rating.number < b.rating.number) ? 1 : ((b.rating.number < a.rating.number) ? -1 : 0));
    if (sortData.length === 0){
        return
    }else{
        const alertTitle = document.getElementById('alertTitle').innerText;
        showNewsDataLoad(sortData,alertTitle)
    }
       
}

// const deleteBtnSelect = document.querySelectorAll('.items');
// const todayPickShow = fetchData.filter(item => item.others_info.is_todays_pick === true);
// for (const select of deleteBtnSelect) {
//     select.addEventListener('click', function (event) {

//         console.log(event.target.value);
//     })
// }

// const showItemClick = ()=>{
//     const todayPickShow = fetchData.filter(item => item.rating.number > 4);
//     console.log(todayPickShow)
// }




