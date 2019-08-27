module.exports = function findItemsOver(list,threshold){
    var total2 = [];
    for(var i=0;i<list.length;i++){
      var listItem2 = list[i];
      if(list[i].qty>threshold){
        total2.push(list[i]);
      }
    }
    return(total2);
  }