    // C помощью рекурсии надо равномерно разделить землю на одинаковые квадратные участки. Участки должно быть настолько большими насколько это возможно
    // a и b - это длина и ширина "огорода"
 
    function square(a,b) {
        // базовый случай
      if (a > b && a % b === 0) {
          return `${b}*${b}`;
      } 
      if (a < b && b % a === 0) {
        return `${a}*${a}`;
      }

    // рекурсивный случай
     let c;

      if (a > b) {
          c = a % b;
          return square (c,b)
      } else if (b > a) {
          c = b % a;
          return square (c,a)
      }

  }

  console.log(square(1680,640))