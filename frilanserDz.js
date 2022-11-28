
  
  let i = 1;
  while (num <= 5) {
      console.log(num);
      num++;
  };
  
  do {
      console.log(num++)
  } while (num <= 5);
  
  
  for (let i = 1; i <=5; i++) {
      console.log(i);
  }
  
  
  let num = 8;
  while (num) {
      //Последний результат 0, верно?
      console.log(num);
      num--;
  }
  
  
  for (let num = 0; num < 2; num++) {
      for (let size = 0; size < 3; size++) {
          if (size == 2) break;
          console.log(size);
          
      }
  }
  
  firstFor: for (let num = 0; num < 2; num++) {
      for (let size = 0; size < 3; size++) {
          if (size == 1) {
              break firstFor;
          }
          console.log(size);
      }
  };