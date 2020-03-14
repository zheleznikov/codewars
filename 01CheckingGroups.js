// https://www.codewars.com/kata/54b80308488cb6cd31000161

    function groupCheck(s) {
        let stack = [];
        for (let bracket of s) {
            let l = stack.length - 1;
            if (['(', '{', '['].includes(bracket)) {
                stack.push(bracket); //неидеальная конструкция
            } else if ((stack[l] === '[' && bracket === ']') || (stack[l] === '(' && bracket === ')') || (stack[l] === '{' && bracket === '}')) {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        }
        return stack.length === 0;
    }

// другое решение, которое можно разобрать
 function groupCheck(s) {
   var brackets = {"(": ")", "{": "}", "[": "]"}
   var stack = []
   
   for (var c of s) {
     if (c in brackets) {
       stack.push(c)
     } else if (brackets[stack[stack.length - 1]] == c) {
       stack.pop()
     } else {
       return false
     }
   }
   return stack.length == 0
 }




    console.log(groupCheck("[()]]"));
