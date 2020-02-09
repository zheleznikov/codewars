    /* 
Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. Список имеет следующий формат:
[  
  [<explorer1>, <toponym1>, <toponym2>, ...],  
  [<explorer2>, <toponym2>, <toponym3>, ...],  
  [<explorer3>, <toponym4>, <toponym1>, ...],  
  ...  
]
Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных исследователи.

Формат ввода
[  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]
Формат вывода
[  
    ["Everest", "Hillary", "Mallory"],  
    ["South Pole", "Hillary", "Mawson"],  
    ["Mont Blanc", "Mallory"],  
    ["Pillar Rock", "Mallory"],  
    ["New Hebrides", "Mawson"]  
]
    */
    
    function ex(explorers) {
        let arrPlace = [];

        // создаю массив с названиями мест

        for (let i = 0; i < explorers.length; i++) {
            for (let j = 0; j < explorers[i].length; j++) {
                if (j !== 0 && !arrPlace.includes(explorers[i][j])) {
                    arrPlace.push(explorers[i][j])
                }
            }
        }

        // преобразую массив в матрицу

        arrPlace = arrPlace.map(elem => [elem])

        // ищу соответсвие. Если в подмассиве исходного массива есть название места из массива с местами,
        // то добавляю первый элемент массива в новый массив

        for (let k = 0; k < arrPlace.length; k++) {
            for (let i = 0; i < explorers.length; i++) {
                for (let j = 0; j < explorers[i].length; j++) {
                    if (explorers[i][j].includes(arrPlace[k][0])) {
                        arrPlace[k].push(explorers[i][0])
                    }
                }
            }
        }
        return arrPlace;
    }

    console.log(ex([
        ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],
        ["Mawson", "South Pole", "New Hebrides"],
        ["Hillary", "Everest", "South Pole"]
    ]))
