/* 01_greedyMovingSuff
suff=짐의 무게 [70,50,80,50] 40이상 240이하의 자연수를 담은 50,000 이하의 배열
limit = 한 번에 들어갈 수 있는 무게100kg 일 때 
필요한 박스 개수를 최고화 하여 옮기려고 한다.
모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 함수를 작성
 */

// 방법 1 sort 후 진행
// 방법 2 그떄 그때 진행

function movingStuff(stuff, limit) {
  // Todo 매 순간의 최선의 선택 -> 매 순간마다 최소 값을 limit에서 빼본다.
  // stuff를 오름차순으로 정렬한다.
  // stuff의 길이가 0이 아닐 떄까지 반복문을 돌린다.
  //let count= getBox 메서드를 사용하여 count를 구한다.
  // count를 return 한다.

  const getBoxCount = (arr) => {
    // 제일 큰 것과 제일 작은 것을 뽑아서
    // 제일 큰 짐을 max 넣는다. pop()
    // 가장 작은 짐을 min에 넣는다.
    // max와 min을 더한 것이 limit보다 큰지 확인한다.
    // 크지않다면 arr.pop() & return 1
    // 크다면 return 1

    let max = arr.pop();
    let min = arr[0];
    let len = arr.length + 1;

    for (let i = 0; i < len; i++) {
      if (max + min <= limit) {
        arr.shift();
        return 1;
      } else return 1;
    }
    return 1;
  };

  stuff.sort((a, b) => a - b);
  let count = 0;
  while (stuff.length) {
    count += getBoxCount(stuff);
  }
  return count;
}

let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

let output1 = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output1); // 4

let output2 = movingStuff(
  [
    46, 231, 213, 192, 89, 94, 65, 76, 54, 65, 42, 64, 63, 75, 86, 115, 112,
    129, 133, 149, 151, 167, 179, 183, 198, 210, 221,
  ],
  240
);
console.log(output2); // --> 16

let output3 = movingStuff([42, 25, 60, 73, 103, 167], 187);
console.log(output3);
// -->4
