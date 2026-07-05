import { menuArray } from "./data.js"
const menu = document.getElementById("menu")


document.addEventListener("click", function(e){
    if(e.target.dataset.id){
        handleaddeditem(e.target.dataset.id)
    }
})

function handleaddeditem(itemid){
    const targetitem = menuArray.filter(function(item){
        return item.id === itemid
    })
}




function order(){
    
}



function getmenuhtml(menuarr){
    let html = menuarr.map(item => {
        return `<div id="menuitems">
             <div class= "emoji">
                ${item.emoji}
             </div>
            <div >
                <h1 class="itemname">${item.name}</h1>
                <p class="details ingredients">${item.ingredients}</p>
                <h4 class="details">$${item.price}</h4>
            </div> 
            <button class="addbtn" data-id="${item.id}">+</button>   
        </div>`
    }).join('');
    return html  
}

function renderhtml(){
    menu.innerHTML = getmenuhtml(menuArray)
}

renderhtml()