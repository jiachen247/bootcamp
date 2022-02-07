// Lets check if an email address is valid
const emailRegex = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+.[a-zA-Z]+$/;
const email = "jiachen@gmail.com";

if (emailRegex.test(email)) {
  console.log("email address is valid");
} else {
  console.log("email address is invalid");
}