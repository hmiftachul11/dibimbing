const trimPhoneNumberWithoutReplace = (phone) => {
    let trimmedNumber = '';
  
    for (let i = 0; i < phone.length; i++) {
      if (phone[i] !== '-') {
        trimmedNumber += phone[i];
      }
    }
  
    return trimmedNumber;
  };
  
  // Contoh penggunaan
  const phoneNumber = '000-00000-00000';
  const trimmedNumberWithoutReplace = trimPhoneNumberWithoutReplace(phoneNumber);
  console.log("Output Tanpa Replace:", trimmedNumberWithoutReplace);
  