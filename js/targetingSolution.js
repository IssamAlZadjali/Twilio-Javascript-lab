class TargetingSolution {
  constructor(config) {
    this.xcoord = String(config.x)
    this.ycoord = String(config.y)
    this.zcoord = String(config.z)
  }

  target() {
  	return ('('+this.xcoord+', '+this.ycoord+', '+this.zcoord+')')
  }
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1
});