// 17_computeSquareRoot
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.
// input : num 타입의 정수 (num>=2)
// output: num타입, 최대 소수점 둘째 자리까지 구한다.(소수점 셋째에서 반올림)
// 주의 : Math.sqrt 금지



    function computeSquareRoot(num) {
        // TODO: 여기에 코드를 작성합니다.
      
        // 힌트를 사용하지 않고 직접 구해본다.
        // let sqrt 제곱근을 0.5승 을 하여 구한다.
        // 소수점을 구하기 위해 아래의 단계를 시행한다
          // 1. num1 num2 를 각각 선언하고 num1=pareInt(sqrt*1000)을 num2=parseInt(sqrt*100)*10을 해준다.
          // 2. num3을 선언하고 num1-num2의 결과를 넣고 
          //결과를 넣을 result 변수를 선언한다
          // 3. 만약 num3이 5보다 크거나 같으면, result=num2+10을 할단한다.
          // 4. 작다면, result=num2를 할당한다.
        // result*10**(-3)을 출력한다.

      // 근사값을 구하는 방법 1. num은 0.5승 해준다
        let sqrt=num**0.5;
    // 소수점 2번째 자리까지 구하는 방법 1.
        let num1=parseInt(sqrt*1000);
        let num2=parseInt(sqrt*100)*10;
        let num3=num1-num2;
        let result=0;
        
        if(num3>=5)result=num2+10;
        else result=num2;
      
        return result*10**(-3);
        
        
      }
     



// 소수점 몇 번째  자리까지 구하는 방법 2. Method 사용
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

function compareScope(num){

    // 근사값 구하는 방법 2. 대소비교 (중등?고등? 수학에서 배운듯) 
    // a< sqrt(num) <b 에서 
    // a =1 
    // b의 초기값을 구하는 구문
    // 반복문을 사용하여 b의 초기값을 구한다 
    // while(true) b+=1  b*b>num -> break
    // sqrt(x)의 근사값을 구하는 방법은 a< x <b 일 때, 
    //if b-a<=0.01 x=a,break 일때까지 반복문을 돌린다
    //  (a+b/2)^2 > x ==> b==> a+b/2
    //  (a+b/2)^2 < x ==> a==> a+b/2
    
    // 1. a,b 초기값 구하기
    let a=1,b=0;
    // let num=3;
    
    while(true){
        b+=1;
        if(b*b>num) break;
    }
    
    // 2. num의 근사값 구하기
    let sqrt=0;
    let temp=0; // 제곱하여 num과 대소 교를 할 값을 넣은 임시변수
    
    while(true){
        if((b-a)<=0.001){
            sqrt=a
            break;
        }
        temp=(b+a)/2;
        if(temp**2>num) b=temp;
        else a=temp;    
    }
    console.log(sqrt);
    
}
  

// let output = computeSquareRoot(9);
// console.log(output); // --> 3

// output = computeSquareRoot(6);
// console.log(output); // --> 2.45

// let output1 = financial(9);
// console.log(output); // --> 3

// output1 = financial(6);
// console.log(output); // --> 2.45





