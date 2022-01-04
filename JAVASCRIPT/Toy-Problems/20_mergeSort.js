/*
정수를 요소로 갖는 배열을 입력받아 오름차순으로 정령하여 return 한다.
입력 : arr arr.lengthj <=100,000
출력 : number type을 요소로 갖는 배열을 return 배열의 요소는 오름차순으로 정렬되어있어야한다
*/

const mergeSort = function (arr) {
  // TODO:
  // const merge (left, right)
  // leftIdx , rightIdx=0  Left  배열과 Right 배열의 index pointer
  // while ~ leftIdx <left.len or rightIdx <right.len
  // if(left < right)
  // result.push(left) leftIdx++
  // else result.push(right) rightIdx++
  // if left<len -> result.push(left.slice(ledtIdx))
  // else
  // return result
  // const split 함수
  // 만약 arr가 한 개이면 return arr
  // arr를 반으로 나누고 각 변수에 할당
  // 두 변수를 merge (split(L2),split(R2))

  const merge = (left, right) => {
    // ? 두 개의 배열을 받아서 오름차순으로 정렬을 하고 병합하는 함수
    let [leftIdx, rightIdx] = [0, 0];
    let result = [];

    // left 또는 right 가 다 돌면 반복을 끝낸다.
    // 아직 다 돌지 않은 배열은 제일 끝에 추가한다 (어차피 제일 큰 값을일 것이므로)

    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
    // 둘 중 idx가 남는다면 나머지를 result의 뒤에 붙인다.
    if (leftIdx < left.length) result.push(...left.slice(leftIdx));
    else if (rightIdx < right.length) result.push(...right.slice(rightIdx));

    return result;
  };

  const mergeSplit = (arr) => {
    //? 한 개의 배열을 입력받아 두 개의 배열로 분할하는 함수

    // arr의 길이가 1이라면 배열을 바로 반환한다.
    if (arr.length <= 1) return arr;

    // 배열을 나눌 기준이 되는 중간 값을 구한다
    const mid = Math.floor(arr.length / 2);
    // arr을 mid로 기준으로 나눈 두 개의 배열의 길이를 mergesplit으로 다시 재귀적으로 분할한다.
    const [left, right] = [
      mergeSplit(arr.slice(0, mid)),
      mergeSplit(arr.slice(mid)),
    ];

    // left와 right을 병합한 결과를 return 한다.
    return merge(left, right);
  };

  return mergeSplit(arr);
};

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
