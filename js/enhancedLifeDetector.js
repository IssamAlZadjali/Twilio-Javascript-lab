const argumentNumber = process.argv[2];
const luckyNumber = Number(argumentNumber);

if (luckyNumber === 0) {
  console.log('alive');
} else if (luckyNumber === 1) {
  console.log('flowering');
} else if (luckyNumber === 2) {
  console.log('shedding');
} else {
	console.log('other');
}