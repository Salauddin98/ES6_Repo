const loadData = (word) =>{
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(URL)
    .then(res => res.json())
    .then(data => showData(data))
}

const showData = (data) =>{
    // console.log(data)
    const audioContainer = document.getElementById('audioContainer');
    if(data.title === 'No Definitions Found'){
        // alert('Plsease Provide a valid input for search !');
        alert(data.message);
    }else{
    data[0].phonetics.forEach(element => {
        // console.log(element)
        const audio = document.createElement('audio');
        audio.src = element.audio
        audioContainer.appendChild(audio)

        // document.getElementById('clickBtn').addEventListener('click',function(){
        //     audio.play();
        // })

        const button = document.createElement('button');
        button.innerText = 'Play'
        button.onclick = ()=>{
            audio.play();
        }
        const div = document.createElement('div');
        div.appendChild(button)
        audioContainer.appendChild(div)



    });
    }
}

document.getElementById('searchBtn').addEventListener('click',function(){
    const inputFieldValue = document.getElementById('inputField').value;
    if(inputFieldValue){
        loadData(inputFieldValue)
    }else{
        alert('Please provide a valid input');
    }
   document.getElementById('inputField').value = '';

})



loadData()