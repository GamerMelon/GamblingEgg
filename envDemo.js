/*
requires a file named .env in the root folder

used to configure the application on boot

takes whatever is in the file as a basis for some set amount of values and can be used
by anything that calls the process.env.[variable]

good for security as well as development (no hard coded values)
*/



require('dotenv').config();



console.log("egg")
console.log(process.env.ONE + " is One.")