//JavaScript: Условия внутри тела цикла
const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i] === char.toUpperCase() || str[i] === char.toLowerCase()) {
        
        count = count + 1;
      } 
      
      i = i + 1;
    }
  
    return count;
  };
  // END