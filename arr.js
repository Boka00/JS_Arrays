// 1 - INDEXES & LENGTH
// Challenge 1: First & last
const fruits = ["apple", "banana", "cherry", "date"];
// 1. Log the first element
console.log(fruits[0]); //
// 2. Log the last element (use .length)
console.log(fruits[fruits.length - 1]);
// / 3. Log the total count of fruits
console.log(fruits.length);

// Challenge 2: Update by index
const scores = [80, 55, 90, 42, 73];
console.log(scores);
// 1. Change the second score to 60
scores[1] = 60;
// 2. Change the last score to 99
scores[scores.length - 1] = 99;
// 3. Log the updated array
console.log(scores);

// 2 - LOOPS
// Challenge 3: for loop - sum
const prices = [12, 5, 8, 30, 3];
console.log(prices);
// Calculate the total sum of all prices
// using a for loop. Log the result.
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(total);

// Challenge 4: for...of - greet
const names = ["Alice", "Bob", "Charlie", "Diana"];
// Log "Hello, Alice!", "Hello, Bob!" …
// for each name using for...of
for (name of names) {
  console.log(`Hello ${name}!`);
}

// Challenge 5: forEach - multiply
const nums = [2, 4, 6, 8, 10];
// Log each number multiplied by 3
// using .forEach(\
nums.forEach((num) => {
  console.log(num * 3);
});

// 3 - PUSH, POP, SHIFT, UNSHIFT
// Challenge 6: Queue simulation
const queue = ["Tom", "Sara"];
// 1. Add "Mike" to the end
queue.push("Mike"); // ["Tom", "Sara", "Mike"]
// 2. Add "Lena" to the beginning
queue.unshift("Lena"); // ["Lena", "Tom", "Sara", "Mike"]
// 3. Remove the first person (they got served)
queue.shift(); // ["Tom", "Sara", "Mike"]
// 4. Remove the last person (they left)
queue.pop(); // ["Tom", "Sara"]
// 5. Log the final queue
console.log(queue); // ["Tom", "Sara"]

// 4 - MAP
// Challenge 7: Celsius to Fahrenheit
const temps = [0, 10, 20, 30, 40];
// Create a new array where each
// Celsius temp is converted to Fahrenheit.
// Formula: (C * 9/5) + 32
const newTemps = temps.map((temp) => (temp * 9) / 5 + 32);
console.log(newTemps);

// Challenge 8: Pass the threshold
const scores = [45, 82, 60, 37, 91, 55, 78];
// 1. Get only scores that are 60 or above
const pass = scores.filter((score) => score >= 60);
console.log(pass);
// 2. Get only scores below 60 (failing)
const fail = scores.filter((score) => score < 60);
console.log(fail);
// Log both arrays
