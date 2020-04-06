 // https://www.codewars.com/kata/529bf0e9bdf7657179000008
 const validSolution = (board) => {
    // проверяем все горизонтальные линии 
    const horizontal = board.every(line => line.reduce((a, b) => a + b) === 45);

    // проверяем вертикальные линии
    const verticalArr = [];
    for (let n = 0; n < 9; n++) {
      const isVerticalValid = (board.map(line => line[n]).reduce((a, b) => a + b) === 45);
      if (isVerticalValid) {
        verticalArr.push(isVerticalValid);
      }
    }
    const vertical = (verticalArr.length === 9);

    // проверяем отдельные квадраты 3*3 
    const squares = [];

    const splicing = () => {
      const third = board.splice(0, 3);
      const localSplicing = () => third.map(line => line.splice(0, 3).reduce((a, b) => a + b)).reduce((a, b) => a + b) === 45;
      squares.push(localSplicing());
      squares.push(localSplicing());
      squares.push(localSplicing());
    }

    splicing();
    splicing();
    splicing();
    const square = squares.every(s => s === true);

    return horizontal && vertical && square;
  }
  
    console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]));

  console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]));
