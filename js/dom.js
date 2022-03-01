

const loadDog = ()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
.then(res =>res.json())
.then(data => displayDog(data))
}


const displayDog = (doglist)=>{
    const main = document.getElementById('main')
    const first15Numbers= doglist.slice(0,10)
    for(const dog of first15Numbers){
        const div = document.createElement('div')
        div.classList='col-lg-4'
        console.log(dog)
        div.innerHTML=`
            <h2>${dog.name}</h2>
            <p>${dog.temperament}</p>
            <h4>${dog.weight.imperial}</h4>
            <img width="400px" height="250px" src= "${dog.image.url}">
            `
        main.appendChild(div)
    }

    
}