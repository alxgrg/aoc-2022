const input = await Deno.readTextFile('./input.txt');

// Group items by Elf
const elfItems = input.split('\n').join(',').split(',,');

const calorieTotals: number[] = [];

// Populate array with total calories for each elf
elfItems.forEach((item) => {
  let calories = 0;

  const elfItemArr = item.split(',');

  elfItemArr.forEach((elfItem) => {
    calories += parseInt(elfItem);
  });

  calorieTotals.push(calories);
});

// Sort ascending
const sortedCalorieTotals = calorieTotals.sort((a, b) => b - a);

// Get top three
const topThree = sortedCalorieTotals.slice(0, 3);

// Calculate sum
const topThreeSum = topThree.reduce((partialSum, a) => partialSum + a, 0);

console.log('topThreeSum: ', topThreeSum);
