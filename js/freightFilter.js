function scanAndFilter(freightItems, forbiddenString) {
  // This is an array variable you can override with your filtered array

  return freightItems.filter(function(freightItems){
  	return forbiddenString !== freightItems;
  });
}