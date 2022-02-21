// 09_power
// 문제 : 두 수를 입력받아 거듭제곱을 리턴해야한다.
// 입렵 : base number 타입의 자연수 (>=2)
// exponent : number type의 정수 (>=0)
// 출력 : number type
// 주의 : O(lonN)을 만족해야 한다.
// 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야한다. (94,906,249보다 크면)
// 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문.
// 연산 할 때마다 나머지를 구하고 그 결과에 연산을 이어가야한다.
// --------------------

// ! 방법 1 재귀적으로 풀기
console.log("방법 1 일반 재귀");
// base^n = base^1/2n x base^1/2n 을 반복한다.
// exponent가 홀수인지 짝수인지에 따라 구동되는 코드가 다르다.

function power1(base, exponent) {
  // 종결조건 : exponent ===2 이면 base*base를 반환한다.
  const max = 94906249;
  if (exponent === 0) return 1;

  // 결과를 넣을 변수 , exp/2를 넣을 변수를 선언한다

  //만약 exponent 가 짝수라면
  if (!(exponent % 2)) {
    let half = power(base, exponent / 2) % max; // exponent/2를 넣은 재귀함수를 할당
    return (half * half) % max; // result는 half * half 이다.
  } else {
    let half = power(base, (exponent - 1) / 2) % max; // exponent/2를 넣은 재귀함수를 할당
    return (((half * half) % max) * base) % max; // 홀수인 경우
  }
}

let output1 = power1(2, 10);
console.log(output1);

console.time();
let result1 = power1(5, 22);
console.log(result1);
console.timeEnd();

// ! 방법 2 재귀 말고 반복문으로 구현 이 방법은 마지막 케이스 통과 안됨
function power2(base, exponent) {
  const maxRange = 94906249; // 구할 결과의 max 범위

  let half = 1; // base^exp의 half 값을 넣을 변수 초기 값은 base

  // exp/2 번 반복문을 돌리고 base^exp를 2로 나눈 값을 구한다.
  for (let i = 0; i < Math.floor(exponent / 2); i++)
    half = (half * base) % maxRange;

  //만약 exponent 가 짝수라면
  if (!(exponent % 2)) return (half * half) % maxRange;
  // 홀수인 경우
  else return (((half * half) % maxRange) * base) % maxRange;
}

let output2 = power2(2, 10);
console.log(output2);

console.time();
let result2 = power2(5, 22);
console.log(result2);
console.timeEnd();

// ! 방법 3 재귀 + memo
// base^n = base^1/2n x base^1/2n 을 반복한다.
// exponent가 홀수인지 짝수인지에 따라 구동되는 코드가 다르다.
console.log("방법 3 재귀 + memo");
function power(base, exponent) {
  const memo = [1, base, base * base]; //값을 기억 할 배열을 선언하고 초기값을 넣는다
  const max = 94906249; // 범위

  const powerRecur = (exponent) => {
    // memo에 값이 들어있다면 값을 return
    if (memo[exponent]) return memo[exponent];
    else {
      if (!(exponent % 2)) {
        //만약 exponent 가 짝수라면
        let half = powerRecur(exponent / 2) % max; // exponent/2를 넣은 재귀함수를 할당
        memo[exponent / 2] = half % max; // memo에 저장
        memo[exponent] = (half * half) % max; // memo에 저장
        return memo[exponent];
      } else {
        let half = powerRecur((exponent - 1) / 2) % max; // exponent/2를 넣은 재귀함수를 할당
        memo[(exponent - 1) / 2] = half % max; // memo에 저장
        memo[exponent] = (((half * half) % max) * base) % max; // memo에 저장
        return memo[exponent];
      }
    }
  };

  let result = powerRecur(exponent) % max;
  return result;
}

let output3 = power(2, 10);
console.log(output3);

console.time();
let result3 = power(5, 22);
console.log(result3);
console.timeEnd();
// 0.114
