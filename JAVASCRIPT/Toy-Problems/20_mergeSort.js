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
    let [leftIdx, rightIdx] = [0, 0];
    let result = [];

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
    else if (rightIdx < right) result.push(...right.slice(rightIdx));

    return result;
  };
};

let output = mergeSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]ㄴ
