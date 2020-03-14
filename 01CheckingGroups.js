// https://www.codewars.com/kata/54b80308488cb6cd31000161

    function groupCheck(s) {
        let openCount = 0;
        let closeCount = 0;
        let stack = [];

        s.split('').forEach(bracket => {
            let l = stack.length - 1;

            if (['(', '{', '['].includes(bracket)) {
                stack.push(bracket);
                openCount++; // неидеальное условие ниже
            } else if ((stack[l] === '[' && bracket === ']') || (stack[l] === '(' && bracket === ')') || (stack[l] === '{' && bracket === '}')) {
                stack.pop();
                closeCount++;
            } else {
                closeCount++; // как обойтись без счетчиков
            }
        })

        
        // неидеальный return
        if (openCount !== closeCount) {
            return false
        }
        
        return stack.length === 0;

    }

    console.log(groupCheck("[()]]"));
