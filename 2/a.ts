const input = await Deno.readTextFile('./input.txt');

const scoreTable = {
  'A X': 3 + 1,
  'A Y': 6 + 2,
  'A Z': 0 + 3,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 6 + 1,
  'C Y': 0 + 2,
  'C Z': 3 + 3,
};

const games = input.split('\n');

let totalScore = 0;

games.forEach((game) => {
  totalScore += scoreTable[game as keyof typeof scoreTable];
});

console.log('totalScore: ', totalScore);
