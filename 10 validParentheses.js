//https://www.codewars.com/kata/52774a314c2333f0a7000688  
// задача со скобками
  
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

  console.log(validParentheses("()"), true);
  console.log(validParentheses(")(()))"), false);
  console.log(validParentheses("("), false);
  console.log(validParentheses("(())((()())())"), true)
