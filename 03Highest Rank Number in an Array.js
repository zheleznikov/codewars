// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

// 1 вариант
  function highestRank(arr) {
    const obj = arr.reduce((prevValue, num) => {
      if (!prevValue[num]) {
        prevValue[num] = 1;
      } else {
        prevValue[num] += 1;
      }
      return prevValue
    }, {});
    
    const rank = Math.max.apply(null, Object.values(obj));
    const keys = Object.keys(obj);
    const array = keys.filter(key => obj[key] === rank);
    return Math.max.apply(null, array);
  }
  
  
  // 
  // цикл для получения ключа и значения в объектах
  //const keys = Object.keys(obj);
  // for (let key of keys) {
  //   console.log('ключ ' + key + ' значение ' + obj[key]);
  // }

  console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]))
