// 02_isOdd
// 문제 : 수를 입력받아 홀수인지 여부를 리턴한다.
// input : num 타입의 정수
// output : boolean 타입
// 주의사항 : 재귀로 작성한다.
// 반복문 , /, % 사용 금지
// 0은 짝수로 구분
// -------------------------------------------------------------






function isOdd(num) {
    // num이 0보다 작으면 -1을 곱한다
    // num이 0이면 False를 return 한다.
    // num이 1이면 True를 return 한다.
    // f(n-2)를 return 한다.
  
    if(num<0) num*=-1;
  
    if(num===0) return false;
    else if(num===1) return true;
    return isOdd(num-2);
  
  }

function isOdd2(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 만약 num===0 이면 return False --> 종결조건
    // if :function(num-1) : False --> return T
    // else : return F
    /*
    f(3) -> f(2) -> f(1) --> f(0)
      T       F       T       F
    */
    
    if (num < 0) {
        num=num * (-1);
        console.log(num)
    }

  
    if(num===0) return false;
    else if(!(isOdd(num-1)))  return true; 
    else return false;
  
  }

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false