const input = await Deno.readTextFile('./input.txt');

let startOfMessage = 0;

for (let i = 0; i < input.length; i++) {
  const chunk = input.slice(i, i + 14);
  const deDuped = new Set(chunk);
  if (chunk.length === deDuped.size) {
    startOfMessage = i + chunk.length;
    break;
  }
}
console.log('startOfMessage: ', startOfMessage);
