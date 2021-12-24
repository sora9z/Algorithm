// filterCallback
// 문제 : 함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 결과가 참인 요소만을 갖는 새로운 배열을 리턴해야한다.
// 입력 : func : num 타입을 입력받아 bollean 타입을 리턴하는 함수 , arr : num 타입을 요소로 갖는 배열, 요소는 0이상의 정수
// 출력은 배열을 리턴해야한다.
// 반복문 사용 filter 금지, 빈배열을 입력될 경우 빈 배열을 리턴한다

function filterCallback(func,arr){

    // 결과를 넣은 result 변수를 선언하고 빈 배열을 할당한다.
    // arr의 길이만큼 for문을 돌린다
        // func(요소)가 참이면 
        // result에 요소를 push한다.
    // result를 리턴한다
    let result=[];
    for(let el of arr){
        if(func(el)) result.push(el)
    }
    
    return result
}

function isOdd(num) {
    return num % 2 === 1;
  }

let output = filterCallback(isOdd, [1, 2, 3, 4]);
console.log(output); // --> [1, 3]


