function calculateAge(birthDate) {
    const today = new Date();
    
    const birthDateObj = new Date(birthDate);
  
    let age = today.getFullYear() - birthDateObj.getFullYear();
    
    // Adjust age if the birthdate hasn't occurred yet this year
    const hasHadBirthdayThisYear = 
      today.getMonth() > birthDateObj.getMonth() || (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());
  
    if (!hasHadBirthdayThisYear) {
      age--;
    }
  
    return age;
  }
  
  const birthDate = "2005-03-11";
  console.log(`This person has ${calculateAge(birthDate)} years old.`);
  