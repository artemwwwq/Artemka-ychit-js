// JavaScript: Агрегация данных (Строки)
/* eslint operator-assignment: 0 */

// BEGIN (write your solution here)
const joinNumbersFromRange = (x,y) => {
    let result = '';
    let i = x;
    while(i <= y) {
      result = `${result}${i}`;
      i = i + 1;
    }
    return result;
  }
  // END
  