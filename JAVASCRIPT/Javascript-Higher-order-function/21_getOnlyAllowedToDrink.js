// getOnlyAllowedToDrink
// 문제 : 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람들의 이름을 요소로 갖는 배열을 리턴한다.
// 입력 : 객체를 요소로 갖는 배열 . 객체는 name과 age 속성을 갖는다. 
// 출력 : string 타입을 요소로 갖는 배열

// 주의사항 : 반복문 사용 금지 , 빈배열의 경우 빈배열을 출력한다

function getOnlyAllowedToDrink(arr){

    // filter를 사용하여 age가 18세 이상인 객체만 추출한다.
    // map을 사용하여 객체의 name만 추출한다
    return arr.filter((el)=>el.age>=18).map((el)=>el.name)

}




  
  output = getOnlyAllowedToDrink([
    { name: 'Sora', age: 14 },
    { name: 'Kang', age: 87 },
    { name: 'Taeng', age: 53 },
    { name: 'Kong', age: 43 },
  ]);
  console.log(output); // --> ['Dumbledore', 'Snape', 'Hargrid']
  
