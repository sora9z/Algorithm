// 11_removeExtremes
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 긴 문자열을 제거한 배열을 리턴해야 합니다.
// 입력 
//     인자1 : string 타입을 요소로 갖는 배열 , arr[i].length<=20
// 출력 
//     배열을 리턴해야한다
// Note : 
//     가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없다고 가정한다.
//     가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거한다.
    
/*-------------------------------------------------------------------------*/


// 길이가 긴 문자를 넣을 변수(longStr)를 선언하고 첫 번째 요소로 초기화를 한다
// 길이가 작은 문자를 넣을 변수(shortStr)를 선언하고 첫 번째 요소로 초기화를 한다
// 반복문을 사용하여 각 배열의 요소로 접근한다.
    // el.length가 longStr.length 보다 크거나 같으면
        // longStr을 el로 초기화한다
    // el.length가 shortStr.length보다 작거나 같으면 
        // shortStr을 el로 초기화한다.
 //filter 를 사용하여 요소가 el이 아난 것들만 골라 배열로 만든다
 // 또는 arr.splice(arr.indexOf(longStr),arr.indexOf(longStr))
 // 또는 arr.splice(arr.indexOf(shortStr),arr.indexOf(shortStr))

function removeExtremes(arr){
    
    let indexLong=0;
    let indexShort=0;
    
    let resultArr=arr.slice();

    let longStr=resultArr[0];
    let shortStr=resultArr[0];
    //console.log(resultArr)

    for(let i=0; i<resultArr.length;i++){

        
        
        if(resultArr[i].length>=longStr.length) {
            longStr=resultArr[i];
            indexLong=i;

        }

        if(resultArr[i].length<=shortStr.length){
            
            shortStr=resultArr[i];
            indexShort=i;
        }

    }
    
    //console.log(longStr, shortStr)
    // console.log(resultArr)

    resultArr.splice(indexShort,1);    

    resultArr= resultArr.filter((el)=>el!==longStr);

    return resultArr;
     

}

// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); // --> ['a', 'b']

output = removeExtremes(['', '', '', 'eept', 'ssps','aaaa', 'sss' ]);
console.log(output);



 
