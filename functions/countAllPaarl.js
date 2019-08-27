module.exports = function countAllPaarl(list) {
  var regNumber = list.split(', ');
  var paarl = [];
  for (var i = 0; i < regNumber.length; i++) {
    var allReg = regNumber[i];
    if (allReg.startsWith('CJ')) {
      paarl.push(allReg);
    }
  }
  return paarl.length;
}