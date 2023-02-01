function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, array) {
  if (!array.includes(ingredient)) {
    array.push(ingredient);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice.toString()}`;
}

function decreasePrice(originalPrice) {
  var newPrice = originalPrice - (originalPrice * 0.10);
  return newPrice; 
}

function createRecipe(title, array, type) {
  return {
    title: title,
    ingredients: array,
    type: type
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


