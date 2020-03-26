const sayHello = require("./util").sayHello;
const sayHi = require("./util").saySomething;

const cows = require("cows");

// console.log(sayHello());
// console.log(sayHi());

console.log(cows()[24]);

/**
 *
 * Fields required for CR Portal
 */

var json = {
  name: "Ishan",
  registration_number: "RA1711003010009",
  contact_number: 9685159058,
  email: "me@ishanchhabra.com"
};

var jsons = [
  {
    name: "Ishan",
    registration_number: "RA1711003010009",
    contact_number: 9685159058,
    email: "me@ishanchhabra.com"
  },
  {
    name: "Jane",
    registration_number: "RA1711003010009",
    contact_number: 9685159058,
    email: "me@ishanchhabra.com"
  },
  {
    name: "John",
    registration_number: "RA1711003010009",
    contact_number: 9685159058,
    email: "me@ishanchhabra.com"
  }
];

/**
 *
 *
 *
 */

// jsons.forEach(json => {
//   console.log(json.name);
// });
