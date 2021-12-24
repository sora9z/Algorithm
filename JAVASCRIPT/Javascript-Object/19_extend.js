// 19_extend
// 문제 : 두 개의 객체를 입력받아 두반째 객체의 속성들을 첮번째 객체에 추가한다.
// input : obj1 , obj2
// output : 별도의 return을 하지 않음
// 주의 : 추가를 하려는 속성이 이미 첫번째 객체에 존재하는 경우, 기존 값을 그대로 둔다.
//       두번째 객체는 수정되면 안된다.
// ---------------------------------------

function extend(obj1,obj2){

    // obj2로 반복문을 돌린다
        // if obj2 key in obj (이미 키가 있다면 아무것도 실행하지 않는다)
        // else 다음을 실행한다
            // obj1[key]=obj2[key]

    for(let key in obj2){
        if(key in obj1) console.log(`${key} is in this obj1`)
        else obj1[key]=obj2[key]
    }
}

    const obj1 = {
        a: 1,
        b: 2,
      };
      
      const obj2 = {
        b: 4,
        c: 3,
      };
      
      extend(obj1, obj2);
      console.log(obj1); // --> {a: 1, b: 2, c: 3}
      console.log(obj2); // --> {b: 4, c: 3}

