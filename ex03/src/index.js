function rangOfNumbers(startN, endN) {
    if (startN === endN) {
      return [startN];
    } else {
      const numbers = rangOfNumbers(startN, endN - 1);
      numbers.push(endN);
      return numbers;
    }
  };
  
    

    //Only change code below this line
    
    //Only change code adove this line
    
  
    console.log(rangOfNumbers(1, 7));
    console.log(rangOfNumbers(3, 10));
    console.log(rangOfNumbers(5, 5));
    console.log(rangOfNumbers(7, 5));
    
    module.exports = rangOfNumbers;

