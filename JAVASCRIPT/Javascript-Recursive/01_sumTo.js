// 01_sumTo
// 문제 : 수를 입력받아 1부터 num까지의 합을 리턴해야 합니다.
// input number 타입의 정수
// output num타입 출력
// 주의 : 재귀하수의 형태로 작성한다.
// 반복문은 사용하지 않는다.
// 음수입력은 들어오지 않는다.
// -----------------------------------------------------------------
//  최적화 기법(memoization) 이 뭐지 ?

function sumTo(num) {
    if(num===1) return 1;
    else if(num===0) return 0
    return num+sumTo(num-1)
    
  }
  
  let output = sumTo(10);
console.log(output); // --> 55