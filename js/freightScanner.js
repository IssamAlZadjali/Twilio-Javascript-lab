function scan(freightItems) {
  let contrabandCount = 0;
  freightItems.forEach(function(freightItems){
  	if (freightItems === 'contraband') {
  		contrabandCount++;
  	}
  });

  return contrabandCount;
}