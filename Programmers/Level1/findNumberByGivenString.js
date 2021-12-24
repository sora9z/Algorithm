// 주어진 문자열 s를 단어에 대앙되는 숫자로 변환하라
function findNumberByGivenString(s){
    // 0~9를 키로, 영단어를 value로 하는  객체를 선언한다.
    wordTable=["zero","one","two","three","four","five","six","seven","eight","nine"];
    
    
    for(let word of wordTable){
        let re=new RegExp(`${word}`,"g");
        let num=wordTable.indexOf(word)
        if(!(re.test(s)))
        continue;
        s=s.replace(re,num)
    }
    return s;
    
    

}




let input1= "one4seveneight"
// console.log(findNumberByGivenString(input1))
console.log(findNumberByGivenString("1zerotwozero3"))
// console.log(findNumberByGivenString("2three45sixseven"))