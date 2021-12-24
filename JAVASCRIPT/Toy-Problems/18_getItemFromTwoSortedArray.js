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
//! 2번 풀이 B-tree응용 O(n)
// 첫 실행
// arr1[0] 과 arr2[0]중 작은 것을 start node로 한다. (arr1[0]<=arr2[0])
// com2애는 위의 결과에서 더 큰 것을 넣는다. com1=arr1[2]
// com1에는 start node의 다음 인자를 넣는다. (arr1[1]을 넣는다)
// if com1<=com2 이면 node를 com1으로 바꾼다. (더 작은 것을 node로 한다.)
// com1 에 com1다음의 인자를 넣는다 count ++
// else node를 com2로 바꾼다.  count ++
// com2에 com2 다음 인자를 넣는다.
// count 와 k가 같다면 return node

const getItemFromTwoSortedArrays2 = function (arr1, arr2, k) {
  let count = 0;
  let node = 0;

  if (k <= (arr1.length + arr2.length) / 2) {
    let [comp1, comp2] = [arr1.shift(), arr2.shift()];
    while (count !== k) {
      if (comp1 <= comp2) {
        node = comp1;
        count++;
        comp1 = arr1.shift();
      } else if (comp2 <= comp1) {
        node = comp2;
        count++;
        comp2 = arr2.shift();
      }
    }
  } else {
    const len_k = arr1.length + arr2.length - k + 1; // 뒤에서 len_k번 쨰로 큰 것을 구하기 위해
    let [comp1, comp2] = [arr1.pop(), arr2.pop()];
    while (count !== len_k) {
      if (comp1 <= comp2) {
        node = comp2;
        count++;
        comp2 = arr1.pop();
      } else if (comp2 <= comp1) {
        node = comp1;
        count++;
        comp1 = arr2.pop();
      }
    }
  }

  return node;
};

const getItemFromTwoSortedArrays1 = function (arr1, arr2, k) {
  //Todo B-Search

  // arr1 과 arr2를 대소비교하여 더 작은 배열을 기준으로 한다.
  // 더 작은 배열의 중간 값이 몇 번째인지 구한다.
  // 만약 k보다 작으면 mid+1범위를 좁힌다.
  // 크다면 mid-1로 범위를 좁힌다.
  // 반복을 한다.

  let mid = 0;

  if (arr1.length <= arr2.length) {
    mid = Math.floor(arr1.length / 2);
    getCount(arr2, num, arr1.length + arr2.length);
  }

  getCount();
};
//? 매개변수 num이 몇 번째 숫자인지 얻어내는 메서드
const getCount = (arr, num, len) => {
  // num의 arr의 마지막 인자부터 시작해서 대소비교
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[len - 1 - i] >= num) count++;
    else break;
  return len - count;
};
//! test
// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 5, 9];
// let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
// console.log(result); // --> 8

// arr1 = [1, 1, 2, 10];
// arr2 = [3, 3];
// result = getItemFromTwoSortedArrays(arr1, arr2, 4);
// console.log(result); // --> 3

let arr3 = [];
let arr4 = [];
let i = 0;
let j = 1;
while (i === 1000000) {
  arr3.push(i + 2);
  i++;
  arr4.push(j + 1);
  j++;
  arr3.push(j + 4);
  j++;
  arr4.push(i + 3);
  i++;
}
result = getItemFromTwoSortedArrays(arr3, arr4, 1000000);
console.log(result);
