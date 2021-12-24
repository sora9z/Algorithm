// 12_findBugInApples
// 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 'B'의 위치 정보를 요소로 갖는 배열을 리턴해야 합니다.
// 입력 
//     인자1 : arr 타입을 요소로 갖는 배열 , arr[i]는 'A' 또는 'B'만을 요소로 갖는 배열
// 출력 
//    'B'의 위치 정보(행, 열)를 요소로 갖는 배열을 리턴해야 합니다
// Note : 
//     항상 한 개의 문자열 'B'가 존재합니다
    
/*-------------------------------------------------------------------------*/


function findBugInApples(arr) {
    // 반복문을 사용하여 2차원 배열이 1차원 배열에 'B'의 인덱스를 리턴한다.

    // 행을 입력 받을 변수를 선언
    // 열을 입력 받은 변수를 선언
    // 반복문을 사용한다
        // arr[i].indexOf('B')!==-1 이면 
            // row=i 를 할당하고 col엔 indexOf(B)를 할당한다
    // [row,col]을 반환한다 
    let row=0;
    let col=0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].indexOf('B')){
            row=i;
            col=arr[i].indexOf('B');
        }
    }
    return [row,col]    
  }



let output = findBugInApples([['A'], ['B']]);
console.log(output); //[1, 0]

output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output); //[1, 1]