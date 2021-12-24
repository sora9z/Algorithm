const bubbleSort1 = function (arr) {
  // TODO: 여기에 코드를 작성니다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
};

const bubbleSort = function (arr) {
  // arr을 deep Copy 하여 배열에 넣는다.
  let arrCopy = arr.slice();
  // 마지막으로 순서 변경이 있던 index를 가리키는 변수를 선언하고 마지막 인덱스로 초기화를 해준다.
  let lastChange = arr.length - 1;
  let loopLen = lastChange;
  // 무한 루프를 종료하기 위해 OnOff 변수를 선언하고 true로 초기화한다.
  let onOff = true;
  while (onOff) {
    // arrCopy 만큼 반복문을 돌린다
    // i+1이 길이보다 크면 안되므로 아래와 같이 조건을 넣는다
    onOff = false; // 변경이 있기 전까지 Off
    loopLen = lastChange;
    for (let i = 0; i < loopLen; i++) {
      // arrCopy의 i번 째  요소와 i+1번 째 요소를 대소비교하고
      // i번째 요소가 크다면 두 요소의 위치를 바꾼다.
      if (arrCopy[i] > arrCopy[i + 1]) {
        swap(arrCopy, i, i + 1);
        // i+1 을 lastChange에 넣어준다 (마지막 으로 위치를 바꿨다면 더이상 위치 변경이 없을 것이다)
        // 다음 반복문을 줄이기 위해 마지막 위치 변경이 있던 요소를 할당한다.
        lastChange = i + 1;
        onOff = true; // 변경이 있다면 true
      }
    }
  }
  return arrCopy;
};

let output = bubbleSort([4, 1, 3, 4, 7, 8, 8, 132, 4]);
console.log(output); // --> [1, 2, 3]

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
