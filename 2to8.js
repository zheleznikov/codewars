  function binToOct(n) {
    let sumArr = [];

    for (let i = n.length - 1; i >= 0; i = i - 3) {
      if (typeof n[i - 2] === 'undefined' && typeof n[i - 1] === 'undefined') {
        sumArr.unshift(n[i]);
      } else if (typeof n[i - 2] === 'undefined') {
        sumArr.unshift(n[i - 1] + n[i]);
      } else {
        sumArr.unshift(n[i - 2] + n[i - 1] + n[i]);
      }
    }

    function to8(triad) {
      let sum = 0;
      let power = 0;
      for (let i = triad.length - 1; i >= 0; i--) {
        sum +=  +triad[i] * (2 ** power);
        power++
      }
      return sum
    }


    return sumArr.map(elem => elem = to8(elem)).join('');


  }

  function checkBinarytoOct(n) {
    console.log(binToOct(n))
  }

  checkBinarytoOct('1101001') 

