// See: https://bootcamp.rocketacademy.co/5-full-stack-applications/5.ice-in-class-exercises/5.ice.1-full-stack-modal#fake-data
// $ npm install @faker-js/faker -D

const { faker } = require('@faker-js/faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);