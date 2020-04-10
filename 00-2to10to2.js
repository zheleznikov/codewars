    //перевод из 2 в 10
    function binaryToDecimal(a) {
        if (typeof a === 'number') {
            a = String(a);
        }
        a = a.split('');

        let sum = 0;
        let n = 0;

        for (let i = a.length - 1; i >= 0; i--) {
            a[i] = +(a[i]) * (2 ** n);
            sum += a[i];
            n++;
        }
        return sum
    }



    //перевод из 2 в 10
    function checkBinaryToDecimal(a) {
        console.log(binaryToDecimal(a))
    }

    function decimalToBinary(a) {
        let arr = [];
        while (a > 0) {
            arr.unshift(a % 2);
            if (a % 2 !== 0) {
                a = a / 2 - 0.5
            } else {
                a = a / 2;
            }
        }
        return arr.join('');
    }



    // проверка для из 10 в 2
    function checkdecimalToBinary(a) {
        console.log(decimalToBinary(a))
    }

    // проверка для из 2 в 10
    function checkBinaryToDecimal(a) {
        console.log(binaryToDecimal(a))
    }

    checkBinaryToDecimal(110110);
    checkdecimalToBinary(54);
