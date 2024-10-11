const recipes = [
    { name: 'Hot and Spicy | Chilli Cheese Toast'},
    { name:'Murukku' },
    { name: 'Khakhra' },
    { name:'Samosa Recipe - Air Fryer, Fried & Baked'},  
    { name:'Pav Bhaji'},  
    { name:'Bombay Potatoes'},  
    { name:'Paneer Tikka Recipe'},  
    { name:'Rava Idli Recipe'},
    { name:'Rava Idli Recipe'}
];  
// Function to render recipes
document.getElementById('searchbar').addEventListener('input', function() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let recipeItems = document.getElementsByClassName('recipe-item');
    
    for (let i = 0; i < recipeItems.length; i++) {
        let recipeName = recipeItems[i].getElementsByClassName('h2')[0].innerText.toLowerCase();
        if (recipeName.includes(input)) {
            recipeItems[i].style.display = "";
        } else {
            recipeItems[i].style.display = "none";
        }
    }
});