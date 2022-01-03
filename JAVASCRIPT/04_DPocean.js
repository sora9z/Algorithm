/*
04_DPocean
금고를 털어라!!
입력 target을 훔칠 수 있는 방법의 수를 return 한다. 
입력 type은 100이하의 자연수를 담음 배열이며 금고 안에 있는 돈의 타입이다. 
출력 : Number type의 target을 훔칠 수 있는 방법의 수를 숫자로 반환한다.
*/

function ocean(target, type) {
  // type[i]일 때
}

function ocean2(target, type) {
  //Todo  : Knapsack Problem 앙 활용
  // len = Int(target/type[i])
  // for i=o to type.length+1
  //    for j=0 to target+1
  //      for i=1 to len
  //        dp[i][j]=dp[i-1][j] + dp[i-1][target-type[i]]*i...
  // return dp[-1][-1]
  let len = 0;
  let dp = [];
  for (let i = 0; i < type.length + 1; i++) {
    dp.push([]);
    len = parseInt(target / type[i]);
    for (let j = 0; j < target + 1; j++) {
      if (i === 0 || j === 0) dp[i].push(0);
      else if (i === 1 && type[i - 1] === j) dp[i].push(1);
      // base case :1개를 사용하고 첫 번쨰인 경우 1을 넣는다.
      else if (type[i - 1] <= j) {
        // 계산 하려는 coin이 현재 target인 j보자 작거나 같아야 한다.
        dp[i].push(dp[i - 1][j]);
        for (let k = 1; k < len + 1; k++) {
          dp[i][j] += dp[i - 1][j - type[i] * k];
        }
      } else dp[i].push(dp[i - 1][j]); // coin이 target보다 크다면 이전 값을 갖는다.
    }
  }
}

//! 아래의 방식은 전체 경우를 확인하는 브루트포스 방법이라 time out 발생한다.
function ocean1(target, type) {
  // TODO: type에서 몇 개씩 떠내서 target을 만족하는 방법을 구하는 문제이므로 결국 조합 문제이군
  /* 이 문제는 다음과 같이 Tree 구조로 구조화가 가능
  최종결과 - 결과1 + 결과 1-1 과 같은 식으로 킅 결과는 소결과+소결과 가 되고 소결과는 다시 소소결과+소소결과 가 된다. 
  */
  let count = 0;

  // 재귀함수를 선언한다.
  const recur = (el, result) => {
    const coin = type[el]; // 계산 할 coin type
    const len = Math.floor(result / coin); // resulr에 들어갈 수 있는 coin 개수의 최댓값

    if (el === type.length - 1) return coin * len === result ? count++ : false;

    for (let i = 0; i <= len; i++) {
      let newResult = result - coin * i; // 선택한 coint의 개수 만큼 result에서 뺀다.
      newResult == 0 ? count++ : recur(el + 1, newResult); // 만약 newResult가 target이면 count를 추가하고 아니면 재귀함수를 진행한다.
    }
  };
  type.sort((a, b) => b - a);
  recur(0, target);

  return count;
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output1 = ocean(100, [10, 20, 50]);
console.log(output1); // 10

let output2 = ocean(30, [5, 6, 7]);
console.log(output2); // 4

// let output3 = ocean(10000, [24, 36, 83, 47, 92, 67, 87, 100, 97, 76, 35]);
// console.log(output3);
// // 84968945685777

let output4 = ocean(500, [48, 72, 28, 22, 18, 7]);
console.log(output4);
