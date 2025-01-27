function repeatedDigitSum(num) {
    while (num >= 10) { 
      num = num
        .toString() 
        .split('') 
        .map(Number) 
        .reduce((sum, digit) => sum + digit, 0); 
    }
    return num; 
  }
  
let result = repeatedDigitSum(958);
console.log(result);
  