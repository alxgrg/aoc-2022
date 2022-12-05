const input = await Deno.readTextFile('./input.txt');

const pairs = input.split('\n');

let hasOverlap = 0;

for (const pair of pairs) {
  const sections = pair.split(',');
  const elf1 = [
    parseInt(sections[0].split('-')[0]),
    parseInt(sections[0].split('-')[1]),
  ];
  const elf2 = [
    parseInt(sections[1].split('-')[0]),
    parseInt(sections[1].split('-')[1]),
  ];

  if (elf1[0] >= elf2[0] && elf1[0] <= elf2[1]) {
    hasOverlap++;
  } else if (elf1[0] < elf2[0] && elf1[1] >= elf2[0]) {
    hasOverlap++;
  }
}

console.log('hasOverlap: ', hasOverlap);
