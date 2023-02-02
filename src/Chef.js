class Chef {
  constructor(name, createRestaurant) {
    this.name = name;
    this.restaurant = createRestaurant; 
  }

  greetCustomer(name, morning) {
    if (morning) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`;
    }
  }

  checkForFood(foodObject) {
    if (foodObject.name === "Quiche" || foodObject.name === "Kouign Amann") {
      return `Sorry, we aren't serving ${foodObject.name} today.`;
    } else {
      return `Yes, we're serving ${foodObject.name} today!`;
    }
  }
}

module.exports = Chef;