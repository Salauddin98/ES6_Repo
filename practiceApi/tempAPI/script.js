const key = `9d90b52ffb668011088f92a3fe68380f`

const loadTempData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => showTempData(data))
}

const showTempData = (data) => {
    console.log(data)
    if (data.message === 'city not found') {
        return alert('Sorry! You type invalid city!!!! Please try agian!!!');
    } else {
        const temperature = document.getElementById('temperature');
        const city = document.getElementById('city');
        const condition = document.getElementById('condition');
        temperature.innerText = data.main.temp
        city.innerText = data.name
        condition.innerText = data.weather[0].main;
    }

}


document.getElementById('searchBtn').addEventListener('click', function () {
    const cityName = document.getElementById('cityName').value;
    loadTempData(cityName)
    document.getElementById('cityName').value = '';
})
document.getElementById('cityName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cityName = document.getElementById('cityName').value;
        loadTempData(cityName)
        document.getElementById('cityName').value = '';
    }

})
loadTempData('Dhaka')