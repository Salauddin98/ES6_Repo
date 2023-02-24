const foodData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showFood(data.meals))
}

const showFood = meals => {
    // console.log(meals)
    const mealContainerDiv = document.getElementById('mealContainer')
    mealContainerDiv.innerText = '';
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
    <div>
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button onclick=mealDetails(${meal.idMeal}) type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
      Show Details
</button>
    </div>
    `
        mealContainerDiv.appendChild(mealDiv)
    });

}

const clickSearch = () => {
    const serchField = document.getElementById('searchFood').value;
    foodData(serchField)

}


const mealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
        // .catch(error => console.log(error))
}
//using async await------->
const mealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0])
    }

    catch (error) {
        return alert('Enter valie input')
    }
}


const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const foodBody = document.getElementById('foodBody');
    foodBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    <h1>${meal.strArea}</h1>
    `
}
foodData('fish') 