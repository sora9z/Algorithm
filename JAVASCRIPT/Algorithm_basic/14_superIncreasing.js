// 14_superIncreasing
// 수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.
// 입력 
//     인자1 : 수를 요소로 갖는 배열
//            arr[i]는 정수
// 출력 
//    boolean 타입을 리턴해야 합니다.
//    arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.


// Note : 
//     항상 한 개의 문자열 'B'가 존재합니다
    
/*-------------------------------------------------------------------------*/

function superIncreasing(arr) {

    // 이전 요소들의 합을 넣을 변수를 선언한다
    // 반복문을 사용하여 이전 요소들의 합을 구하고 각 요소와 비교한다
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= sum) return false
        sum += arr[i]
    }
    return true

    
  }
  ㄴ





let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false
