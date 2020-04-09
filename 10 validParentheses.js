//https://www.codewars.com/kata/52774a314c2333f0a7000688  
// задача со скобками

  // решение через счетчик и reduce
  function validParentheses(parens) {
    return parens.split('').reduce((counter, bracket) => {
      if (bracket === '(') {
        counter++
      } else if (bracket === ')') { 
       counter--
      } 
      if (counter < 0) {
        return false
      }
      return counter
    }, 0) === 0; 
  }

  // решение через reduce и стек
  function validParentheses(parens) {
    return parens.split('').reduce((stack, bracket) => {
      if (bracket === '(') { // если скобка - открывающая, то кладем ее в стек
        stack.push(bracket);
      } else if (bracket === ')' && stack[stack.length - 1] === '(') { // если скобка - закрывающая, а последняя скобка в стеке открывающая
        stack.pop(); // удаляем поселнюю строчку из стека
      } else {  // else if (bracket === ')') , то просто кладем скобку в массив
        stack.push(bracket);
      }
      return stack
    }, []).length === 0; // возвращаем результат сравнения с 0
  }


// решение через счетчик
  function validParentheses(parens) {
   const brackets = parens.split('');
   let valid = 0;
      for (let i = 0; i < brackets.length; i++) {
     if (brackets[i] === '(') {
       valid++
     } else if (brackets[i] === ')') {
       valid--
     }

     if (valid < 0) {
       return false
     }
   }

   return valid === 0
  }

  // решение через стэк и цикл for
  function validParentheses(parens) {
    const brackets = parens.split('');
    const stack = [];
    for (let i = 0; i < brackets.length; i++) {
      if (brackets[i] === '(') {
        stack.push(brackets[i])
      } else if (brackets[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(brackets[i])
      }
    }
    return stack.length === 0
  }

  console.log(validParentheses("()"), true);
  console.log(validParentheses(")(()))"), false);
  console.log(validParentheses("("), false);
  console.log(validParentheses("(())((()())())"), true)
