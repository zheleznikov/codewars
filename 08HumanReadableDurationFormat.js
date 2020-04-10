  // https://www.codewars.com/kata/52742f58faf5485cae000b9a/
  
  function formatDuration(seconds) {
    console.log(seconds);
    if (seconds === 0) {
      return 'now'
    }

    function getSec(n, unit) {
      let out = seconds % n;
      if (out === 1) {
        return `${out} ${unit}`
      } else if (out === 0) {
        return undefined;
      } else {
        return `${out} ${unit}s`
      }
    }

    function getAnotherUnits(n, unit) {
      let nTransform = Math.floor(seconds / n);
      nTransform = nTransform % n;
      console.log(nTransform)

      if (n === 3600) {
        nTransform = nTransform % 24;
      }

      if (n === 86400) {
        nTransform = nTransform % 365;
      }

      if (nTransform === 1) {
        return `${nTransform} ${unit}`
      } else if (nTransform <= 0) {
        return undefined;
      } else {
        return `${nTransform} ${unit}s`
      }
    }

    const time = {};
    time.years = getAnotherUnits(31536000, 'year');
    time.days = getAnotherUnits(86400, 'day');
    time.hours = getAnotherUnits(3600, 'hour');
    time.minutes = getAnotherUnits(60, 'minute');
    time.seconds = getSec(60, 'second');
    


    const arr = [];
    Object.keys(time).forEach(key => {
      if (time[key] !== undefined) {
        arr.push(time[key]);
      }
    });

    const retString = arr.join(' , ').split(' ');

    for (let i = retString.length - 1; i > 0; i--) {
      if (retString[i] === ',') {
        retString[i] = 'and';
        break;
      }
    }

    const reg = /\s,/g;
    return retString.join(' ').replace(reg, ',');
  }
