const orbitals = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
  Earth: 1
};

var SpaceAge = function(sec) {
  this.seconds = sec;
  var year = () => this.seconds / 31557600;

  // var _orbYear = (ratio) => {
  //   return ("return (this.year() / " + ratio
  //           + ").toFixed(2) / 1;")
  // }

  Object.entries(orbitals).map(([k, v]) => {
    this['on' + k] = () => (year() / v).toFixed(2) / 1;
    // this['on' + k] = new Function("", _orbYear(v));
  });
};

module.exports = SpaceAge;
