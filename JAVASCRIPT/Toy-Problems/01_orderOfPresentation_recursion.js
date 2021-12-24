// 01_orderOfPrestneation
// 총 조의 수 N과 선생님이 말씀하시는 발표 순서 k가 주어질 때, 김코딩이 정답을 말할 수 있는 올바른 리턴값을 구하라
// ex ) n=3이고 k가 [2,3,1]인 일 경우 
// 모든 경우의 수를 2차원 배열에 담는다면 [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]이 되고 반환값은 3이 된다.
// --------------------------------------------------------------------------------------------------


    function recursion(arr){
    let result=[]; 
    let tail=[];
    
    if (arr.length === 2) {
        for(let i=0;i<2;i++){
            let head=arr[i]
            if(i===0){
                tail=[arr[1]]
                tail.unshift(head);
                result.push(tail);
            }
            else{
                tail=[arr[0]];
                tail.unshift(head);
                result.push(tail)
            }
        }
    }
    else {

        for(let i=0;i<arr.length;i++){
            let head=arr[i];
            if(i===0){
                tail=recursion(arr.slice(1));
                tail[1].unshift(head)
                tail.map((el)=>el.unshift(head))
                result.push(...tail);
            } else{
                tail=recursion(arr.slice(0,i).concat(arr.slice(i+1)));
                tail.map((el)=>el.unshift(head))
                result.push(...tail);
            };
        }
    }
    
    return result;
}




function orderOfPresentation (N, K) {

    let tamp=K.slice()

    let sortedArr=tamp.sort((a,b)=>a-b);
    const allOrder=recursion(sortedArr)


    for(let j=0;j<allOrder.length;j++){
        let isTrue=true
        for(let i=0;i<N;i++){
            if(allOrder[j][i]!==K[i]) {
              isTrue=false
            }
        }
            if(isTrue) return j         
   
  }
}



let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3

output = orderOfPresentation(5, [1, 3, 2, 4, 5])
console.log(output); // 6





output=orderOfPresentation(5,[5,1,2,3,4])
console.log(output)






// const allOrder=recursion([1,2,3,4,5]);
// const K=[1,3,2,4,5];
// const N=5;


// for(let j=0;j<allOrder.length;j++){
//     let isTrue=true;
//     for(let i=0;i<N;i++){
//     // if(j===6) console.log(allOrder[6][i] , K[i])
//         if(allOrder[j][i]!==K[i]) {
//           isTrue=false
          
//         }          
//     }
//     if(isTrue) console.log(j)

// }