var menu = {
courses: {
appetizers: [],
mains: [],
desserts: []
},

addDishToCourse: function(courseName,dishName,dishPrice) {
  var dish = {
    name: dishName,
    price: dishPrice
  }
   return this.courses[courseName].push(dish);
},

getRandomDishFromCourse (courseName) {
  let dishes = this.courses[courseName];
  let randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},

generateRandomMeal: function () {
  let appetizer = menu.getRandomDishFromCourse('appetizers');
  let main = menu.getRandomDishFromCourse('mains');
  let dessert = menu.getRandomDishFromCourse('desserts');
  let totalPrice = appetizer.price + main.price + dessert.price;
  console.log(`'Your meal is ${appetizer.name}, ${main.name} + ${dessert.name} and your bill is ${totalPrice}'`);
}
};
    
menu.addDishToCourse('appetizers', 'nachos', 6); 
menu.addDishToCourse('appetizers', 'queso and chips', 7);
menu.addDishToCourse('appetizers', 'guacamole and chips', 8);
menu.addDishToCourse('mains', 'burrito', 10);
menu.addDishToCourse('mains', 'chimichanga', 11);
menu.addDishToCourse('mains', 'tacos', 12);
menu.addDishToCourse('desserts', 'churros', 6);
menu.addDishToCourse('desserts', 'flan', 7);
menu.addDishToCourse('desserts', 'sopapillas', 8);

let meal = menu.generateRandomMeal();
console.log(meal);

//  'Your meal is queso and chips, tacos + sopapillas and your bill is 27'

