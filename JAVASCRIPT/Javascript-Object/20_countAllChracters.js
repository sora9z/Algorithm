// 20_countAllChracters
// 문제 : 문자열을 입력받아 문자열을 구성하는 각 문자를 키로 갖는 객체를 리턴한다.
// 키의 값은 해당 문자가 문자열에서 등잔하는 횟수이며 num타입을 갖는다.
// input : str : 공백이 없는 문자열
// output : 각 문자를 키로 갖는 객체 return
// 주의사항 : 빈 문자열을 입력받은 경우, 빈 객체를 리턴해야한다.

function countAllCharacters(str){

    // 빈 객체를 한 개 선언한다
    // 문자열 길이만큼 반복문을 돌린다
        // 만약 객체에 문자가 없으면
            // 객체[문자]=1을 할당한다
        // 이미 있다면
            //  객체[문자]+=1
    // 객체를 return 한다

    let temp={}
    
    for(let key of str){
        
        if(!(key in temp))
        temp[key]=1;
        else temp[key]+=1

    }
    return temp;


}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}