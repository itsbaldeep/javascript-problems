// This is not completely JSON
// But we can parse JSON to this format

// Let an array data of objects with random information
const data = [
  { name: "John", age: 30, phone: 111222333 },
  { name: "Jane", age: 24, phone: 999888777 },
  { name: "Emily", age: 26, phone: 555666777 },
  { name: "Will", age: 20, phone: 777888999 },
  { name: "Ashley", age: 22, phone: 222333444 }
];

// Make three getter functions for each field
// They have parameter representing respective required field
// Filter the data array where value of the field matches argument
// If not found, then return an object with value as an error message
getName = v => data.filter(r => r.name == v)[0] || { name: "Not Found" };
getAge = v => data.filter(r => r.age == v)[0] || { age: "Not Found" };
getContact = v => data.filter(r => r.phone == v)[0] || { phone: "Not Found" };

// How to find the Age of John?

// Let an object john where the name is equal to John
const john = getName("John");
// Then we log the age property of john object
console.log(john.age);

// How to find the name of the owner of 222333444?

// Let an object person where the number is equal to 222333444
const person = getContact("222333444");
// Then we log the name property of person object
console.log(person.name);

// Print the details of Emily and Will.

// Let an array of objects where names are equal to desired names
const people = [getName("Emily"), getName("Will")];
// For each person in the people array
// Log the name, age and phone number of the person
people.forEach(p =>
  console.log(
    `${p.name} is ${p.age} years old and their contact number is ${p.phone}`
  )
);

// Try to find the Age of Mark which is not existent in data
const mark = getAge("Mark");
console.log(mark.age);

// It logs an error message "Not Found"
