// 04_fibonacci
// 문제 : 수를 입력받아 피보나치 수열의 num 번째 요소를 리턴헤야한다.
// 0 번째=0 . 1 번째 = 1, 2 번째 피보나치 수 부터는 바로 직전의 두 피보나치 수의 합이다.
// input : num 번 째 인자
// output : num 타입 리턴
// ---------------------------------------

function fibonacci(num) {
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    // 종결조건 : num 이 0이면 0 num이 1이면 1이다.
    // f(n-1)+f(n-2)를 출력한다.
    
    if(num===0) return 0;
    if(num===1) return 1;
  
    return fibonacci(num-1)+fibonacci(num-2);
  }
  
  let output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34