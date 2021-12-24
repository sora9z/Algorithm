// 01_orderOfPrestneation
// 총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말할 수 있는 올바른 리턴값을 구하라
// ex ) n=3이고 k가 [2,3,1]인 일 경우 
// 모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고 반환값은 3이 된다.
// --------------------------------------------------------------------------------------------------


function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.
    // 아 고민과 고민 끝에 경우의 수를 factorial을 사용하여 구했다. 

    // 먼저 factorial을 구하는 함수를 작성한다.
    // result를 넣을 변수를 선언하고 0으로 초기화한다.
    // 1~N까지 정렬되어있는 배열을 만든다.

    // N만큼 반복문을 돌린다.
      // 만약 K[i]===sortArr[i]
        // result+=0;
        // sortArr[i]=undefined
      // else
        // let temp=sortArr.filter((el)=>el<K[i]))
        // result+=temp.length*factorial(N[i]-1);
        // let idx=sortArr.indexOf(N[i])
        // sorArr[idx]=undefined

        let result=0;
        let sortArr=[]
        for(let i=1;i<=N;i++) sortArr.push(i);

        for(i=0;i<N;i++){     
          
            let temp=[]
            temp=sortArr.filter((el)=>el<K[i])
            // if(temp.length===0) temp=[1];
            result+=temp.length*factorial(N-i-1)
            let idx=sortArr.indexOf(K[i]);
            sortArr[idx]=undefined;          
        }
        return result;
     
}

const factorial=(num)=>{
  if(num===0 || num===1) return 1;
  return num*factorial(num-1);
}


let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

let output2 = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output2); // 6

let output3 = orderOfPresentation(5,[3, 4, 1, 2, 5])
console.log(output3) // 60

output=orderOfPresentation(5,[5,1,2,3,4])
console.log(output)


   