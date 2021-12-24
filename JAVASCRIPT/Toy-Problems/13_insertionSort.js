// 13_insertionSort
// 문제 : 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴한다.
// 입력 : arr : 정수 num type을 요소로 갖는 배열
// arr.length는 1,000이하이다.
// 출력 : num type을 갖는 배열
// 오름차순으로 정렬된 배열
// 주의사항 : sort 사용 금지
// 입력 배열은 중첩되지 않은 1차원 배열
// Advanced : insertionSort 함수의 두 번째 인자로 callback 함수를 받아서 그 함수의 return 값을 기준으로 요소를 정렬한다.
// --------------------------------
//  callback이 이 callback을 말한 것이 아니었군...
// const insertionSort1 = function (arr, callback) {
//   let count = arr.length;
//   let idx = 0; // index를 넣을 변수

//   // count 가 0이 아닐 떄까지 반복한다
//   while (count > 0) {
//     let a = arr[idx];
//     let b = arr[idx + 1];

//     if (callback(a, b) > 0) {
//       // a,b Swap
//       arr[idx + 1] = a;
//       arr[idx] = b;
//       idx += 1;
//     } else idx += 1;
//     // 만약 idx >가 count를 넘는다면 idx를 초기화하고 count--
//     if (idx >= count) {
//       idx = 0;
//       count -= 1;
//     }
//   }
//   return arr;
// };

// let output = insertionSort1([3, 1, 21], (a, b) => a - b);
// // console.log(output); // --> [1, 3, 21]

// let output2 = insertionSort1([1, 2, 43, 100, 21], (a, b) => a - b);
// console.log(output2);

// ! ------------- 2 번째 시도

const insertionSort = function (arr, cb = (item) => item) {
  const compareFunc = (a, b) => a - b; // 두 개의 매개변수의 차를 return

  let count = arr.length;
  let idx = 0; // index를 넣을 변수

  // count 가 0이 아닐 떄까지 반복한다
  while (count > 0) {
    let a = arr[idx];
    let b = arr[idx + 1];

    if (compareFunc(cb(a), cb(b)) > 0) {
      // a,b Swap

      let temp = arr[idx + 1];
      arr[idx + 1] = arr[idx];
      arr[idx] = temp;

      idx += 1;
    } else idx += 1;
    // 만약 idx >가 count를 넘는다면 idx를 초기화하고 count--
    if (idx >= count) {
      idx = 0;
      count -= 1;
    }
  }

  return arr;
};

// const insertionSort = function (arr, cb = (item) => item) {
//   // cb가 있다면 arr에 cb를 적용한 새로운 배열을 만든다
//   const arrCb = cb ? arr.map(cb) : false;

//   const compareFunc = (a, b) => a - b; // 두 개의 매개변수의 차를 return
//   let count = arr.length;
//   let idx = 0; // index를 넣을 변수

//   // count 가 0이 아닐 떄까지 반복한다
//   while (count > 0) {
//     let a = arrCb[idx];
//     let b = arrCb[idx + 1];

//     if (compareFunc(a, b) > 0) {
//       // a,b Swap
//       arrCb[idx + 1] = a;
//       arrCb[idx] = b;

//       let temp = arr[idx + 1];
//       arr[idx + 1] = arr[idx];
//       arr[idx] = temp;

//       idx += 1;
//     } else idx += 1;
//     // 만약 idx >가 count를 넘는다면 idx를 초기화하고 count--
//     if (idx >= count) {
//       idx = 0;
//       count -= 1;
//     }
//   }

//   return arr;
// };

//! ref ---
const insertionSortRef = function (arr, transform) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) >= transform(sorted[i - 1])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (transform(arr[i]) <= transform(sorted[j])) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }

  return sorted;
};

const callback = (item) => item * item;

let output3 = insertionSort([3, 1, 21]);
console.log("test", output3); // --> [1, 3, 21]

let output4 = insertionSort([1, 2, 43, 100, 21], callback);
console.log(output4);

console.time();
let output5 = insertionSort([20, -10, -11, 2, 29], callback);
console.timeEnd();
console.log(output5);
console.log("-------------");

console.time();
let ref = insertionSortRef([20, -10, -11, 2, 29], callback);
console.timeEnd();
console.log(ref);
