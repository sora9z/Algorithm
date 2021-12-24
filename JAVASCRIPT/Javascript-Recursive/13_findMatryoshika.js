// 13_findMatryosika
// 문제 : 입력 조건을 받아 조건에 맞는 인형이 있는지 여부를 리턴한다.
// input : matryoshika --> matryosika , size 속성을 갖는 재귀적으로 정의된 객체
// matryosika.matryosika는 null 또는 matryosika 객체이다.
// size는 중첩될수록 작아진다.
// 출력 : boolean 타입 리턴
// 주의사항 : 빈 객체의 경우 false를 리턴한다.

function findMatryoshka(matryoshka, size) {
    // 종결조건 : matryoshka ===null 이면 return false
    // 종결조건 2: size===0 return true
    if(!matryoshka) return false
    else if(matryoshka.size===size) return true
    return  findMatryoshka(matryoshka.matryoshka,size)
  }
  const matryoshka = {
    size: 10,
    matryoshka: {
      size: 9,
      matryoshka: null,
    },
  };
  
  let output = findMatryoshka(matryoshka, 10);
  console.log(output); // --> true
  
  output = findMatryoshka(matryoshka, 8);
  console.log(output); // --> false