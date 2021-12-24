// 18_numberSearch
// 문제 : 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴한다. (숫자와 공백을 제외한 나머지 문자열)
// input : str 타입의 문자열
// output : number 타입을 리턴헤야 한다
// 주의사항 : 빈 문자열을 입력받은 경우 0을 리턴한다
// 숫자는 연속에서 등장하지 않는다.

function numberSearch(str){

    // 빈 문자열인 경우 return 0을 한다
    // 결과를 넣을 변수 result를 선언한다
    // 숫자와 공백을 제외한 문자열을 넣을 변수를 선언한다 divide
    // 문자열의 길이만큼 반복문을 돌린다 
        // str의 요소를 숫자로 변경한 값을 넣은 임시 변수를 선언한다 temp
        // 만약 temp가 true 이면
            // retult에 더한다
        // else if str[i]가 공백이 아니라면
            // divide에 +한다.
    
    // result를 divide.length로 나눈다.
    // 반올림하기 위해 result - parseInt(result)가 0.5보다 크거나 같으면
        // return pareInt(result)+1을
        // 아니면 return pareInt(result)를 해준다


    if(str.length===0) return 0;
    
    let result=0;
    let divide="";

    for(let i=0;i<str.length;i++){
        let temp=Number(str[i])
        if(temp){
           result+=temp;
        }else if(str[i]!==' '){
            divide+=str[i]
        }
    }

    result=result/divide.length;
   

    if(result-parseInt(result)>=0.5)
     return parseInt(result)+1;
    else return parseInt(result);    

}



let output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 1

output = numberSearch("YlQO uT9");
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2