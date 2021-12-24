// Programmers Levwl 1 KAKAO new user New ID recomment 
// 7 단계를 거치고 난 다음의 ID를 return 한다.
// -------- 7 단계-----------------------------
// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
// --------------------------------------------

// 1. toLowerCase로 모무 소문자루 바꾼다.
// 2. 정규표현식 replace(/[^\w\-\_\.]/g,"") 
// 3. 정규표현식 replace(/\.+,"") 
// 4. if 앞에 .이 있으면 제거, 뒤에 있으면 제거 
// 5. if 빈 문자열 -> a 대입
// 6. length>15 slice(0,16)
//    if 끝에 . --> pop()
// 7. length<3 --> for <3 push(마지막 문자)

function recommendNewId(new_id){
    
    
    let copy_new_id=new_id.slice();
    
        // 1
    copy_new_id=copy_new_id.toLowerCase();
    
    // 2
    copy_new_id=copy_new_id.replace(/[^\w\_\-\.]/g,"");
    
    // 3
    copy_new_id=copy_new_id.replace(/\.+/g,".");
    
    // 4
    if(copy_new_id[0]===".") copy_new_id=copy_new_id.replace(copy_new_id[0],"");
    else if(copy_new_id[copy_new_id.length]===".") copy_new_id=copy_new_id.replace(copy_new_id[copy_new_id.length-1],"");
    
    // 5
    if(copy_new_id.length===0) copy_new_id=copy_new_id.concat("a");
    
    // 6
    if(copy_new_id.length>15) copy_new_id=copy_new_id.slice(0,15-copy_new_id.length)
    if(copy_new_id[copy_new_id.length-1]===".") copy_new_id=copy_new_id.slice(0,length-1)

    // 7
    if(copy_new_id.length<3){
        let lastChar=copy_new_id[copy_new_id.length-1];
        let copyIdLength=copy_new_id.length
        for(let i=0;i<3-copyIdLength;i++)
        copy_new_id=copy_new_id.concat(lastChar);
    }

    return copy_new_id;
}

let input1="...!@BaT#*..y.abcdefghijklm"
console.log(recommendNewId(input1))
let input2="=.="
console.log(recommendNewId(input2))



// 다른 사람들의 풀이


const solution = new_id =>{
    new_id.toLowerCase()
    new_id.replace(/[^\w-_.]/g, "")
    new_id.replace(/\.+/g, ".")
    new_id.replace(/^\.|\.$/g, "")
    new_id.replace(/^$/, "a")
    new_id.match(/^.{0,14}[^.]/)[0]
    new_id.replace(/^(.)$/, "$1$1$1")
    new_id.replace(/^(.)(.)$/, "$1$2$2");
};




function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
};


const solution = (new_id) => {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)  
        .replace(/^\.|\.$/g, '')
    return id.padEnd(3, id[id.length - 1])
}
