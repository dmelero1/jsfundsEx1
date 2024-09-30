// The same arrow function used before
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate 10 different lottery numbers of 5 digits each
const generateLotteryNumbers = () => {
  const lotteryNumbers = [];

  while (lotteryNumbers.length < 10) {
    let randomNumber = generateRandomNumber(10000, 99999);

    if (lotteryNumbers.indexOf(randomNumber) === -1) {
      lotteryNumbers.push(randomNumber); 
    }
  }

  return lotteryNumbers;
};

console.log("10 different lottery numbers:");
console.log(generateLotteryNumbers());