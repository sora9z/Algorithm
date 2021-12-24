// 19_decryptCasesarChiper
// 문재 : 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 한다.
// 카이시르 암호(Caeart cipher)는 평문(plaintxet)을 암호키 secret 개만큼 오른쪽으로 평행이동키셔 암호화 한다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말한다.
// input : str 타입의 알파벳 소문자 문자렿
// output : number 타입의 암호키
// 주의 : 빈 문자열을 입력받을 경우, 빈 문자열을 리턴헤야 한다.
// 공백은 그대로 둔다.

function decryptCaesarCipher(str,secret){
    
    // charCodeAt : str을 아스키 코드로 변환
    // String.fromCharCode : 아스키코드 --> str으로 변환
    // a~z : 97~122

    // 빈 문자열이면 return 빈 문자열을 리턴한다.
    // 결과를 넣을 result 변수를 한 개 선언하고 빈 문자열로 초기화 한다.
    // str 길이만큼 반복문을 돌린다.
        // 공백 문자열이면 continue 
        // 요소의 아스키 코드를 넣을 임시 변수를 한 개 선언한다.
        // result에 임시 변수에 -secret을 하고 다시 string으로 변환한 값을 더한다.
    // result를 return 한다.

if(str.length===0) return ''

let result=""
for(let el of str){
    if(el===" ") {
        result+=el
    }else{


        
        let temp=el.charCodeAt(0)
        
        if(temp-96<secret){
            temp-=96; // 바꿀 번호를 일의자리 숫자로 변경 (계산하기 쉽게)
            temp=secret-temp+1; // 왼쪽으로 평행이동 하고 남은 개수
            decrypt=26-temp+1 // 바뀔 문자의 번호를 얻는 식
            result+=String.fromCharCode(decrypt+96)
            continue            
        }
        
        result+=String.fromCharCode(temp-secret);
    }
}
return result;
}

let output1=decryptCaesarCipher('nzopdelepd',11)
console.log(output1)

// let output = decryptCaesarCipher('komnv xnt zqd qdzcx sn lnud sn hlldqrhud bntqrd',25);
// console.log(output); // now you are ready to move to immersive course