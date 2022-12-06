const input = await Deno.readTextFile('./input.txt');

let startOfPacket = 0;

for (let i = 0; i < input.length; i++) {
  const chunk = input.slice(i, i + 4);
  const deDuped = new Set(chunk);
  if (chunk.length === deDuped.size) {
    startOfPacket = i + chunk.length;
    break;
  }
}
console.log('startOfPacket: ', startOfPacket);
