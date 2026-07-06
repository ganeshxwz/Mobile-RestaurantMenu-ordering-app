import { menuArray } from "./data.js"
const menu = document.getElementById("menu")
const orders = document.getElementById("orderspage")
const ul = document.getElementById("ul")
const totalel = document.getElementById("total")
let orderitems = []


document.addEventListener("click", function(e){
    if(e.target.dataset.id){
        handleaddeditem(e.target.dataset.id)
    }
})

function handleaddeditem(itemid){
    const targetitem = menuArray.filter(function(item){
        return item.id === Number(itemid)
    })
        orderitems.push(...targetitem)
    renderorder(targetitem)
    rendertotal()
}


function renderorder(items){
    let html = ""
   orders.style.display = "block"
   items.forEach(item => {
       html +=  `<div class="order-items">
                <p>${item.name}</p>
                <p>$${item.price}</p>
                </div>
                `
   });
   ul.innerHTML += html
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

function rendertotal(){
    console.log(orderitems)
    let total = orderitems.reduce((a,b)=>{return a + b.price},0) 
    console.log(total)
    totalel.innerHTML = `Total pay $ ` + total
}

renderhtml()