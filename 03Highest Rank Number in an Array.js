// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

  function highestRank(arr) {
    const quantity = arr.reduce((obj, n) =>{
      if (!obj[n]) {
        obj[n] = 1;
      } else {
        obj[n] += 1;
      }
      return obj
    },{})
  
    const maxRepeat = Math.max.apply(null, Object.values(quantity));
    const keys = Object.keys(quantity);
    const oftRepeated = keys.filter(key => quantity[key] === maxRepeat);
    return Math.max.apply(0, oftRepeated);

  }
  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
  
  
  // 
  // цикл для получения ключа и значения в объектах
  //const keys = Object.keys(obj);
  // for (let key of keys) {
  //   console.log('ключ ' + key + ' значение ' + obj[key]);
  // }

  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
