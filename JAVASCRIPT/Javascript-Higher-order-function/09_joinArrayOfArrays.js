// 29_joinArrayOfArrays
// 문제 : 2차원 배열을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴한다.
// input : arr (임의의 요소를 갖는다)
// output : 배열의 모든 요소들을 1단계 단일 배열로 이어붙인 배열을 리턴
// 주의 : 반복문 사용 금지 , all.flat 사용 금지
// -----------------------------------------------

// 1. concat & reduce 이용

// function joinArrayOfArrays(arr){
    
//     return arr.reduce((acc,el)=>{        
//         return acc.concat(el)
//     },[])    
// }

// flattering 함수를 마들어서 사용한다


function flattering(arr, depth, temp) {

    // 입력은 flattering 하고싶은 배열, flattering 원하는 깊이(차원),flattering 결과를 넣어줄 배열
    // 배열을 넣을 빈 배열을 선어한다
    // 반복문을 사용하여 배열의 요소에 접근한다.
    // 요소가 배열이고 depth가 0보다 크면
    //  flattering(el,deoth-1)
    // 아니면 (요소가 배열이 아니고 depth가 0이면)
    // 빈 배열에 el을 push 한다.        


    for (let el of arr) {
        if (Array.isArray(el) && depth > 0)
            flattering(el, depth - 1,temp)
        else temp.push(el)
    }
    return temp    

}
        
        

let temp=[]
let input=[
    [1, 4],
    [true, false],
    ['x', 'y'],
]

let flatterArr=flattering(input,1,temp)

  
console.log(flatterArr); // --> [1, 4, true, false, 'x', 'y']