const ftoc = function (ftemp) {

  // C = (F - 32) * (5/9)
  let ctemp = (ftemp - 32) * (5 / 9);
  let c = parseFloat(ctemp.toFixed(1));

  console.log(c);
  return c;

};

const ctof = function (ctemp) {

  // F = C * ( 9 / 5 ) + 32
  let ftemp = ctemp * (9 / 5) + 32;
  let f = parseFloat(ftemp.toFixed(1));

  console.log(f);
  return f;


};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
