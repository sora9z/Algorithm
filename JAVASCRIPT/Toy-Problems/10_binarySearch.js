// 10_binarySearch
// 문제 : 오름차순 정렬된 정수의 배열과 정수(target)을 입력받아 target의 인덱스를 티턴한다.

// 주의사항 : 이진탐색 알고리즘을 사용한다. O(lonN)
// target이 없는 경우 -1을 return 한다.
const binarySearch = function (arr, target) {
  let head = 0;
  let tail = arr.length - 1;
  let mid = 0;

  // 이진탐색의 종료는 head가 tail보다 크면 종료한다.
  while (tail >= head) {
    mid = Math.floor((head + tail) / 2);

    // 만약 arr[mid]가 targer이라면 return mid
    if (arr[mid] === target) return mid;

    // 만약 arr[mid]가 target보다 작다면 tail=mid-1
    // 크다면 hear=mid+1
    arr[mid] > target ? (tail = mid - 1) : (head = mid + 1);
  }
  // 다 돌았는데 답이 없다면  target이 없는 것이므로
  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1
