const input = await Deno.readTextFile('./input.txt');

const sections = input.split('\n\n');
const stacks = sections[0];

const rows = stacks.split('\n');
const arrs = [];

// Conver each row to array of chars
for (let i = 0; i < rows.length - 1; i++) {
  const row = rows[i];
  const cols = [];
  for (let x = 1; x < row.length; x += 4) {
    cols.push(row[x]);
  }
  arrs.push(cols);
}

// Convert row arrays to column arrays
const stackArrs: string[][] = [];

for (let x = 0; x < arrs[0].length; x++) {
  const temp = [];
  for (let i = 0; i < arrs.length; i++) {
    const el = arrs[i];
    if (el[x] !== ' ') {
      temp.push(el[x]);
    }
  }
  stackArrs.push(temp.reverse());
}

// Break down instructions to array of numbers
const instructions = sections[1].split('\n');

const instructionsArr = instructions.map((i) => {
  return i.split(' ');
});

const instructionsNums = instructionsArr.map((el) => {
  return el.filter((x) => !isNaN(+x));
});

// Reorder arrays of crates
instructionsNums.forEach((num) => {
  const count = num[0];
  const moveFrom = parseInt(num[1]) - 1;
  const moveTo = parseInt(num[2]) - 1;

  const moved = stackArrs[moveFrom].splice(-count);

  stackArrs[moveTo] = [...stackArrs[moveTo], ...moved];
});

// Get top crates
let topCrates = '';

stackArrs.forEach((stack) => {
  topCrates += stack.reverse()[0];
});

console.log('topCrates: ', topCrates);
