function calculateMass(freightItems) {
  // This is a placeholder for the total length in characters of all strings
  // in the freightItems array

  return freightItems.reduce((tolength, item) => tolength + item.length, 0);
}

const cargo = [
  'cat',
  'dog',
  'bird'
];

console.log(calculateMass(cargo));