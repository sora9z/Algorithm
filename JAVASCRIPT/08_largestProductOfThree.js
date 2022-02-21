// ! 방법 1
// ? 양수인 요소와 음수인 요소를 따로 배열로 빼서
// ? 음수 2개, 양수1개인 경우와   양수3개인 경우를 비교하여 큰 값을 결과로 한다.

const largestProductOfThree = function (arr) {
  // 만약 길이가 3이라면 그대로 곱한다.
  if (arr.length === 3) return arr.reduce((acc, cur) => acc * cur, 1);
  // 결과를 넣을 길이 2의 result 배열을 선언한다. 곱할 것이므로 1을 할당한다
  const result = new Array(2).fill(1);
  // 반복문을 사용하여 arr의 음수인 요소와 양수인 요소를 따로 빼고 크기로 sort 한다. (0은 제외하다)
  let positiveNum = arr.filter((el) => el >= 0).sort((a, b) => a - b);
  let negativeNum = arr.filter((el) => el < 0).sort((a, b) => b - a);

  // 만약 양수의 갯수가 0개이면 음수 세 개를 곱한 것을 return 한다.
  if (!positiveNum.length) {
    for (let i = 0; i < 3; i++) result[0] *= negativeNum.shift();
    return result[0];
  }
  // 만약 음수의 갯수가 0개이면 양수 세 개를 곱한 것을 return 한다.
  else if (!negativeNum.length) {
    for (let i = 0; i < 3; i++) result[0] *= positiveNum.pop();
    return result[0];
  }

  // 만약 positiveNum  의 갯수가 3개 이하이면
  if (positiveNum.length < 3) {
    // ? 음수 2개 , 양수 1개를 곱한 값을 result에 넣느다.
    // result[0]에 negativeNum의 끝에 있는 두 개의 요소를 곱한다.
    for (let i = 0; i < 2; i++) result[0] *= negativeNum.pop();
    // 양수1개를 곱한 값을 result[0]에 넣는다.
    result[0] *= positiveNum.pop();
    // resultl[0]===0인 경우 (즉 0을 곱한 경우) return 0
    if (result[0] === 0) return 0;
    return result[0];
  } else {
    // ? 음수 2개 , 양수 1개를 곱한 값을 result에 넣느다.
    // result[0]에 negativeNum의 끝에 있는 두 개의 요소를 곱한다.
    for (let i = 0; i < 2; i++) result[0] *= negativeNum.pop();
    // 양수1개를 곱한 값을 result[0]에 넣는다.
    result[0] *= positiveNum.pop();
    // resultl[0]===0인 경우 (즉 0을 곱한 경우) return 0
    if (result[0] === 0) return 0;

    // ?양수 3개를 넣는 경우
    for (let i = 0; i < 3; i++) result[1] *= positiveNum.pop();
    // result에서 최댓 값을 return 한다.
    return Math.max(...result);
  }
};
