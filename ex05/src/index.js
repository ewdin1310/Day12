function sumFibonacci(num) {
    return num < 1 ? 0
    : num <= 1 ? 1
    : sumFibonacci(num - 1) + sumFibonacci(num - 4);
    };

  
  
    

    //Only change code below this line
    
    //Only change code adove this line
    
  
    console.log(sumFibonacci(1));
    console.log(sumFibonacci(10));
    console.log(sumFibonacci(20));
    console.log(sumFibonacci(4));
    console.log(sumFibonacci(-5));
    
    module.exports = sumFibonacci;

