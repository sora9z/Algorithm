// Bubble sort는 전체 배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환한다.
// swap은 정렬에 사용되는 일반적인 함수이다.
// 두 배열 요소들을 교환하여 대부분의 정렬 알고리즘의 도움 함수로 많이 사용된다.

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

// let output = bubbleSort([2, 1, 3]);
// console.log(output); // --> [1, 2, 3]

let output1 = bubbleSort([3, 5, 7, 1, 2, 4]);
console.log(output1);
