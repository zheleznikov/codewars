  function validBraces(braces) {
    const bracesObj = {
      ')': '(',
      ']': '[',
      '}': '{'
    }
    const bracesClose = Object.keys(bracesObj);
    const bracesOpen = Object.values(bracesObj);

    return braces.split('').reduce((stack, brace) => {
      bracesClose.includes(brace) && stack[stack.length - 1] === bracesObj[brace] ? stack.pop() : stack.push(brace)
      return stack
    }, []).length === 0;
  }

  console.log(validBraces("[]"), true);
    console.log(validBraces( "[(])" ), false);
    console.log(validBraces( "(){}[]" ), true);
    console.log(validBraces( "([{}])" ), true);
    console.log(validBraces( "[(])" ), false);
    console.log(validBraces( "[({})](]" ), false);
