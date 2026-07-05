import { menuArray } from "./data.js"
const menu = document.getElementById("menu")

function getmenuhtml(menuarr){
    let html = menuarr.map(item => {
        return `
        <div id="menuitems">
             <div class= "emoji">
                ${item.emoji}
             </div>
            <div >
                <h1 class="itemname">${item.name}</h1>
                <p class="details ingredients">${item.ingredients}</p>
                <h4 class="details">$${item.price}</h4>
            </div> 
            <button class="addbtn">+</button>   
        </div>
        `
    }).join('');
    return html  
}

function renderhtml(){
    menu.innerHTML = getmenuhtml(menuArray)
}

renderhtml()