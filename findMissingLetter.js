/* 
https://www.codewars.com/kata/5839edaa6754d6fec10000a2

Буквы идут в алфавитном порядке. Но в какой-то момент пропускается одна буква. 
Нужно вернуть эту букву
*/

function findMissingLetter(array) {
  let arr = array.map( elem => elem.charCodeAt(0));
  
  for (let i = 0, j = 1; j < arr.length; i ++, j++) {
      if (arr[j] !== arr[i] + 1) {
        return String.fromCharCode(arr[j] - 1)
      }
  }
}
