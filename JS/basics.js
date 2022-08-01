var x = 10;
console.log(x);

//ctrl+alt+n

// ecma script/es6
// let & const

for (let i = 0; i < 5; i++) {
  console.log(i); //0, 1, 2, 3, 4
}
console.log(i); //ReferenceError: i is not defined

for (var i = 0; i < 5; i++) {
  console.log(i); //0...4
}
console.log(i); // 5

const y = 10;
console.log(y);
//y = 100;
//console.log(y); //TypeError: Assignment to constant variable.

//Data types
console.log(typeof 10); //number
console.log(typeof 10.45); // number
console.log(typeof "Hello"); //string
console.log(typeof true); // boolean
console.log(typeof null); //object
console.log();
// NaN

// object - {}, Array - []
const person = {
  name: "Ram",
  age: 30,
  contactNos: [9999911111, 9999922222],
  address: [
    {
      city: "Chennai",
      state: "Tamilnadu",
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
    },
    {
      city: "Hyderabad",
      state: "Telangana",
    },
  ],
};

// Read person object values
console.log(typeof person); //object
console.log(person.name); // Ram
console.log(person["name"]); // Ram
console.log(person.age); // 30
console.log(person.contactNos); // list of contact numbers
console.log(person.contactNos[0]); //9999911111
console.log(person.contactNos[1]); //9999922222
console.log(person.address); //list of addresses
console.log(person.address[0]); //{ city: 'Chennai', state: 'Tamilnadu' }
console.log(person["name"]);

// update person object
person.name = "Sam";
person.age = 31;
console.log(person);

// update existing number
person.contactNos[1] = 9999933333;
console.log(person.contactNos);

// Add new number
person.contactNos.push(9999944444);
person.contactNos.push(9999955555);
console.log(person.contactNos);

// remove last number
person.contactNos.pop();
console.log(person.contactNos);

//remove specific number from array
person.contactNos.splice(1, 1);
console.log(person.contactNos);

// update address
console.log("Before update: ");
console.log(person.address);

person.address[0].city = "Pune";
person.address[0].state = "Maharashtra";

console.log("After update: ");
console.log(person.address);

// Arrays
const colors = ["white", "red", "orange"];
/*
 read one element old array - add in new array
 return new array
*/

// Spread operator(...) - copy one array elements into another array
const newColors = [...colors];
console.log(colors);
console.log(newColors);

const newColors1 = ["pink", "black", ...colors];
const newColors2 = [...colors, "pink", "black"];
const newColors3 = ["yellow", "green", ...colors, "pink", "black"];

console.log(newColors1);
console.log(newColors2);
console.log(newColors3);

// functions, arrow functions, object destructuring, array destructuring, class, map and filter
//function functionName() {}
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(10)); // true
console.log(isEven(9)); //false

function greet() {
  return "Hello World!";
}

console.log(greet()); // Hello World!

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(10, 20)); // 30

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(10, 20, 30); //60

// Rest parameters(...)
function add(num1, num2, ...nums) {
  // 10, 20, 30, 40, 50
  let sum = num1 + num2;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log();
console.log(add(10, 20)); //30
console.log(add(10, 20, 30)); //60
console.log(add(10, 20, 30, 40)); //100
console.log(add(10, 20, 30, 40, 50)); //150
console.log(add(10, 20, 30, 40, 50, 60)); //210

// Arrow functions

let isEvn = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEvn(1004)); // true
let isEvn2 = (num) => (num % 2 == 0 ? true : false);
console.log(isEvn2(30002)); // true

let add3 = (num1, num2, num3) => num1 + num2 + num3;
console.log(add3(10, 15, 20)); //45

let greet2 = () => "Hello World!";
console.log(greet2()); // Hello World!

// Optional function parameters
function sub(num1, num2 = 10) {
  return num1 - num2;
}

console.log(sub(10)); //0
console.log(sub(100, 50)); //50

// Object Destructuring

const student = {
  rollNo: 101,
  name: "Sam",
  age: 12,
  address: {
    city: "Chennai",
    state: "Tamilnadu",
  },
  contactNos: [9999911111, 9999922222, 9999933333],
};

student.rollNo;
student.name;
student.age;
student.address.city;
student.address.state;
console.log();
const { rollNo, name, age } = student;
console.log(rollNo);
console.log(name);
console.log(age);

const { city, state } = student.address;
console.log(city);
console.log(state);

// Array Destructuring
student.contactNos[0];
student.contactNos[1];
student.contactNos[2];

const [cNo1, cNo2, cNo3] = student.contactNos;
console.log(cNo1);
console.log(cNo2);
console.log(cNo3);

// class
class Employee {
  //constructor
  constructor(empId, empName) {
    this.empId = empId;
    this.empName = empName;
  }
  getEmpId() {
    return this.empId;
  }
  getEmpName() {
    return this.empName;
  }

  setEmpId(empId) {
    this.empId = empId;
  }
  setEmpName(empName) {
    this.empName = empName;
  }
}
// Object creation
const emp1 = new Employee(2001, "Ram");
const emp2 = new Employee(2002, "Sam");

// Read
console.log(emp1.empId);
console.log(emp1.empName);
console.log(emp2.getEmpId());
console.log(emp2.getEmpName());

// update
emp1.empName = "Ram Kumar";
emp2.setEmpName("Sam Kumar");

console.log();
console.log(emp1.getEmpName());
console.log(emp2.getEmpName());

// map() - apply same function on all elements present in array
const numArr = [10, 15, 20, 25, 30];
function sqr(numArr) {
  // create new array
  // read one element from old array, square and result to new Array
}

const sqArr = numArr.map((num) => num * num);
console.log(sqArr);

const cubeArr = numArr.map((num) => num * num * num);
console.log(cubeArr);

// function sq(num) {
//   return num * num;
// }
// (num) => num * num;

// filter() - search based on condition

const newArr = numArr.filter((num) => num <= 15);
console.log(newArr);

// function search(numArr, num) {
//   let newArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] > num) {
//       newArr.push(numArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(search(numArr, 15)); // 20, 25, 30