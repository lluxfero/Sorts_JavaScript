function BubbleSortImp(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
		for (let i = 0; i < j; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}
		}
	}
	return arr;
}

// сравнивает два элемента и возвращает true, если первый больше второго
const compare_BubFunc = (a, b) => a > b;
// меняет местами два элемента в массиве по индексам
const swap_BubFunc = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
// проходит по массиву один раз и меняет местами соседние элементы, если они не отсортированы
const bubble_BubFunc = (arr, n) => {
	// массив пустой или состоит из одного элемента, уже отсортирован
	if (n <= 1) return arr;
		// Иначе проходим по массиву от начала до конца
		return arr.slice(0, n - 1).reduce((acc, cur, i) => {
	// текущий элемент больше следующего, меняем их местами
	if (compare_BubFunc(cur, arr[i + 1])) swap_BubFunc(arr, i, i + 1);
		// Возвращаем обновленный массив
		return arr;
	}, arr);
};
// рекурсивно вызывает функцию bubble_BubFunc до тех пор, пока массив не будет отсортирован
const BubbleSortFunc = (arr) => {
	// массив пустой или состоит из одного элемента, уже отсортирован
	if (arr.length <= 1) return arr;
		// вызываем функцию bubble_BubFunc для всего массива и уменьшаем длину массива на один
		return BubbleSortFunc(bubble_BubFunc(arr, arr.length).slice(0, -1)).concat(arr.slice(-1));
};

function InsertionSortImp(arr) { 
    var n = arr.length;
    for (var i = 0; i < n; i++)
    { 
		var v = arr[ i ], j = i-1;
		while (j >= 0 && arr[j] > v) { 
			arr[j+1] = arr[j]; 
			j--; 
		}
		arr[j + 1] = v;
    }                    
    return arr;
}

// возвращает отсортированный массив, используя сортировку вставками
function InsertionSortFunc(array) {
	// массив пустой или состоит из одного элемента, уже отсортирован
	if (array.length <= 1) return array;
	// разделяем массив на две части: первый элемент и остальные
	let [first, ...rest] = array;
	// сортируем остальные элементы рекурсивно
	let sortedRest = InsertionSortFunc(rest);
	// вставляем первый элемент на правильное место в отсортированном массиве
	return insert_InsertFunc(first, sortedRest);
}
// вставляет элемент x в отсортированный массив array
function insert_InsertFunc(x, array) {
	// массив пустой или x больше или равен последнему элементу, то добавляем x в конец массива
	if (array.length === 0 || x >= array[array.length - 1])
		return [...array, x];
	// разделяем массив на две части: первый элемент и остальные
	let [first, ...rest] = array;
	// вставляем x перед первым элементом, если он меньше его
	if (x < first) return [x, first, ...rest];
	// вставляем x в остальную часть массива рекурсивно
	return [first, ...insert_InsertFunc(x, rest)];
}

function SelectionSortImp(arr) {                             
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
    { 
		var min = i;
		for (var j = i+1; j < n; j++) { 
			if (arr[j] < arr[min]) 
				min = j; 
		} 
		var t = arr[min]; 
		arr[min] = arr[ i ]; 
		arr[ i ] = t;
    }                    
    return arr;
}

// возвращает отсортированный массив, используя сортировку выбором
function SelectionSortFunc(array) {
	// массив пустой или состоит из одного элемента, уже отсортирован
	if (array.length <= 1) return array;
	// находим минимальный элемент в массиве и его индекс
	let [min, index] = findMin_SelFunc(array);
	// удаляем минимальный элемент из массива
	let rest = removeAt_SelFunc(array, index);
	// сортируем остальные элементы рекурсивно
	let sortedRest = SelectionSortFunc(rest);
	// добавляем минимальный элемент в начало отсортированного массива
	return [min, ...sortedRest];
}
// возвращает минимальный элемент и его индекс в массиве
function findMin_SelFunc(array) {
	// массив состоит из одного элемента, то он является минимальным
	if (array.length === 1) return [array[0], 0];
	// разделяем массив на две части: первый элемент и остальные
	let [first, ...rest] = array;
	// находим минимальный элемент и его индекс в остальной части массива рекурсивно
	let [minRest, indexRest] = findMin_SelFunc(rest);
	// сравниваем первый элемент с минимальным элементом в остальной части массива
	if (first < minRest) {
		// первый элемент меньше, он является минимальным и его индекс равен нулю
		return [first, 0];
	} else {
		// минимальный элемент и его индекс берутся из остальной части массива, увеличивая индекс на единицу
		return [minRest, indexRest + 1];
	}
}
// удаляет элемент из массива по заданному индексу
function removeAt_SelFunc(array, index) {
	// индекс равен нулю, то удаляем первый элемент из массива
	if (index === 0) return array.slice(1);
	// разделяем массив на две части: первый элемент и остальные
	let [first, ...rest] = array;
	// удаляем элемент из остальной части массива по уменьшенному индексу рекурсивно
	let removedRest = removeAt_SelFunc(rest, index - 1);
	// добавляем первый элемент в начало полученного массива
	return [first, ...removedRest];
}

let arr1 = [-5, 16, 87, 0, -33, 25, -11];
console.log('пузырьковая сортировка | императивный стиль: ' + BubbleSortImp(arr1).join(" "));
let arr2 = [-5, 16, 87, 0, -33, 25, -11];
console.log('пузырьковая сортировка | функциональный стиль: ' + BubbleSortFunc(arr2).join(" "));

let arr3 = [-5, 16, 87, 0, -33, 25, -11];
console.log('сортировка вставками | императивный стиль: ' + InsertionSortImp(arr3).join(" "));
let arr4 = [-5, 16, 87, 0, -33, 25, -11];
console.log('сортировка вставками | функциональный стиль: ' + InsertionSortFunc(arr4).join(" "));

let arr5 = [-5, 16, 87, 0, -33, 25, -11];
console.log('сортировка выбором | императивный стиль: ' + SelectionSortImp(arr5).join(" "));
let arr6 = [-5, 16, 87, 0, -33, 25, -11];
console.log('сортировка выбором | функциональный стиль: ' + SelectionSortFunc(arr6).join(" "));