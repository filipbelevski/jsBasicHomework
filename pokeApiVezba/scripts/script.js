let selectorDiv = document.getElementById("selectionDiv");
let mainDIv = document.getElementById("main");
let selector = document.getElementById("selectionSelect");
let pokeName = document.getElementById("pokeName");
let pokeType = document.getElementById("pokeType");
let pokeWeight = document.getElementById("weight");
let abilities = document.getElementById("abilities");
let picAndStats = document.getElementById("picAndStats");
function fillOption(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(pokemons => {
        selector.innerHTML = (`
            ${pokemons.results.map((pokemon) =>{
                return (
                    `
                        <option value"${pokemon.name}"> <span> ${pokemon.name} </span></option>
                    `

                )
            })}
        `)
        
         
    }).catch(err => console.log(err))
}
window.onload = fillOption();
selector.addEventListener(`click` , pokemonSelect)
function pokemonSelect(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${selector.value}`)
    .then(response =>  response.json() )
    .then(json => {  
        pokeType.innerText = ""; abilities.innerHTML =  `<legend>Abilities</legend>`;
        pokeName.innerText = json.name;
        for(types of json.types){
            pokeType.innerText += `  -${types.type.name}-    `
        }
        pokeWeight.innerText = `Weight: ${json.weight} LBS
         Height: ${json.height}0 cm`
        for(ability of json.abilities){
            abilities.innerHTML += `<p class="anAbility"> ${ability.ability.name} </p>`
        }
        picAndStats.innerHTML =  `<img src="${json.sprites.front_default}" class="pokePic"><img src="${json.sprites.back_default}" class="pokePic">`
         
    }
        
        
        
        
        )
   
}




// {
//     console.log(json)
//     mainDIv.innerHTML = ` <h1> ${selector.value} </h1>`;
//     if(json.types[0].type.name !== undefined){
//         mainDIv.innerHTML += `<h3 id="types">${json.types[0].type.name} </h3>`;
//     }
     
//     if(json.types[1].type.name !== undefined){
//         document.getElementById("types").innerText += ` , ${json.types[1].type.name} `   
//     }




// }