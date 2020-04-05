  // сортировка выбором Грокаем алгоритмы. стр 57

  // функция, которая ищет минимаальнй элемент в массиве
  function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  }

  function selectionSort(arr) { 
    const sortArr = [];
    while (arr.length > 0) { // до тех пор пока в массиве не останется элементов:
      const min = findMin(arr);  // находим миниальный элемент в массиве
      sortArr.push(min); // добавляем его в новый массив
      arr.splice(arr.indexOf(min), 1); // вырезаем этот элемент из текущего массива
    }

    return sortArr

  }



  const array = [5, 4, 8, 97, 10, 2, 6];
  console.log(selectionSort(array));
