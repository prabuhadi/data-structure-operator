'use strict';

let currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 'No Menu',
    mainIndex = 'Empty',
    time = `${currentHour}:${currentMinute}`,
    address = 'Unknown Address',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  starterIndex: 0,
  mainIndex: 0,
  address: 'La palma , 63',
});

// Destructuring Object //
const { name, categories, openingHours } = restaurant; // if object use curly bracket
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values //
const { mainMenu: menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variable //
let a = 111;
let b = 999;
const obj = { a: 23, b: 30, c: 34 };
({ a, b } = obj);
console.log(a, b);

// Nested object //
// const {
//   thu: { open: o, close: c },
//   fri,
//   sat,
// } = openingHours;
// console.log(o, c);

// Destructuring Array //
/*
const arr = [22, 33, 23];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [cateOne, , , cateFour] = restaurant.categories;
console.log(cateOne, cateFour);

// Switching variables
// const temp = cateOne;
// cateOne = cateFour;
// cateFour = temp;

[cateOne, cateFour] = [cateFour, cateOne];
console.log(cateOne, cateFour);

// Recieve 2 return value from function
// console.log(restaurant.order(2, 0));
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Destructuring nested element
const nested = ['Anne', 'Foxy', ['Lae', 'Bae']];
// const [one, two, three] = nested;
// console.log(one, three);

const [one, two, [three, four]] = nested;
console.log(one, four);

const [i = 2, j = 2, k = 2] = [8];
console.log(i, j, k);
*/

///////////* Destructuring *////////////
// SPREAD, because on right side of (=)
const arrSpread = [1, 2, ...[3, 4]];
console.log(arrSpread);

// REST, because on left side of (=)
const [n, m, ...other] = [1, 2, 3, 4, 5];
console.log(n, m, other);

const [pizza, risotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, others);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

///////////* Functions *////////////
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 5, 2, 1, 4, 1, 6, 5);
const q = [12, 52, 32];
add(...q);

restaurant.orderPizza('dough', 'mashrooms', 'onion', 'spinach');
restaurant.orderPizza('sausage');

// Spread Operator //
const arr = [7, 8, 9];
const badNewArr = [2, arr[0], arr[2], arr[1], 10];
console.log(badNewArr);

const newArr = [2, 3, ...arr];
console.log(newArr);

console.log(...newArr); // ... for ouput without array properties

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const starterMenuCopy = [...restaurant.starterMenu];

// Join 2 arrays //
const menus = [...mainMenuCopy, ...starterMenuCopy];
console.log(...menus);

// Iterables : arrays, string, maps, stes. Not objects
const str = 'Prabu';
console.log(...str);
const letters = [...str, '', 'H.'];
console.log(letters);
// console.log(`${str} Hadi`);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Object //
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'Prabu' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
