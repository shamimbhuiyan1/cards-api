// const main = document.getElementById('main')


// const searchButton = () =>{
    
//     const input = document.getElementById('input-value');
//     const error = document.getElementById('error');
//     const inputValue = input.value;
    
//     if(isNaN(inputValue) || inputValue==''){
//        /* alert('Please enter a number') */
//        error.innerText='Please give a number'
//        input.value='';
//     }
//     else if(inputValue<=0){
//         error.innerText='Please give a positive number'
//         input.value='';
//     }
//     else{
//         fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
//     .then(res => res.json())
//     .then(data => displayCards(data.cards))
//     input.value='';
//     }
    
// }


// const displayCards=(cards) =>{
//     console.log(cards)
//     for (const card of cards){
//         const div = document.createElement('div');
//         div.classList='col-lg-4'
//         div.innerHTML=`
//         <div class="card my-3" style="width: 18rem;">
//         <img src="${card.image}"              class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${card.suit}</h5>
//           <p class="card-text">${card.code}</p>
//           <a href="#" class="btn btn-primary">See Detailes</a>
//         </div>
//       </div>

//         `

//         main.appendChild(div)
//     }
// }

const main  = document.getElementById('main')


const searchButton = () =>{
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    const error = document.getElementById('error')
    if(isNaN(inputValue) || inputValue==''){
        error.innerText='Please give a number'
        input.value=''
        main.innerHTML=''
    }
    else if (inputValue<=0){
        error.innerText="Please give a positive number"
        input.value=''
        main.innerHTML=''
    }

    else{
        main.innerHTML=''
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data =>dispalyCards(data.cards))
        input.value=''
        error.innerHTML=''

    }

}

const dispalyCards = (cards) =>{
    
    for(const card of cards){
        const div = document.createElement('div')
        div.classList='col-lg-4 col-md-6'
        div.innerHTML=`
        <div class="card my-3" style="width: 18rem;">
           <img src="${card.image}"              class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">'${card.code}'</p>
            <button onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See Details</button>
         </div>
      </div>
        `

        main.appendChild(div)
    }
}


const cardDetails = (code)=>{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data =>{
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code===code)
            const div =document.createElement('div')
            main.innerHTML=''
            div.innerHTML=`
            <div class="card my-3" style="width: 18rem;">
            <img src="${singleCard.image}"              class="card-img-top" alt="...">
          <div class="card-body">
             <h5 class="card-title">${singleCard.suit}</h5>
             <p class="card-text">'${singleCard.code}'</p>
             <button onclick="cardDetails('${singleCard.code}')" href="#" class="btn btn-primary">See Details</button>
          </div>
       </div>
            `

            main.appendChild(div)
            
        })
}