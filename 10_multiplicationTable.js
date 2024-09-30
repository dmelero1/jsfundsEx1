function multiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
}
  
  const numberToPrint = 5; // We select the number we want 1-10
  multiplicationTable(numberToPrint);
