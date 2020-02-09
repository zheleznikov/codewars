 /* 
 Формат ввода
 const data = [  
    {  
        geometry: [10, 20],  
        text: ’James’  
    },  
    {  
        geometry: [20, 40],  
        text: ’Bond’  
    },  
    {  
        geometry: [5, 40],  
        text: ’Bond’  
    }  
];  
const dictionary = [’James’, ’Bond’];
Формат вывода
Bond James Bond

В файле
https://gist.github.com/alt-j/0f30495b549cddcab8b95ae76bcd9b49#file-task-js
описан метод, который принимает на вход два аргумента - data и dictionary.
В переменной data передается массив объектов вида:
{  
    geometry: [number, number];  
    text: string;  
}
В переменной dictionary передается массив строк - слова, которые мы умеем расшифровывать.
dictionary: string[];

Чтобы получить секретное сообщение, требуется отсортировать все объекты из массива data по первой координате из поля geometry
по возрастанию, а затем собрать в строку все поля text из отсортированного массива.
К сожалению, сообщение закодировано на иностранном языке,а переводчик знает только слова, заданные в переменной dictionary.

Поэтому если в поле text встречается слово, которого нет в массиве dictionary, сообщение невозможно расшифровать.
Программа должна вернуть полученное сообщение или строку "Unreadable message"(в случае, если сообщение содержит слова, которых нет в словаре).
 */
 
 function a(inputData, inputDictionary) {
        if (!inputData || !inputDictionary) {
            return "Unreadable message";
        }

        inputData = inputData.filter(elem => elem !== undefined);
        inputData = inputData.filter(elem => elem.geometry !== undefined);
        inputData = inputData.filter(elem => elem.geometry.length > 0);

        for (let i = 0; i < inputData.length; i++) {
            if (!inputDictionary.includes(inputData[i].text)) {
                return "Unreadable message";
            }
        }

        inputData.sort((elem1, elem2) => elem1.geometry[0] - elem2.geometry[0]);
        return inputData.map(item => item.text).join(' ');
    }

    const data = [{
        geometry: [10, 20],
        text: 'James'
    }, {
        geometry: [20, 40],
        text: 'Bond'
    }, {
        geometry: [5, 40],
        text: 'Michael'
    }];

    const dictionary = ['James', 'Bond', 'Michael'];
    const dic2 = ['Alice', 'Bond']

    console.log(a(data, dictionary));
    console.log(a(data, dic2));
    console.log(a([], dic2));
    console.log(a(data, []));
