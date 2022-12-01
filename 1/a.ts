const input = await Deno.readTextFile('./input.txt');

// Group items by Elf
const elfItems = input.split('\n').join(',').split(',,');

let highestCalories = 0;

elfItems.forEach((item) => {
  let calories = 0;

  const elfItemArr = item.split(',');

  elfItemArr.forEach((elfItem) => {
    calories += parseInt(elfItem);
  });

  if (calories > highestCalories) {
    highestCalories = calories;
  }
});

console.log('highest: ', highestCalories);
