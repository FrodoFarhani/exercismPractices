//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageSec) => {
  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
    earth: 1
  };
  const oneYearInSecOnEarth = 365.25 * 24 * 60 * 60;
  let age = Number(
    ageSec / (oneYearInSecOnEarth * orbitalPeriods[planet])
  ).toFixed(2);
  console.log(age);
  return Number(age);
};
