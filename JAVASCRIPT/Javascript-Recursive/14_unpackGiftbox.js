// 14_unpackGiftbox
// 문제 : 배열과 문자열을 입력받고 조건에 맞는 선물이 있는지 여부 리턴
// input : giftBox  문자열은 선물 상자에 들어있는 각 선물의 이름을 의미
// 배열은 더 작은 선물상자
// input 2 : string 타입의 문자열
// output : boolean 타입 리턴
// 주의사항 : 빈 배열 또는 빈 무자열 --> false
// ----------------------------------------------------------------

function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    // 종결 조건 : 문자열 === 빈문자열 or 배열===빈 문자얄 return false
    // 종결 조건 2 : indexof('wish') --> true
    // else return arr2=arr.map((el)=>Array.isArray(el)) , func(arr2,wish)
  
    if(!wish || !giftBox.length) return false ;
    if(giftBox.includes(wish)) return true;
  
    let giftBox2=giftBox.reduce((acc,cur)=>{
      if(Array.isArray(cur)){
          acc=acc.concat(cur);
      }
      return acc;},[])
  
    return unpackGiftbox(giftBox2,wish)
  
  }

  const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true