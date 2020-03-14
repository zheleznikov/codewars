// https://www.codewars.com/kata/54b80308488cb6cd31000161

    function groupCheck(s) {
        const brackets = s.split('');
        const openArr = '({['.split('');
        let openCount = 0;
        let closeCount = 0;

        brackets.forEach(bracket => {
            if (openArr.includes(bracket)) {
                openCount++
            } else {
                closeCount++
            }
        })

        if (openCount !== closeCount) {
            return false
        }

        let stack = [];

        for (let bracket of brackets) {
            let l = stack.length - 1;
            if (openArr.includes(bracket)) {
                stack.push(bracket)
            } else if ((stack[l] === '[' && bracket === ']') || (stack[l] === '(' && bracket === ')') || (stack[l] === '{' && bracket === '}')) {
                stack.pop();
            }
        }
        return stack.length === 0;

    }

 console.log(groupCheck("[{}{}())"));
