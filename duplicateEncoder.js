function duplicateEncode(word){
    /* 
    1. преобзоавать строку в массив , сделать одинаковый регистр букв
    2. воспользоваться методом indexOf и lastIndexOf
    3. Если результат работы методов равен между собой - грустная скобочка
      Если нет - веселая
    4. сформирую массив из скобочек
    5. объединить в строку и вернуть
    */
    
    word = word.toLowerCase().split('');
    
    let hooks = word.map(elem => {
      if (word.indexOf(elem) === word.lastIndexOf(elem)) {
        return '('
      } else {
        return ')'
      }
      
    }).join('');
    return hooks;
}
