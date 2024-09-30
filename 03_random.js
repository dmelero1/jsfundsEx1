//Arrow function to generate a number inside
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 10 random numbers between 0 - 99999
console.log("10 random numbers between 0 and 99999:");
for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber(0, 99999));
}

// 10 random numbers between 10 - 40
console.log("\n10 random numbers between 10 and 40:");
for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber(10, 40));
}

// 10 random numbers between 18 - 90
console.log("\n10 random numbers between 18 and 90:");
for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber(18, 90));
}

// 10 random numbers between 1980 - 2020
console.log("\n10 random numbers between 1980 and 2020:");
for (let i = 0; i < 10; i++) {
  console.log(generateRandomNumber(1980, 2020));
}
 