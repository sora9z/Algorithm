// 15_modulo
// 문제 : 두 수(num1, num2)를 입력받아 , num1을 num2로 나눈 나머지를 리턴해야 한다.
// input : 2 개의 num타입 정수 
// ouput : num타입 리턴 
// 주의 : /, % 사용 금지 
// 0은 어떤 수로 나누어도 나머지가 0
// 0일 경우 Error 메시지 출력
// -----------------------------------------------------------------

function modulo(num1, num2) {
  
    // num2가 0인 경우 애러 메시지를 return 한다.
    // num1이 0이면 return 0
    // 반복문을 사용하여 num1-num2가 양수인 경우에만 반복문을 돌린다.
  
    if(num2===0) return "Error: cannot divide by zero";
    else if(num1===0) return 0
  
    
  
    while(num1-num2>=0){
      num1-=num2;
    }
    return num1
  
  
  
  }




let output = modulo(25, 4);
console.log(output); // --> 1
let output1=modulo()