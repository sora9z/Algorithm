// 21_mostFrequentCharacter
// 문제 : 문자열을 입력받아 가장 많이 반복되는 문자를 리턴한다
// Input : string 타입의 공백이 있는 문장
// output : string type을 리턴
// 주의 : 띄어쓰기는 제외한다
        // 가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴한다
        // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야한다.
// ------------------------------------------------------------


// 새로운 변수를 선언하고 str공백을 제거한 문자를 할당한다
// 만약 빈 문자열이면 빈 문자열을 return 한다
// 문자를 넣을 빈 객체를 선언한다
// 문자열의 길이만큼 반복문을 돌린다. 
    // 만약 요소가 " "이면 아무런 pass
    // 객체에 카로 문자가 없다면
        // 객체[키]=빈 배열을 선언하고
        // [0]째 인덱스에 해당하는 요소에 1을, [1]째 인덱스에 해당하는 요소에 i를 할당한다
// 아니라면, 객체[키][0]+=1을 ,객체[키][1]=i를 할당한다. 
// 객체의 값 중 최댓값을 갖는 요소를 찾기 위해 키만 배열로 뽑고 reduce를 사용하여 구한다.


// ------------------------------------------------------------

function mostFrequentCharacter(str){


    let newStr=str.split('').filter((el)=>el!==" ")
    if(newStr.length===0) return []
    let obj={};

// 유일한 문자를 키로, 값으로 길이가 2인 1차원 배열을 사용한다.
// 0번째 요소는 반복 횟수를 , 1번째 요소는 문자가 나오는 마지막 인덱스를 할당한다.
    for(let i=0;i<newStr.length;i++){
        let el=newStr[i]
        if(el===" ") continue
        else if(!(el in obj)){

            obj[el]=[];
            obj[el][0]=1;
            obj[el][1]=i;
        }

        else {
            obj[el][0] += 1;
            obj[el][1] =i;
            
        }  
    }    
    let objKey=Object.keys(obj);
   
    // reduce를 통해 조건에 맞는 값을 추출한다. 
    let result = objKey.reduce((acc, cur) => {

        let arrAc = obj[acc]; // 2차원 배열
        let arrCur = obj[cur]; // 2차원 배열  

// 반복 횟수가 같은 경우, 마지막 인덱스가 작은 것을 return 한다.
        if (arrAc[0] === arrCur[0]) {
            if(arrCur[1]<arrAc[1]){
                acc = cur
                return acc
            }
            else return acc
           
        }
        else if (arrCur[0] > arrAc[0]) {
            acc = cur
            return acc
        }
        
        else if ((arrAc[0] > arrCur[0])) return acc 

        

    }, objKey[0])
    console.log("result: ",result)      
    
}
    
    let output = mostFrequentCharacter('apples not oranges');
    console.log(output); // --> 'p'


    

    // function mostFrequentCharacter(str) {
    //     // TODO: 여기에 코드를 작성합니다.
    //     // 가장 많이 반복되는 문자가 다수 : 객체 1을 선언하여 반복 횟수를 넣는다
    //     // 가장 먼저 해당 횟수에 도달한 문자 : 객체 2를 선언하여 str에서 가장 마지막으로 key가 있는 index를 저장
    //     // 반복횟수를 넣을 객체(obj1)와 인덱스를 넣을 객체를(obj2) 각 각 선언한다.
    //     // 최댓값을 넣을 객체(obj3)를 선언한다.
      
    //     let countOfletter={} // 반복 횟수를 넣을 객체
    //     let indexOfletter={} // index를 넣을 객체
    //     let maxRepeatedLetter={ } // 최대 반복된 문자들의 index를 넣을 객체
    //     let maxValue=0; // 반복 횟수의 max 값을 넣어줄 변수
    //     let minVal=0; // 제일 먼저 도달한 문자의 인덱스
    //     let result=""; // 결과를 넣어줄 변수
      
    //     // str 길이만큼 반복한다.
    //       // obj1에서  key로 해당 문자가 없다면, key에 문자를 넣고 값을 1로 넣는다.
    //       // obj2 객체에도 key로 문자가 속해있는 index를 넣는다.
    //       // 만약 문자가 key로 있다면, 값에 ++를 해준다.
    //       // obj2 객체에도 key로 문자가 속해있는 index를 넣는다.
    //     // 먼저 문자열의 공백을 제거한다 
      
    //   str=str.replace(/(\s*)/gi, "");
    //   if(str.length===0){
    //       return "";
    //     } 
    //   for(let i=0;i<str.length;i++){
    //     if(!(str[i] in countOfletter)){
    //       countOfletter[str[i]]=1;      
    //      }else{
    //       countOfletter[str[i]]+=1;
    //           }
    //      indexOfletter[str[i]]=i;
    //      }
        
    //     // obj1 에서 최대값을 찾기 위해 Math.max() 와 ...Object.values(obj1)을 사용한다.
    //     maxValue=Math.max(...Object.values(countOfletter));
      
    //     // for let key in obj1을 사용하여  obj3에 최댓값을 갖는 obj를 키로 갖고, obj2[key]를 값으로 넣는다.
    //     // 반복문이 끝나고 obj3의 값이 가장 작은 문자를 리턴한다.
    //   for(let key in countOfletter){
    //     if(countOfletter[key]===maxValue){
    //       maxRepeatedLetter[key]=indexOfletter[key];
    //     }
    //   }
    //   //Object.keys(object).find(key => object[key] === value);
    //   minVal=Math.min(...Object.values(maxRepeatedLetter));
    //   result=Object.keys(maxRepeatedLetter).find(key=>maxRepeatedLetter[key]===minVal);
    //   return result;
    //   }
      
   