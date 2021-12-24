// 16_isIsogram
// 문제 : 문자열을 입력받아 아이소그램인지 여부를 리턴한다. 
// 아이소그램(isogram) : 알파벳을 한번씩만 이용해서 만든 단어나 문구.
// input : str 타입의 공백 없는 문자열
// output : bolean 타입
// 주의사항 : 빈 문자열을 입력받은 경우, true를 리턴한다.
// 대소문자는 구분하지 않는다.
// ---------------------------------------------------------
function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
  
    // 각 문자가 유일하게 있는지 확인하면 될듯.
    // 빈 객체를 한 개 선언한다.
    // 만략 빈 문자열이면 true 
    // str의 문자를 모두 소문자로 바꾼다
    // str 길이만큼 반복문을 돌린다.
      // 객체의 키로 문자가 없다면 객체에 추가하고 값을 1 넣어준다.
      // 있다면 return false
    // 반복문이 끝나면 return true
  
    let obj={};
    if(str.length===0) return true;
    let str2lower=str.toLowerCase();
    for(let i=0;i<str2lower.length;i++){
      if(!(str2lower[i] in obj)){
        obj[str2lower[i]]=1;
      }
      else return false
    } 
    return true;
  
    
  }
  
  


let output = isIsogram('aba');
console.log(output); // false


output = isIsogram('moOse');
output = isIsogram('iCanDo');

output = isIsogram('Dermatoglyphics');
console.log(output); // true