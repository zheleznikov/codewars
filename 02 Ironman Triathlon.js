    // https://www.codewars.com/kata/57d001b405c186ccb6000304
    function iTri(s) {
        let distanceToGo = `${(140.6 - s).toFixed(2)} to go!`;
        const start = 'Starting Line... Good Luck!';
        const finish = "You're done! Stop running!";
        const nearly = 'Nearly there!';

        const obj = {
            'key': distanceToGo
        };
        const Swim = 'key';


        if (s === 0) {
            return start
        } else if (s > 140.6) {
            return finish
        } else if (s < 2.4) {
            obj['Swim'] = distanceToGo;
        } else if (s >= 2.4 && s < 114.4) {
            obj['Bike'] = distanceToGo;
        } else if (s >= 114.4 && s < 130.6) {
            obj['Run'] = distanceToGo;
        } else if (s >= 130.6 && s < 140.6) {
            obj['Run'] = nearly;
        }
        return obj
    }

// мне бы хотелось чтобы каждый раз можно было бы изменять название ключа в зависиомсти от ситуации


    console.log(iTri(1));
    console.log(iTri(103));
    console.log(iTri(120));
    console.log(iTri(135));
