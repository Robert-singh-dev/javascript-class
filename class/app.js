const pizza = {
  type: "cheese",
  size: "large",
  crust: "thick",
  toppings: "olives",
  bake: function () {
    return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
  },
};

console.log(pizza);
console.log(pizza.type);

const anotherPizza = Object.create(pizza);
// here it won't print the object value it return empty object
// because it is inherit its property not a copy of it
console.log(anotherPizza);

// this get print because it get inherited not a copy of it
console.log(anotherPizza.size);

pizza.bake();

// class
console.log("after this code is with class");

class myPizza {
  constructor(typePizza, sizePizza, crustPizza) {
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
  }
  bake() {
    return console.log(`Baking a ${this.type} ${this.crust} crust pizza`);
  }
}

// Creating an "const newPizza" "instance" is necessary because classes themselves are just templates or blueprints for objects—they don’t hold any actual data until you create an instance.
const newPizza = new myPizza("margarta", "large", "full");

newPizza.bake();
