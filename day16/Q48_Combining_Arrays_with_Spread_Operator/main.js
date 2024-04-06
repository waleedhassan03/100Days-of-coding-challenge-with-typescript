// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// prices of laptops in arrays
let laptop1 = [3000, 1500, 2500, 3800, 500];
let laptop2 = [3500, 5000, 900, 600];
// here combining the laptop1 and laptop2 prices in single array and sort-method will extract all prices and  will write in ascending order
let combinedPrices = [...laptop1, ...laptop2].sort((a, b) => a - b);
console.log(combinedPrices);
export {};
