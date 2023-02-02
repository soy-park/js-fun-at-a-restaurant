function createRestaurant(name) {
  return {
    name: name,
    menus: { breakfast: [], lunch: [], dinner: [] }
  }
}

function addMenuItem(restaurant, object) {
  if (object.type === "lunch" && !restaurant.menus.lunch.includes(object)) {
    restaurant.menus.lunch.push(object);
  } else if (object.type === "breakfast" && !restaurant.menus.breakfast.includes(object)) {
    restaurant.menus.breakfast.push(object);
  } else if (object.type === "dinner" && !restaurant.menus.dinner.includes(object)) {
    restaurant.menus.dinner.push(object);
  }
}

function removeMenuItem(restaurant, foodName, type) {
  if (type === "breakfast") {
    for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
      if (foodName === restaurant.menus.breakfast[i].name) {
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the breakfast menu!`;
      }
    }
    return `Sorry, we don't sell ${foodName}, try adding a new recipe!`;
  }
  if (type === "dinner") {
    for (var i = 0; i < restaurant.menus.dinner.length; i++) {
      if (foodName === restaurant.menus.dinner[i].name) {
        restaurant.menus.dinner.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the dinner menu!`;
      }
    }
    return `Sorry, we don't sell ${foodName}, try adding a new recipe!`;
  }
  if (type === "lunch") {
    for (var i = 0; i < restaurant.menus.lunch.length; i++) {
      if (foodName === restaurant.menus.lunch[i].name) {
        restaurant.menus.lunch.splice(i, 1);
        return `No one is eating our ${foodName} - it has been removed from the lunch menu!`;
      }
    }
    return `Sorry, we don\'t sell ${foodName}, try adding a new recipe!`;
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}