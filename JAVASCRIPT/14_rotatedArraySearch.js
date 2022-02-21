// 14_rotatedArraySearch
// 문제 : 부분적으로 오름차순 정렬된 정수의 배열(rotated)과 정수(target)을 입력받아 target의 인덱스를 리턴한다.
// 부분적으로 정렬된 배열 : 배열을 왼쪽 또는 오른쪽으로 0칸 이상 순환 이동 할 경우 완전히 정렬되는 배열
// 입력 : rotated : number type을 요소로 갖는 배열
//  rotated : number 타입을 갖는 배열
// rotated[i]는 정수
// target : num타입의 정수
// 출력 : num타입을 리턴한다.
// 주의사항 : rotated에 중복되는 요소는 없다.
// target이 없는 경우 -1을 리턴한다.
// ! ---------방법 1 : 조건에 따른 범위---------------------//
// ? 배열내부의 인수들은 크게 두 그룹으로 나눌 수 있다.
// ? 1.  [ 큰 범위 , 작은 범위] -> 이 경우 부분적으로만 정렬되어있는 배열에 속한다.
// ? 2.  [ 잗은 범위 , 큰 범위] -> 이 경우는 처음부터 정렬되어있는 배열이다.
// ? 1번의 경우 head에 있는 인자가 tail에 있는 인자보다 더 크다.
// ? target이 head의 인자보다 큰 경우와 작은 경우로 나눈다.
// ? 그 안에서 target이 mid보다 큰 경우, 작은 경우, mid가 head보다 큰 경우 등을 조건문을 사용하여 filter 하는 방식.
// ? -- 결과 : 마지막 Advanced Case 통과 X

const rotatedArraySearch = function (rotated, target) {
  // head, mid, tail 변수 선언하고 초기값 설정
  let [head, mid, tail] = [0, 0, rotated.length - 1];
  // let checkLimit = mid;
  // let count = 0; //

  // target이 작은 그룹에 있는지, 큰  그룹에 있는지 알아야 한다.
  // head가 tail보다 크다면 정렬이 안되어있으므로 아래의 반복문을 진행
  if (rotated[head] > rotated[tail])
    while (tail >= head) {
      // count++;
      checkLimit = mid; // mid 계속 같은 값인지 확인 (무한루프 방지)
      mid = Math.floor((head + tail) / 2);

      if (target === rotated[mid]) {
        return mid; // mid가 target이면 return mid
      }
      // target 이 head보다 크다면 target은 큰 그룹에 속한다.
      if (target >= rotated[head]) {
        if (rotated[mid] > target)
          // mid가 target 보다 크다면, mid는 큰 그룹에 속하고 target의 우측에 있다
          // tail을 mid로 이동한다
          tail = mid;
        else if (rotated[mid] < rotated[head])
          // target 보다 작고 head보다 작다면 mid는 작은 그룹에 있다.
          // tail을 mid로 이동한다.
          tail = mid - 1;
        // target 보다 작고 head보다 크다면 mid는 큰 그룹에 있고 target의 죄측에 있다.
        // head를 mid로 이동한다.
        else head = mid + 1;
      } else {
        // target이 head보다 작다면 작은 그룹에 속한다.
        // mid가 target 보다 작다면 mid는 작은 그룹에 있고 target의 좌측에 있다.
        if (rotated[mid] < target)
          // head를    mid로 옮긴다
          head = mid + 1;
        else if (rotated[mid] < rotated[head])
          // mid가 target보다 크고 head보다도 작다면  작은 그룹, target 우측
          // tail을 mid로 옮긴다
          tail = mid - 1;
        // mid가 tartget보다 크고 head보다 크다면 큰 그룹이므로 target의 죄측
        // head를 mid로 옮긴다.
        else head = mid + 1;
      }
      // if (checkLimit === mid) return -1; // 무한으로 돈다면 값이 없다는 뜻
    }

  return -1;
};

// ! ---------방법 2 : 정렬 후 이진탐색---------------------//
// ? 이 방법은 먼저 정렬을 하고난 후 이진탐색을 하여 찾아내는 방법
// ? count 변수를 사용하여 몇 번 이동했는지 표시하도, 이진탐색의 결과에 count로 보완을 해주는 방법
// ? 결과 --> 역시 마지막 test case failed\

const rotatedArraySearch2 = function (rotated, target) {
  let [head, mid, tail] = [0, 0, rotated.length - 1];
  mid = Math.floor((head + tail) / 2);
  // count 변수를 선언하여 몇 번 이동했는지 check
  let { count, arr } = sort(rotated);

  while (tail >= head) {
    mid = Math.floor((head + tail) / 2);
    if (arr[mid] === target) {
      let diff = mid - count;
      if (diff < 0) return arr.length + diff;
      else return diff;
    } else if (arr[mid] > target) tail = mid - 1;
    else head = mid + 1;
  }

  return -1;
};

const sort = (arr) => {
  let [head, mid, tail] = [0, 0, arr.length - 1];
  mid = Math.floor((head + tail) / 2); // count 변수를 선언하여 몇 번 이동했는지 check
  let count = 0;

  while (arr[head] > arr[tail]) {
    // head<tail 때까지 while문을 돌린다.
    arr.unshift(arr.pop()); // 뒤에 있는 요소들을 삭제하고 앞으로 붙인다.
    count++;
  }
  return { count, arr };
};

let output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2);
console.log("1", output); // --> 5

output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100);

console.log("2", output); // --> -1

console.time();
output = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 4);
console.timeEnd();
console.log("3", output); // --> 0

let test = rotatedArraySearch([8, 9, 1, 2, 3, 4, 5, 6, 7], 7);
console.log("4", test); // --> 8
