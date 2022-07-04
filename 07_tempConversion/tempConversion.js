const ftoc = function(fdegree) {
  let multiplier = 5 / 9; 
  let cdegree = (fdegree - 32) * multiplier; 
  cdegree = Math.round(cdegree * 10) / 10; 
  return cdegree; 
};

const ctof = function(cdegree) {
  let multiplier = 9 / 5; 
  let fdegree = cdegree * multiplier + 32;
  fdegree = Math.round(fdegree * 10) / 10; 
  return fdegree; 
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
