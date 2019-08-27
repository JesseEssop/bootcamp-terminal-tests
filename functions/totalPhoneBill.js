module.exports = function totalPhoneBill(string){
    var phoneBill = string.split(', ');
    var total = 0;
    for(var i=0;i<phoneBill.length;i++){
      if (phoneBill[i]=='call'){
            total+=2.75;
      }else{
          total+=0.65;
      }
    }
    return 'R'+total.toFixed(2)
  }