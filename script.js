'use strict';

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

  order: function (starterIndex, menuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[menuIndex]];
  },
};

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
