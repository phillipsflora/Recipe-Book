const recipes = [];

document.getElementById('add-recipe-button').addEventListener('click', () => {
    const title = prompt("Enter recipe title:");
    const ingredients = prompt("Enter ingredients (comma-separated):");
    const instructions = prompt("Enter cooking instructions:");

    if (title && ingredients && instructions) {
        const recipe = {
            title,
            ingredients: ingredients.split(',').map(item => item.trim()),
            instructions,
        };
        recipes.push(recipe);
        displayRecipes();
    }
});

function displayRecipes() {
    const recipeContainer = document.getElementById('recipes');
    recipeContainer.innerHTML = ''; // Clear existing recipes

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        recipeDiv.innerHTML = `
            <h2>${recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

        recipeContainer.appendChild(recipeDiv);
    });
}
