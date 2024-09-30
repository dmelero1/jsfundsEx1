function diffDays(date1, date2) {
    // Convert the date strings to Date objects
    const firstDate = new Date(date1);
    const lastDate = new Date(date2);
  
    const timeDifference = lastDate - firstDate;
  
    const daysDifference = timeDifference / (24 * 60 * 60 * 1000);
  
    return Math.abs(Math.round(daysDifference));
  }
  
  const date1 = "2024-01-01";
  const date2 = "2024-09-30";
  console.log(`Days between ${date1} and ${date2}: ${diffDays(date1, date2)} days`);
  