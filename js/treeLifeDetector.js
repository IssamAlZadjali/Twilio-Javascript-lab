const argumentNumber = process.argv[2];
const luckyNumber = Number(argumentNumber);

if (luckyNumber === 0) {
  console.log('alive');
} else {
  console.log('other');
}