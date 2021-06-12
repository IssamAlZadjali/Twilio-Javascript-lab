class Ducktypium {
  constructor(color) {
    this.color = color.toLowerCase()
    if (this.color != 'red' & this.color != 'blue' & this.color != 'yellow') {
    	throw Error('Implausible color')
    }
    this.calibrationSequence = []
  }

  refract(color1){
  	this.color1 = color1.toLowerCase()
  	if (this.color1 != 'red' & this.color1 != 'blue' & this.color1 != 'yellow') {
    	throw Error('Implausible color')
    }
    if (this.color1 == this.color) {
    	return this.color1
    }
    else if (this.color1 == 'red' && this.color == 'blue') {
    	return('purple')
    }
    else if (this.color1 == 'blue' && this.color == 'red') {
    	return('purple')
    }
    else if (this.color1 == 'red' && this.color == 'yellow') {
    	return('orange')
    }
    else if (this.color1 == 'yellow' && this.color == 'red') {
    	return('orange')
    }
    else if (this.color1 == 'yellow' && this.color == 'blue') {
    	return('green')
    }
    else if (this.color1 == 'blue' && this.color == 'yellow') {
    	return('green')
    }

}
calibrate(numberArray){
	this.array = numberArray
	this.array.sort()
	this.calibrationSequence = this.array.map(item => item * 3)
}
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]