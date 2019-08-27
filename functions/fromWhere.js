module.exports = function fromWhere (car){
    if (car == 'CY'){
      return 'Bellville'
    }
    else if (car == 'CJ'){
      return 'Paarl'
    }
    else if (car == 'CA'){
      return 'Cape Town'
    }
    else{
      return 'Some other place!'
    }
  }