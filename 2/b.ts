const input = await Deno.readTextFile('./input.txt');

const scoreTable = {
  'A X': 0 + 3,
  'A Y': 3 + 1,
  'A Z': 6 + 2,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 0 + 2,
  'C Y': 3 + 3,
  'C Z': 6 + 1,
};

const games = input.split('\n');

let totalScore = 0;

games.forEach((game) => {
  totalScore += scoreTable[game as keyof typeof scoreTable];
});

console.log('totalScore: ', totalScore);
