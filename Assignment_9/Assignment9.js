//Q1
//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?


function scopeDemo() {
    if (true) {
      let blockScoped = "I am block-scoped (let)";
      const blockScopedConst = "I am block-scoped (const)";
      var functionScoped = "I am function-scoped (var)";
      
      console.log(blockScoped); // Accessible
      console.log(blockScopedConst); // Accessible
      console.log(functionScoped); // Accessible
    }
    
    // Outside the block:
    // console.log(blockScoped); // Error: blockScoped is not defined
     //console.log(blockScopedConst); // Error: blockScopedConst is not defined
    console.log(functionScoped); // Accessible because var is function-scoped
  }
  
  scopeDemo();
  

//Q2
// console.log("Q2");
// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// function getSecondFruit(fruits) {
//   return fruits[1];
// }
// console.log(getSecondFruit(fruits));

// //Q3
// console.log("Q3");
// function modifyArray(arr) {
//   console.log("Original Array:", arr);
//   arr.push("New Element");
//   console.log("After Push:", arr);
//   arr.pop();
//   console.log("After Pop:", arr);
//   return arr;
// }

// const sampleArray = [1, 2, 3];
// modifyArray(sampleArray);

// //Q4
// console.log("Q4");
// function squareNumbers(arr) {
//   return arr.map((num) => num * num);
// }
// var arr = [1, 2, 3, 4, 5];
// console.log(squareNumbers(arr));

// //Q5
// console.log("Q5");
// function filterOddNumbers(arr) {
//   return arr.filter((num) => num % 2 !== 0);
// }
// var arr = [1, 2, 3, 4, 5];
// console.log(filterOddNumbers(arr));

// //Q6
// console.log("Q6");
// const person = { name: "PRATIK", age: 21, occupation: "Developer" };
// function greetPerson() {
//   return `Hello, my name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`;
// }
// console.log(greetPerson());

// //Q7
// console.log("Q7");
// function calculateArea(width, height) {
//   return width * height;
// }
// console.log(calculateArea(15, 16));

// //Q8
// console.log("Q8");
// function getObjectKeys(obj) {
//   return Object.keys(obj);
// }

// const exampleObject = {
//   name: "PRATIK",
//   age: 25,
//   occupation: "Developer",
//   country: "USA",
// };

// const keys = getObjectKeys(exampleObject);
// console.log("Object:", exampleObject);
// console.log("Keys:", keys);

// //Q9
// console.log("Q9");
// function mergeObjects(obj1, obj2) {
//   return Object.assign({}, obj1, obj2);
// }

// const object1 = { name: "Alice", age: 25 };
// const object2 = { occupation: "Developer", country: "USA" };

// const mergedObject = mergeObjects(object1, object2);
// console.log("Object 1:", object1);
// console.log("Object 2:", object2);
// console.log("Merged Object:", mergedObject);

// //Q10
// console.log("Q10");
// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// const numbersArray = [1, 2, 3, 4, 5];

// const sum = sumArray(numbersArray);
// console.log("Array:", numbersArray);
// console.log("Sum of Array:", sum);