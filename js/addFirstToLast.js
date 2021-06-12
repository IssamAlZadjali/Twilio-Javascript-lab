function addFirstToLast(inputArray){

	if (inputArray.length) {
		return inputArray[0] + inputArray.slice(-1)[0];
	} else {
		return '';
	}
}


console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));