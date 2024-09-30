// Arrow function to get the current date and time in the format YYYY-MM-DD HH:MM:SS
const getCurrentDateTime = () => {
    const now = new Date();
  
    // Extract year, month, and day
    const year = now.getFullYear();
    const month = (now.getMonth() + 1 < 10 ? '0' : '') + (now.getMonth() + 1); // Add 0 if month < 10
    const day = (now.getDate() < 10 ? '0' : '') + now.getDate(); // Add 0 if day < 10
  
    // Extract hours, minutes, and seconds
    const hours = (now.getHours() < 10 ? '0' : '') + now.getHours(); // If < 10 add 0 before 7am --> 07am, If > 10 add empty string 11am-->11am
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(); 
    const seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds(); 
  
    // Format date and time as YYYY-MM-DD HH:MM:SS
    return `The current day is ${year}-${month}-${day} and the current hour is ${hours}:${minutes}:${seconds}`;
  };
  
console.log(getCurrentDateTime());
  