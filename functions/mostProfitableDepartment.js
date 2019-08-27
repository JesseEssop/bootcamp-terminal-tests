module.exports = function mostProfitableDepartment(depList){
    var num = 0;
    var total=[];
    for(var i=0; i<depList.length; i++){
      if(num < depList[i].sales){
        num = depList[i].sales;
      }console.log(num)
    } 
    for(var i=0; i<depList.length; i++){
      if(depList[i].sales == num){
        total.push(depList[i]);
      }
    }//console.log(total)
    return(total[0].department);
    //console.log(total[0].department)
}