const shoppingList = [];

const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");
const shoppingBasketForm = document.getElementById("shopping-basket-form");
const shoppingBasketEl = document.getElementById("shopping-basket");
const itemsStillToBuyDisplayEl = document.getElementById("items-still-to-buy-display");

shoppingListForm.addEventListener("submit", function(e){
    e.preventDefault();

    const newObj = {
        item: itemInputEl.value, 
        quantity: quantityInputEl.value
    };

    shoppingList.push(newObj);
    console.log(shoppingList);
    
    displayListItems();
});

function displayListItems(){
shoppingListDisplayEl.innerHTML = "";

    shoppingList.forEach(function (e, index){
        shoppingListDisplayEl.innerHTML += `${e.item} x ${e.quantity} <span onclick="deleteItem(${index});">❌</span><br/>`;
    })
}

function deleteItem(indexOfElement){
    shoppingList.splice(indexOfElement, 1);
    console.log(indexOfElement);
    displayListItems();
}

const basket = ["banana", "eggs", "watermelon"]
// basket.includes("banana")
console.log(basket.includes("banana"))

shoppingBasketForm.addEventListener("submit", function(e, index){
    e.preventDefault();

    // console.log(shoppingBasketEl.value.toLowerCase().split(","));   
    const basket = shoppingBasketEl.value.toLowerCase().split(",");  
    console.log(basket);
    const itemStillNeedToBuy = shoppingList.filter(function(e, i, arr){
        if (basket.includes(e.item.toLowerCase())){
            return false
        }else{
            return true
        }
    })
    console.log(itemStillNeedToBuy);
    // displayBasketItemsMissing()
    itemsStillToBuyDisplayEl.innerHTML = "Here are the items you still need to get!<br/>";

    if (itemStillNeedToBuy.length === 0){
        itemsStillToBuyDisplayEl.innerHTML = "You have all the items!<br/>";

    }else{
        itemStillNeedToBuy.forEach(function(e, i, arr){
            itemsStillToBuyDisplayEl.innerHTML = itemsStillToBuyDisplayEl.innerHTML + `${e.item} x ${e.quantity} <br/>`
        })

    }
   
  
})
