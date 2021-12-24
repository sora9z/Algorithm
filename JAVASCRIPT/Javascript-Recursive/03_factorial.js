// 03_factorial
// 문제: 수를 입력받아 n! 값을 리턴한다.
// input : num 타입의 정수
// output : num 타입 리턴
// ----------------------------------------------

function factorial(num) {
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    // 종결조건 num===0 일 때 return 1;
    // num*f(num-1)을 출력한다.
    if(num===0) return 1;
    return num*factorial(num-1);
  }

  let output = factorial(10);
console.log(output); // --> 3628800