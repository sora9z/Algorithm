// 13_readVertically
// 문자열을 요소로 갖는 배열을 입력받아 문자열을 세로로 읽었을 때의 문자열을 리턴해야 합니다


function readVertically(arr) {

  // code goes here
  //  변수를 한 개 선언하고 입력된 배열을 깊은 복사로 복사한다. 
  // 문자열을 넣을 변수를 한  개 선언하고 빈  문열로 초기화 한다. (result)
  // 무한루로 반복문을 사용한다
    // arrCopy[i].shift() 를 사용하여 i번째 요소의 첫 번째 요소를 삭제하고 삭제한 값을 arr2 에 넣는다
    // arrCopy.length===0이면 반복문을 나온다.
  // filter를 사용하여 arrCopy의 요소에서 길이가 0이 아닌 요소만 추출한다.
  // arr join 하여 문자열로 만들고 return gksek
  
  let arrCopy=arr.map((el)=>el.split(""))    
  let arr2=[];
  const index=0;       
  
  
  while(true){

    if(arrCopy.length===0) break;

    for (let el of arrCopy) {
      if (el[0] === undefined) continue
      arr2.push(el[0])
      el.shift()
    }
    arrCopy=arrCopy.filter((el)=>el.length!==0)
       
  }
  
  return arr2.join("")
  
  }
  let input = ['YCDt', '' ,'oaounI', 'every'];
  let output = readVertically(input);
  console.log(output); // --> 'hweolllrod'


  // 2x. 전치행력 구하기
    // 배역의 각 요소를 1차원 배열로 저장한다
    // 전치행렬을 넣을 빈 배열의 변수를 선언하기 위해 for문을 사용한다
      // arr의 길이만큼 반복문을 돌린다
      // 각 요소에 접근하여 Array()를 할당한다
    
    // 이중 for 문을 사용한다
      // 각 요소의 행과 열을 바꾼다
    // reduce를 사용하여 각 요소를 문자열로 만든다

  //   let transpose=[]
  
  //   for(let i=0;i<arr.length;i++) transpose[i]=Array()
  //   let result=""
    
  //   let twoDimArr=[""]
  //  for(let str of arr){
  //    let strToarr=str.split("")
  //    console.log(strToarr)
  //    twoDimArr.push([strToarr])
  //  }
  //  console.log(twoDimArr)


    // for(let i=0;i<arr.length;i++){
    //   for(let j=0;j<arr[i].length;j++){
    //     transpose[j][i]=arr[i][j]
    //   }
    // }

    // for(let i=0;i<twoDimArr.length;i++){
    //   for(let j=0;j<twoDimArr[i].length;j++){
    //     transpose[j][i]=twoDimArr[i][j]
    //   }
//     return result=transpose.reduce((acc,cur)=>acc+=cur.join(""))
// }

// let input = ['YCDt', 'oao', 'unI'];
// let output = readVertically(input);
// console.log(output)



