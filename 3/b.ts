const input = await Deno.readTextFile('./input.txt');

const rucksacks = input.split('\n');

// Break into tuples
function groupByThree(arr: string[]) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    const chunk = arr.slice(i, i + 3);
    result.push(chunk);
  }
  return result;
}

const grouped = groupByThree(rucksacks);

let sum = 0;

grouped.forEach((group) => {
  // remove duplicate items from array
  const deDuped = [...new Set(group[0].split(''))];

  // Check for char in other two group elements
  deDuped.forEach((letter) => {
    if (
      group[1].split('').filter((l) => l === letter).length > 0 &&
      group[2].split('').filter((l) => l === letter).length > 0
    ) {
      if (letter === letter.toUpperCase()) {
        sum += letter.charCodeAt(0) - 38;
      } else {
        sum += letter.charCodeAt(0) - 96;
      }
    }
  });
});

console.log('sum: ', sum);
