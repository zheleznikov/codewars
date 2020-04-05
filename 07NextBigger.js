// https://www.codewars.com/kata/55983863da40caa2c900004e

  function nextBigger(n) {
    const ArrFromN = n.toString().split('').map(n => +n); // создаем массив цифр из исходного числа
    const max = +n.toString().split('').sort((a, b) => b - a).join(''); // собираем максимальное число из этого массива цифр

    for (let current = n + 1; current <= max; current++) {  // проходимся циклом от следующего за исходным числом до максимального числа
      const arrayFromCurrent = current.toString().split('').map(n => +n); // из каждого числа делаем массив цифр
      if (arrayFromCurrent.every(n => ArrFromN.includes(n))) { // если все цифры из текущего массива есть в массиве ArrFromN...
        const maxNum = +arrayFromCurrent.sort((a, b) => b - a).join(''); // ... то собираем из них максимально возможное число
        if (maxNum === max) { // если оно совпадает с изначальным максимальным числом, то возвращаем его 
          return current;
        }
      }
    }
    return -1; // в противном случае возвращаем -1
  }

  console.log(nextBigger(12), 21)
  console.log(nextBigger(513), 531)
  console.log(nextBigger(2017), 2071)
  console.log(nextBigger(414), 441)
  console.log(nextBigger(144), 414)
