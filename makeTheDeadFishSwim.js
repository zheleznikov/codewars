/* 
https://www.codewars.com/kata/51e0007c1f9378fa810002a9

Дано первоначальное значение, равное 0.
На вход поступает строка, каждый символ которой предлагает либо увеличить первоначальное значение на 1, либо уменьшить на 1,
либо возвести в квадрат либо передать в массив.
Нужно вернуть массив со значениями.

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
