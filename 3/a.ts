const input = await Deno.readTextFile('./input.txt');

const rucksacks = input.split('\n');

const compartments = rucksacks.map((rucksack) => {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ];
});

let sum = 0;

for (let i = 0; i < compartments.length; i++) {
  const compartment1 = [...new Set(compartments[i][0].split(''))];
  const compartment2 = [...new Set(compartments[i][1].split(''))];

  for (const x of compartment1) {
    for (const y of compartment2) {
      if (x === y) {
        if (x == x.toUpperCase()) {
          sum += x.charCodeAt(0) - 38;
        } else {
          sum += x.charCodeAt(0) - 96;
        }
      }
    }
  }
}

console.log('sum: ', sum);
