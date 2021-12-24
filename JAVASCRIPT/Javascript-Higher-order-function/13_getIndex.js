//13_getIndex
// 문제 : 정수를 요소로 갖는 배열과 정수를 입력받고 정수를 배열에 정렬할 경우 num의 인덱스를 리턴한다
// 입력 : 0이상의 정수 num 타입을 요소로 갖는 arr, num타입의 정수
// 출력 : num타입을 리턴
// 주의사항 : 반복문 사용 x, arr.sort, arr.indexOf 사용 x , num은 arr의 어떤 요소와도 같지않다.

function getIndex(arr,num){

    return arr.filter((el)=>el<num).length;
}


let output = getIndex([5, 4, 1, 3], 2);
console.log(output); // --> 1

output = getIndex([10, 5, 1, 3], 13);
console.log(output); // --> 4
