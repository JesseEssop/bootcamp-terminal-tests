module.exports = function countAllFromTown(list,list2){
    var regNumbers = list.split(',');
    var paarl = [];
    
    for (var i=0;i<regNumbers.length;i++){
      var allReg = regNumbers[i].trim();
      if (allReg.startsWith(list2)){
            paarl.push(allReg);
        }
    }
    
    return paarl.length;
  }