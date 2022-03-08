/*
06_newCheckenRecipe
문제 : N 가지의 재료 중에 M가지만을 사용하여 조합한 모든 경우의 수를 구한다. 
배열에는 0과 1로 이루어진 숫자로 이루어져있다.
항상 1로 시작하며 0이 3개 이상이면 제외한다.
순서에 따라 다르게 취흡한다.

입력 : stuffArr Number 타입의 숫자를 담은 배열 
요소는 0,1로만 이루어진 숫자이며 항상 1로 시작한다.
요소는 중복될 수 없다.
요소의 길이는 20 이하이다.
2<=배열.길이<=10

입력2 : choiceNum : Number Type의 1이상 stuffARr 길이 이하의 자연수
재료(배열의 요소)를 선택할 수 있는 수를 의미한다 .

출력 : 
Number 타입을 반환한다. 
주의사항 : 모든 배열을 사용할 수 없거나 사용 가능한 요소의 개수가 choiceNum 보다 작다면 []을 반환한다.
조합 및 요소는 작은숫자 -> 큰숫로 정렬한다. 

예시로 [1, 10, 11000, 1111]이 요소로 들어왔다면, 0이 세 개인 11000을 제외하고 [1, 10, 1111] 순서가 되어야 하며,
[ [1, 10], [1, 1111], [10, 1], [10, 1111], [1111, 1], [1111, 10] ]을 반환해야 합니다.
*/

//! 다시 풀어봄 . 개선사항 -> data 전처리 코드 regex 사용 -> 간략화  , dfs 코드 정리
// 데이터 처리 -> 03개 이상인 인자 삭제
// Error Handling -> 배열의 길이가 choiceNum보다 작으면 출력 빈 배열
// dfs(arr,depth)
//  for to stuffArr
//  if isValid(elem)
//    if(choiceNum===1)
//      result.push(arr.concat(elem))  return
//    else -> dfs(arr.concat(elem),choiceNum--)
// return result
function newChickenRecipe(stuffArr, choiceNum) {
  // sort
  stuffArr.sort((a, b) => a - b);
  const newStuffArr = [];

  // data 전처리
  stuffArr.forEach((ingred) => {
    let machCheck = ingred.toString().match(/[0]+/g);
    let zeroCount = machCheck ? machCheck.join("").length : 1;

    if (zeroCount < 3) {
      newStuffArr.push(ingred);
    }
  });

  // Error Handling
  if (newStuffArr.length < choiceNum) return [];

  let result = [];

  // dfs
  const dfs = (arr, isValid, depth) => {
    for (let i = 0; i < newStuffArr.length; i++) {
      let elem = newStuffArr[i];
      if (!isValid[i]) {
        if (depth === 1) {
          result.push(arr.concat(elem));
        }
        isValid[i] = 1;
        dfs(arr.concat(elem), isValid, depth - 1);
        isValid[i] = 0;
      }
    }
  };
  let isValid = new Array(newStuffArr.length).fill(0);
  dfs([], isValid, choiceNum);
  return result;
}

function newChickenRecipe1(stuffArr, choiceNum) {
  // TODO 이 문제는 순서가 상관있는 순열 개념을 사용한 문제.
  const newStuff = getNewStuffs(stuffArr); // 0이 3개 이상이면 제외하는 배열
  const result = [];
  if (newStuff.length < choiceNum) return result;

  //? 순열 df
  const dfs = (depth, visited, arr) => {
    arr = arr ?? [];
    let len = newStuff.length;
    visited = visited ?? new Array(len).fill(0);

    if (depth === 1)
      // depth가 0이면 제일 마지막 node까지 왔으므로 레시피 한 개가 환성됨을 의미한다.
      for (let i = 0; i < len; i++) {
        arr.push(newStuff[i]);
        if (!visited[i]) result.push([...arr]);
        arr.pop();
      }

    for (let i = 0; i < len; i++) {
      arr.push(newStuff[i]); // newStuff의 인자 중 i번째를 넣는다.
      if (!visited[i]) {
        visited[i] = 1;
        dfs(depth - 1, visited, arr); // 방문한 적이 없다면 dfs
        visited[i] = 0;
      }
      arr.pop();
    }
    return;
  };
  dfs(choiceNum);

  return result;
}

//? 0이3개 미만인 요소만을 추출하는 함수
const getNewStuffs = (arr) => {
  // 0이 3개 이상 있는 요소를 제외한 배열을 filter한다.
  // 0이 3개 이상이면 1000 숫자가 1000이상이어야 한다.
  let result = [];
  for (let el of arr) {
    if (el >= 1000) {
      let toArr = el.toString().split("");
      let numOfZero = toArr.filter((el) => el === "0").length;
      if (numOfZero >= 3) continue;
      else result.push(el);
    } else result.push(el);
  }

  return result;
};

//! test
const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);
/*
  [
    [1, 10], [1, 1100], [1, 1111],
    [10, 1], [10, 1100], [10, 1111],
    [1100, 1], [1100, 10], [1100, 1111],
    [1111, 1], [1111, 10], [1111, 1100]
  ];
*/

// const output2 = newChickenRecipe([10000, 10, 1], 3);
// console.log(output2); // []

// const output3 = newChickenRecipe([11, 1, 10, 1111111111, 10000], 4);
// console.log(output3);
/* 
  [
    [1, 10, 11, 1111111111],
    [1, 10, 1111111111, 11],
    [1, 11, 10, 1111111111],
    [1, 11, 1111111111, 10],
    [1, 1111111111, 10, 11],
    [1, 1111111111, 11, 10],
    [10, 1, 11, 1111111111],
    [10, 1, 1111111111, 11],
    [10, 11, 1, 1111111111],
    [10, 11, 1111111111, 1],
    [10, 1111111111, 1, 11],
    [10, 1111111111, 11, 1],
    [11, 1, 10, 1111111111],
    [11, 1, 1111111111, 10],
    [11, 10, 1, 1111111111],
    [11, 10, 1111111111, 1],
    [11, 1111111111, 1, 10],
    [11, 1111111111, 10, 1],
    [1111111111, 1, 10, 11],
    [1111111111, 1, 11, 10],
    [1111111111, 10, 1, 11],
    [1111111111, 10, 11, 1],
    [1111111111, 11, 1, 10],
    [1111111111, 11, 10, 1],
  ]
*/
