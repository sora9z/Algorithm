/* 18_getItemFromTwoSortedArray
문제 : 길이가 m,n이고 오름차순으로 정렬되어 있는 자연수 배열들을 입력받아 전체 요소 중 k번째 요소를  return 한다.

입력 : 자연수를 요소로 갖는 길리 m. n두 개의 배열과
number 타입의 0이상의 정수 k

출력 : number 타입을 return

주의사항 : 두 배열의 길이의 합은 1,000,000 이하이다.
어떤 배열 arr의 k번째 요소는 arr[k-1]을 의미.
*/
// k번 째로 큰 것을 찾는 문제
//! 1번 풀이 O(n)
const getItemFromTwoSortedArrays1 = function (arr1, arr2, k) {
  // Todo
  // 두 배열은 오름차순으로 정렬되어 있다. k번 째 요소는 k번째로 큰 요소를 의미한다.
  // 두 배열에서 크기 순으로 한 개씩 꺼내서 비교를 하고 count를 증가시켜 count가 k번 째 인 경우 그 값을 return한다.
  // arr1과 arr2의 길이를 더한 값에서 k를 뺀 값이 절반 길이보다 크다면 (c=m+n-k) c번 쨰로 작은 값을 찾느 것 이므로
  // 왼쪽의 요소부터 꺼낸다.
  // 반대로 c가 절반 길이보다 작다면 k번째 요소는 오른쪽에 있을 가능성이 크므로 오른쪽 요소부터 꺼낸다.
  let [comp1, comp2] = [0, 0]; // arr1과 arr2에서 꺼낸 값을 넣는 변수
  let count = 0; // 몇 번째인지 확인하는 변수
  let result = 0;

  if (k <= (arr1.length + arr2.length) / 2) {
    // [1,2,3,4,5,6,7] k번 째는 왼쪽에 있을 가능성이 큼
    comp1 = arr1.shift(); // 초기에 비교 할 값을 각 배열에서 빼서 넣어준다
    comp2 = arr2.shift();

    while (k !== count) {
      // c가 count와 같지 않다면 반복문을 진행한다.
      if (comp1 <= comp2) {
        count++;
        result = comp1;
        comp1 = arr1.shift();
      } else {
        count++;
        result = comp2;
        comp2 = arr2.shift();
      }
    }
  } else {
    len_k = arr1.length + arr2.length - k + 1; // 뒤에서 len_k번 쨰로 큰 것을 구하기 위해
    // [1,2,3,4,5,6,7] k번 째는 오른쪽 있을 가능성이 큼
    comp1 = arr1.pop(); // 초기에 비교 할 값을 각 배열에서 빼서 넣어준다
    comp2 = arr2.pop();

    while (len_k !== count) {
      // c가 count와 같지 않다면 반복문을 진행한다.
      if (comp1 >= comp2) {
        count++;
        result = comp1;
        comp1 = arr1.pop();
      } else {
        count++;
        result = comp2;
        comp2 = arr2.pop();
      }
    }
  }
  return result;
};

//! 두  번 풀이..

const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  //Todo B-Search

  let obj1 = {
    arr: arr1,
    range: Math.floor(k / 2),
    step: Math.floor(k / 4),
    pointer: Math.floor(k / 4) - 1,
  };

  let obj2 = {
    arr: arr2,
    range: Math.floor(k / 2),
    step: Math.floor(k / 4),
    pointer: Math.floor(k / 4) - 1,
  };

  const setNewObjectRange = (obj1, obj2) => {
    // if range ===1 인 경우

    // k , step을 차례로 갱신한다.
    // k가 0이면 return arr[pointer]
    // return 0
    if (obj1.range === 1) {
      k -= obj1.step;
      if (k === 0) return obj1.arr[obj1.pointer];
      obj1.pointer += obj1.step; // pointer에 step을 미리 더한다. (다음 step이 0이 되어버리므로)
      obj1.range -= obj1.step; // 아래의 것들은 모두 버림
      obj1.step = Math.floor(obj1.range / 2); // 다음 단계 step으로 update
      return 0;
    } else if (obj1.range === 0) {
      // else if range ===0인 경우 (더이상 진행 할 step이 없으므로 obj2에서 나눠준다 )
      // obj2의 step이 변경되었으니 pointer수정
      // obj1의 setp만 수정한다.
      // return 0
      if (obj2.range === 0)
        // obj2 range도 0이면
        return obj1.arr[obj1.pointer];
      else if (obj2.range === 1) {
        obj1.range = obj2.range;
        obj2.range -= obj1.range;
        obj1.step = obj1.range === 1 ? 1 : Math.floor(obj1.range / 2);
        obj2.pointer +=
          obj2.pointer === 0 || obj2.pointer === obj2.arr.length - 1
            ? 0
            : obj2.step;
        return 0;
      } else {
        obj1.range = Math.floor(obj2.range / 2);
        obj1.step = obj1.range === 1 ? 1 : Math.floor(obj1.range / 2);

        obj2.range -= obj1.range;
        obj2.pointer +=
          obj2.pointer === 0 || obj2.pointer === obj2.arr.length - 1
            ? 0
            : obj2.step;
        return 0;
      }
    } else {
      // k,range,step,을 갱신한다.
      // k가 0이면 return arr[pointer]

      k -= obj1.step;
      if (k === 0) return obj1.arr[obj1.pointer];
      obj1.range -= obj1.step;
      obj1.step = obj1.range === 1 ? 1 : Math.floor(obj1.range / 2);
      obj1.pointer += obj1.step;
      return 0;
    }
  };

  while (k > 0) {
    if (obj1.arr[obj1.pointer] <= obj2.arr[obj2.pointer]) {
      let find = setNewObjectRange(obj1, obj2);
      if (find !== 0) return find;
    } else {
      let find = setNewObjectRange(obj2, obj1);
      if (find !== 0) return find;
    }
  }
  return 0;
};

//! test;
// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 5, 9];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
// console.log(result); // --> 8

// let arr3 = [1, 1, 2, 10];
// let arr4 = [3, 3];
// result = getItemFromTwoSortedArrays(arr3, arr4, 4);
// console.log(result); // --> 3

// const arr5 = [1, 1, 2, 10];
// const arr6 = [2, 3, 7, 12];
// result = getItemFromTwoSortedArrays(arr5, arr6, 7);
// console.log(result);

// let ar = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
// let ar2 = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
// console.log(ar);
// console.log(ar2);

let ar = [
  10, 24, 17, 26, 0, 0, 12, 10, 10, 8, 24, 15, 23, 26, 20, 4, 20, 14, 0, 21, 11,
  12, 22, 18, 2, 7, 8, 23, 28, 19,
].sort((a, b) => a - b);
let ar2 = [
  30, 4, 4, 5, 10, 6, 20, 14, 1, 21, 12, 27, 19, 1, 7, 11, 33, 2, 32, 8, 19, 33,
  17, 14, 20, 21, 38, 18, 5, 1, 18, 37, 23, 12, 9, 19, 11, 6, 34, 33,
].sort((a, b) => a - b);

console.log(ar.concat(ar2).sort((a, b) => a - b));
console.log("shuld", ar.concat(ar2).sort((a, b) => a - b)[25]);

let result = getItemFromTwoSortedArrays(ar, ar2, 24);
console.log(result);

// const offset = parseInt(Math.random() * 1000) + 1;
// const k = size - offset;
// result = getItemFromTwoSortedArrays(arr1, arr2, k);
// console.log(result);

// let arr7 = [];
// let arr8 = [];
// let i = 0;
// let j = 1;
// while (i <= 1000000) {
//   arr7.push(i + 2);
//   i++;
//   arr8.push(j + 1);
//   j++;
//   arr7.push(j + 4);
//   j++;
//   arr8.push(i + 3);
//   i++;
// }
// console.log(arr7);
// console.log(arr8);
// result = getItemFromTwoSortedArrays(arr7, arr8, 1000000);
// console.log(result);

///

// let obj1 = {
//   arr: arr1,
//   range: Math.floor(k / 2),
//   step: Math.floor(k / 4),
//   pointer: Math.floor(k / 4) - 1,
// };

// let obj2 = {
//   arr: arr2,
//   range: Math.floor(k / 2),
//   step: Math.floor(k / 4),
//   pointer: Math.floor(k / 4) - 1,
// };

// const setNewObjectRange = (obj1, obj2) => {
//   // 만약 range가 0이면 obj2에서 range의 반을 넘겨준다.
//   if (obj1.range === 0) {
//     // arr2 의 range의 반을 넘겨준다.
//     obj1.range = Math.floor(obj2.range / 2);
//     k -= obj1.step;
//     if (k === 0) return obj1.arr[obj1.pointer];
//     obj1.step = Math.floor(obj1.range / 2);
//     obj1.pointer += obj1.step;
//     // range2 재정의
//     obj2.range -= obj1.range; // 그만큼 range2 감소
//     obj2.step = Math.floor(obj2.range / 2);
//     obj2.pointer -= obj2.step;
//     return 0;
//   }
//   k -= obj1.step;
//   if (k === 0) return obj1.arr[obj1.pointer];
//   obj1.range -= obj1.step;
//   if (obj1.range === 1) obj1.step = 1;
//   else obj1.step = Math.floor(obj1.range / 2);
//   obj1.pointer += obj1.step;
//   return 0;
// };

// obj1 ={arr, step, pointer}
// obj2={arrstep,pointer}
// step : 한 번에 이동할 수 있는 step
// pointer : 현재 진행 할 배열의 index
