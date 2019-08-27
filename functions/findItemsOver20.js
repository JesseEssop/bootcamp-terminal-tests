module.exports = function findItemsOver20 (list){
    var total1=[];
    for(var i=0;i<list.length;i++){
     var listItem1 = list[i];
      if(list[i].qty>20){
      total1.push(list[i]);
                  }
   }
    return(total1);
}