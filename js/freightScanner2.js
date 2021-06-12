function scan(freightItems) {
  let contrabandIndexes = [];
  let count = -1;
  freightItems.forEach(function(freightItems){
  	count++;
  	if (freightItems === 'contraband') {
  		contrabandIndexes.push(count);
  	}
  });


	  return contrabandIndexes;
}