let string = 'INDIA';

let arr = string.split('');

arr.splice(4, 0, 'O', 'N', 'E', 'S');

let result = arr.join('');

console.log(result);