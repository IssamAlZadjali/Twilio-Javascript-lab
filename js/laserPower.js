function calculatePower(powerSettings) {
  let totalPower = powerSettings.map(value => value * 2);

  
  return totalPower.reduce((sum, value) => sum + value, 0)
}