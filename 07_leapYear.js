const isLeapYear = (year) => {
    // Is leap year if:
    // 1. It is divisible by 4.
    // 2. It is not divisible by 100, unless it is also divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }; 
  
  console.log(`Is 1723 a leap year? ${isLeapYear(1723)}`);
  console.log(`Is 1988 a leap year? ${isLeapYear(1988)}`);
  console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`);
  