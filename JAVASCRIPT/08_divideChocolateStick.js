/*
M개의 A 빼뺴로와 N개의 B 빼뺴로를 k명의 직원에세 공평하게 나누어 주는 방법을 구하는 함수를 작성
A빼뺴로가 4개 B빼뺴로가 8개인 경우, 직원이 2명 이라면 A 뺴빼로를 2개, B를 4개 씩 공평하게 나눠준다.
입력 : 인자 M (1<=M<=100,000,000) , 인자 N (1<=N<=100,000,000)
출력 : 2차원 배열 output을 return 해야한다.
output[i]는 [빼빼로를 받게 되는 직원의 수, 나누어 주는 아몬드 빼빼로의 수, 나누어 주는 누드 빼빼로의 수] 의 인자를 갖고있는 길이 3의 배열이다
output[i][0]을 기준으로 오름차순으로 정렬한다.
*/

function divideChocolateStick(M, N) {
  // TODO:이 문제는 직원 수, A뺴뱨로, B빼빼로의 최대공양수로 나누는 문제이므로 GCD 문제
  // Todo: 먼저 M과 N중에 최솟값의 약수를 구한다.
  // Todo : n의 약수는 루트n보다 작은 수의 약수를 먼저 구하고 나머지 약수는 구한 약수를 나누어 계산한다.

  let min = Math.min(M, N);
  let max = Math.max(M, N);

  let divisors = getDivisors(min); // 최솟값의 약수들을 구한다.
  let result = [];
  for (let el of divisors) // maxr값과 나눴을 때 약수가 되는 것들만 배열로 만든다.
    max % el === 0 ? result.push([el, M / el, N / el]) : null;

  return result;
}

const getDivisors = (num) => {
  let result = [];
  for (let i = 1; i * i <= num; i++)
    // i가 제곱근이면 i만 배열에 넣어주고 아니라면 i와 n을 i로 나눈 값도 넣어준다
    if (i * i === num) result.push(i);
    else if (num % i === 0) result.push(...[i, num / i]);

  return result.sort((a, b) => a - b);
};

function divideChocolateStick2(M, N) {
  // TODO:이 문제는 직원 수, A뺴뱨로, B빼빼로의 최대공양수로 나누는 문제이므로 GCD 문제

  // for i=1 to 직원 수
  // if  M % 직원 수 ===0 ? && N % 직원 수 ===0?
  //  output push [직원 수 ,M/직원 수, N/직원 수]
  // if 직원 수 > Min break return output

  // 만약 두 수가 같다면

  let min = Math.min(M, N);
  let result = [];

  for (let i = 1; i < min + 1; i++)
    M % i === 0 && N % i === 0 ? result.push([i, M / i, N / i]) : null;

  return result;
}

//! test
let M = 20;
let N = 10;
let output = divideChocolateStick(M, N);
console.log(output);
// [[1, 4, 8], [2, 2, 4], [4, 1, 2]]

// let output2 = divideChocolateStick(1000000000, 1000000000);
// console.log(output2);
