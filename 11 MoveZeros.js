// https://www.codewars.com/kata/52597aa56021e91c93000cb0
  const moveZeros = function(arr) {
    const zeroArr = arr.filter(n => n === 0);
    const freeZeroArr = arr.filter(n => n !== 0);
    return freeZeroArr.concat(zeroArr);
  }

  moveZeros = (arr) => arr.filter(n => n !== 0).concat(arr.filter(n => n === 0))

  console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
  console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
  console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
