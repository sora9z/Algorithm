// 32_sumOfArrayInArray
// 문제 : 2차원 배열을 입력받아 모든 수의 합을 리턴
// input : 2차원 배열 . 배열이 요소는 임의의 타입을 갖는다
// output : number 타입의 배열

function sumOfArrayInArray(arr){

    // 배열을 한개 선언하고 arr.flat(1)을 사용하여 전체 요소를 1차원 배열로 바꾼다.
    // 또는 reduce와 concat을 사용하여 각 요소를 1차원 배열로 만든다.

    // filter를 사용하여 타입이 number인 요소만 추출한다.
    // reduce를 사용하여 전체 합을 구하고 리턴한다.

    let temp=arr.flat(1)

    return temp.filter((el)=>typeof(el)==='number').reduce((acc,cur)=>{
       return  acc+=cur;
    },0);    

}


let output = sumOfArrayInArray([
    [1, 2],
    [undefined, 4, '5'],
    [9, 'hello'],
  ]);
  console.log(output); // --> 16