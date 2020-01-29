/* 
https://www.codewars.com/kata/51e0007c1f9378fa810002a9

Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:
i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

решение - https://www.youtube.com/watch?v=-xXBKf4_W_8
*/


function parse(data) {
  let fish = 0;
  let sea = [];
  
  for (let command of data) {
    if (command === 'i') {
      fish++;
    } else if (command === 'd') {
      fish--;
    } else if (command === 's') {
      fish = fish*fish;
    } else if (command === 'o') {
      sea.push(fish);
    }
  }
  
  return sea
  
}
