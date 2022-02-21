/*
24_radixSort
- 문제 : 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하려 리턴한다.
- 입력 : arr , 0이상의 정수 number를 요소로 갖는다. arr.lengh <=100,000 nlog(n)
- 출력 : number 타입을 요소로 갖는 배열 . 오름차순으로 요소가 정렬되어야 한다.
- 주의사항 : 기수 정렬을 구해야 한다. arr.sort 사용 금지. 입력은 중첩되지 않은 1차원 배열이다

- 기수정렬이란 낮은 자리수부터 비교하여 정렬해 간다는 것을 기본 개념으로 하는 정렬 알고리즘이다.
- 기수 정렬은 비교 연산을 하지 않으며 정렬 속도가 빠르지만 데이터 전체 크기에 기수 테이블의 크기만한 메모리가 필요하다.
- 기수 정렬은 내부적으로 계수 정렬(countining sort)을 사용한다.
- https://lktprogrammer.tistory.com/48
- Queue 자료구조를 인자로 갖는 크기 10인 배열을 활용한다. (Bucket)
- 정렬을 할 데이터에서 가장 낮은 자리수를 기준으로 차례대로 Bucket에 넣는다.
- 0 번째 Queue부터 데이터를 가져온다. 
- 두 번째로 낮은 자리수를 기준으로 차례대로 Bucket애 넣는다.
- 다시 0번째 인덱스부터 데이터를 가져온다.

- 걔수 정렬 : https://www.cs.miami.edu/home/burt/learning/Csc517.091/workbook/countingsort.html
- 계수 정렬은 인자들의 반복 횟수를 counting하여 들아갈 index를 추정하는? 정렬 방법
- counting algorithm은의 시간복잡도는 O(n)이다. 
- Counring Sort는 내부 인자들의 범위 차이가 많이 나면 (예를 들어 1,2,10000 인 경우 그만큼 큰 Counting Table이 필요하게 된다.) Table만큼의 메모리 낭비가 되므로 이 알고리즘은 특정한 범위에 있을 때 사용한다.
- 이를 사용하는 대표적인 사례로는 Suffix Array를 얻는 경우가 있다.
*/

function radixSort(arr) {
  // 1. Bucket을 생성한다.
  // 2. Max size를 구한다.
  // 3. Max size만큼 반복한다.
  // - 자리수에 대응되는 Bicket에 Data를 넣는다.
  // - arr을 갱신한다.

  // 자릿수의 데이터를 푸출하는 메서드
  const getDigitData = (digit, data) => {
    let str = "";
    if (digit === 1) str = String(Math.abs(data)).slice(-1);
    else {
      str = String(Math.abs(data)).slice(-1 * digit, -1 * (digit - 1));
    }
    return Number(str);
  };

  // Get Bucket
  let bucKet = [];
  for (let i = 0; i < 10; i++) {
    bucKet.push(new Array());
  }

  // get max digit
  const MAX = String(
    arr.reduce((acc, cur) => {
      return acc > Math.abs(cur) ? acc : Math.abs(cur);
    }, Math.abs(arr[0]))
  ).length;

  let count = 1;

  //size 만큼 반복
  while (count <= MAX) {
    let newArray = [];

    // Bucket에 대응되는 Data를 넣는다
    for (let data of arr) {
      // 해당 자릿수의 숫자를 구한다.
      let buckId = getDigitData(count, data);
      // Bucket에 해당 자릿수에 맞는 index에 push한다.
      bucKet[buckId].push(data); // enquqeu
    }

    // arr을 다시 정렬한다.(+)
    for (let data of bucKet) {
      let len = data.length;
      if (len) {
        newArray = newArray.concat(data);
        data.length = 0;
      }
    }

    arr = [...newArray]; // arr 갱신
    count++;
  }

  // 음수인지 양수인지에 따라 정렬
  for (let data of arr) {
    data < 0 ? bucKet[0].unshift(data) : bucKet[1].push(data); // 음수의 경우 오름차순
  }

  arr = bucKet[0].concat(bucKet[1]);

  return arr;
}

// //! Test
// let output = radixSort([1, 2, -10, -11, 100, 21]);
// console.log(output); // --> [1, 2, 21, 43, 100]을

// ? 좀 더 간결하게 바꿔보자

// max digit 값을 return 하는 method
const getMaxDigit = (arr) => {
  let MAX = String(
    arr.reduce((acc, cur) => {
      return acc > Math.abs(cur) ? acc : Math.abs(cur);
    }, Math.abs(arr[0]))
  ).length;
  return MAX;
};

const sortRadix = (arr) => {
  // 자릿수의 데이터를 추출하는 메서드
  const getDigitData = (digit, data) => {
    let str = "";
    if (digit === 1) str = String(Math.abs(data)).slice(-1);
    else {
      str = String(Math.abs(data)).slice(-1 * digit, -1 * (digit - 1));
    }
    return Number(str);
  };

  // Get Bucket
  let bucKet = [];
  for (let i = 0; i < 10; i++) {
    bucKet.push(new Array());
  }

  // get max digit
  const MAX = getMaxDigit(arr);
  let count = 1;

  // sort

  //size 만큼 반복
  while (count <= MAX) {
    let newArray = [];

    // Bucket에 대응되는 Data를 넣는다
    for (let data of arr) {
      // 해당 자릿수의 숫자를 구한다.
      let buckId = getDigitData(count, data);
      // Bucket에 해당 자릿수에 맞는 index에 push한다.
      bucKet[buckId].push(data); // enquqeu
    }

    // arr을 다시 정렬한다.
    for (let data of bucKet) {
      let len = data.length;
      if (len) {
        newArray = newArray.concat(data);
        data.length = 0;
      }
    }

    arr = [...newArray]; // arr 갱신
    count++;
  }
  return arr;
};

function radixSort(arr) {
  /* 
  1. 양수배열과 음수 배열로 나눈다 (left right) 여기서 left의 요소는 모두 양수로 바꾼다.
  2. 각 배열에 radix Sort Func를 적용한다. (양의 정수만을 sort 한다)
  3. 음수 배열은 reverse를 해주고 각 element에 -를 곱하여 다시 음수화 한다.
  */

  let [left, right] = [[], []];

  // 양수배열, 음수 배열로 나눈다.
  arr.forEach((el) => {
    el < 0 ? left.push(-1 * el) : right.push(el);
  });

  // 정렬
  right = [...sortRadix(right)];
  left = [...sortRadix(left)];

  return left
    .reverse()
    .map((el) => -1 * el)
    .concat(right);
}

//! Test
let output = radixSort([1, 2, -10, -11, 100, 21]);
console.log(output); // --> [1, 2, 21, 43, 100]을
