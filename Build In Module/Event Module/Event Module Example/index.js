//* Adding custom events in user defined class

const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size}, pizza with ${topping}.`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "corn");
pizzaShop.displayOrderNumber();
