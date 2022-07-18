//  Write a function to convert temperatures from Fahrenheit to Celsius
let farenheit = 32;

function fToC(farenheitTemp) {
  return Math.round((farenheitTemp - 32) * (5 / 9)) + "°C";
}

console.log(fToC(farenheit));

//  Write a function that converts USD to any other currency of choice

let amountInDollars = 10;

function usdToYen(dollars) {
  let yen = dollars * 138.53;
  return `You have ¥ ${yen}`;
}

console.log("\n" + usdToYen(amountInDollars) + "\n");

//  FizzBuzz. The task is simple: Print integers 1 to N,
//  print "Fizz" if an integer is divisible by 3, "Buzz" if an integer is divisible by 5,
//  and "FizzBuzz" if an integer is divisible by both 3 and 5.
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log(i + ": " + "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i + ": " + "Fizz");
    } else if (i % 5 === 0) {
      console.log(i + ": " + "Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

//  You are given 2 arrays, one called shoppingList and one called cart.
//  Create a new version of shoppingList where the items in the cart have been removed.
let shoppingList = ["hotdog bread", "vitamins", "mints", "pen", "wipes"];
let cart = ["mints", "wipes", "vitamins"];

let newShoppingList = shoppingList.filter((item) => !cart.includes(item));
console.log("\n" + newShoppingList);

//  given a sentence reverse order: "the sky is blue" -> "euld si yks eht"
let str = "the sky is blue";
function changeOrder(sentence) {
  let sentenceToArray = sentence.split("");
  let reverseArray = sentenceToArray.reverse();
  let joinString = reverseArray.join("");
  console.log("\n" + joinString);
}

changeOrder(str);
