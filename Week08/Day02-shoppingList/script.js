const shoppingList = [];

const shoppingListForm = document.getElementById("shopping-list-form");
const itemInputEl = document.getElementById("item");
const quantityInputEl = document.getElementById("quantity");
const shoppingListDisplayEl = document.getElementById("shopping-list-display");


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

    shoppingList.forEach(function (e){
        shoppingListDisplayEl.innerHTML += `${e.item} x ${e.quantity} <span onclick="deleteItem();">❌</span><br/>`;
    })
}

function deleteItem(){
    console.log(shoppingListDisplayEl);
}