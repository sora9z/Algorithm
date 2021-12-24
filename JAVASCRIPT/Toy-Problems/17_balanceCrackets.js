/*
17_balanceBrackets
문제 : 문자열을 입력받아 문자열 내의 모든 괄호의 짝이 맞는지 여부를  리턴한다.

다음 단계에 맞춰 함수를 작성
- 괄호의 종류를 단 한가지로 한정합니다.
- 괄호의 종류를 늘려 모든 종류의 괄호에도 작동하도록 합니다.
- 괄호를 제외한 문자열이 포함된 경우에도 작동하도록 합니다.

입력 : 괄호가 포함된 string
출력 : boolean 타입 리턴

주의사항 : 관호의 종류는 (, )
괄호는 열린 만큼 닫혀야 한다.
빈 문자열을 입력 받으면 true

Advanced 
모든 종류의 괄고 ().{}.[]가 포함된 문자열을 입력받고 짝이 맞는지 여부 return
*/

// const balancedBrackets1 = function (str) {
//   // TODO Data Type Stack을 이용하자!

//   // str에서 Open Bracket을 str index를 key로 하는 객체의 형태로 전부 받는다
//   // str에서 closed Bracket을 index를 key로 하는 객체의 형태로 전부 받는다.
//   const getBrackObjects = (str) => {
//     let opBracket = {};
//     let closeBracket = {};

//     for (let i = 0; i < str.length; i++) {
//       // 열린 괄호이면 opBracket에, 아니라면 closeBracket에 저장한다.
//       str[i] === "(" || str[i] === "{" || str[i] === "["
//         ? (opBracket[i] = str[i])
//         : (closeBracket[i] = str[i]);
//     }
//     return [opBracket, closeBracket];
//   };

//   let opBrackets = ["(", "[", "{"];
//   let clBrackets = [")", "]", "}"];

//   const [openB, nextB] = getBrackObjects(str);
//   // stack에는 openB를, queue에는 closeB를 한 개씩 넣어서 비교한다.
//   let [stackO, stackC] = [Object.keys(openB), Object.keys(closeB)]; // key정보를 사용하여 open Brack의 index가 closeBrackt보다 먼저 오는지 확인한다.

//   while (stackO.length !== 0) {
//     let op = stackO.pop();
//     let cl = stackC.pop();

//     // 두 문자가 한 쌍이라면
//     if (opBrackets.indexOf(openB[op]) === clBrackets.indexOf(closeB[cl]))
//       if (op > cl) return false; // 만얃 op보다 cl 기호가 앞에 있다면 false
//   }
//   return true;
// };

// //! 2 번째
// const balancedBrackets2 = function (str) {
//   // TODO Data Type Stack을 이용하자!
//   let strtoArr = str.split(""); // str을 배열로 변환

//   const getOpenBracket = (arr) => {
//     // stack에 open bracket을 넣는 method . stack에 들어갈 문자를 제외한 문자들을 배열로 return 한다.
//     for (let i = 0; i < arr.length; i++) {
//       if (opBracket.includes(arr[i])) stack.push(arr[i]);
//       else return stack.length === 0 ? false : arr.slice(i); // 만약 stack이  비어있다면 return false
//     }
//   };

//   // open 문자와 close 문자를 각 각 배열로 만든다
//   // stack 빈 배열을 선언한다.
//   let opBracket = ["(", "[", "{"];
//   let clBracket = [")", "]", "}"];
//   let stack = [];

//   // 입력으로 받은 str에서 ),],} 중 하나가 나올 떄까지 Stck에 넣는다. -> getOpenBracket(str)
//   let remains = getOpenBracket(strtoArr); // stack에 넣은 나머지 문자들을 remain 변수에 배열 자료형으로  초기화

//   // stack의 길이가 0이 될 때까지 while문을 돌린다.
//   while (stack.length !== 0) {
//     nextB = remains[0]; // stack에 넣은 문자의 바로 다음 문자
//     openB = stack[stack.length - 1]; // stack의 제윌 위의 문자

//     // 만약 다음 문자들이 한  쌍이라면
//     if (clBracket.indexOf(nextB) === opBracket.indexOf(openB)) {
//       stack.pop(); // stack에서 제거한다.
//       remains.shift(); // ramains에서 제거한다.
//       if (!stack.length) {
//         // 만약 stack이 비었다면  남아있는 문자에서 stack을 채운다.
//         if (getOpenBracket(remains) === false) return false; // 결과가   false면 return false
//       }
//     }
//     // 만얃 str의 다음 문자가 [,{,( 중에 있으면 (Openbracket 문자이면) stack에 추가한다.
//     else if (opBracket.includes(nextB)) stack.push(nextB);
//     // 위의 두 경우가 아니면 return false
//     else return false;
//   }

//   return true;
// };

//! 3 번째 - string으로 진행 해보기
const balancedBrackets2 = function (str) {
  // TODO Data Type Stack을 이용하자!

  if (str.length === 1) return false;

  const getOpenBracket = (str) => {
    // stack에 open bracket을 넣는 method . stack에 들어갈 문자를 제외한 문자들을 배열로 return 한다.
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(" || str[i] === "{" || str[i] === "[")
        stack.push(str[i]);
      else return stack.length === 0 ? false : str.slice(i); // 만약 stack이  비어있다면 return false
    }
  };

  // open 문자와 close 문자를 각 각 배열로 만든다
  // stack 빈 배열을 선언한다.
  let opBracket = ["(", "[", "{"];
  let clBracket = [")", "]", "}"];
  let stack = [];

  // 입력으로 받은 str에서 ),],} 중 하나가 나올 떄까지 Stck에 넣는다. -> getOpenBracket(str)
  let remains = getOpenBracket(str); // stack에 넣은 나머지 문자들을 remain 변수에 배열 자료형으로  초기화
  if (!remains.length) return false;
  // stack의 길이가 0이 될 때까지 while문을 돌린다.
  while (stack.length !== 0) {
    nextB = remains[0]; // stack에 넣은 문자의 바로 다음 문자
    openB = stack[stack.length - 1]; // stack의 제윌 위의 문자

    // 만약 다음 문자들이 한  쌍이라면
    if (clBracket.indexOf(nextB) === opBracket.indexOf(openB)) {
      stack.pop(); // stack에서 제거한다.
      remains = remains.slice(1); // ramains에서 첫 번째 문자를 제거한다.
      if (!stack.length) {
        // 만약 stack이 비었다면  남아있는 문자에서 stack을 채운다.
        if (getOpenBracket(remains) === false) return false;
        // 결과가   false면 return false
        else remains = remains.slice(1);
      }
    }
    // 만얃 str의 다음 문자가 [,{,( 중에 있으면 (Openbracket 문자이면) stack에 추가한다.
    else if (nextB === "(" || nextB === "{" || nextB === "[") stack.push(nextB);
    // 위의 두 경우가 아니면 return false
    else return false;
  }

  return true;
};

const balancedBrackets = function (str) {
  let opBracket = ["(", "[", "{"];
  let clBracket = [")", "]", "}"];
  let stack = [];

  if (str.length === 1) return false;

  for (let i = 0; i < str.length; i++) {
    if (opBracket.includes(str[i])) stack.push(str[i]);
    else if (clBracket.includes(str[i])) {
      let opB = stack.pop();
      let clB = str[i];
      if (
        opB === undefined ||
        opBracket.indexOf(opB) !== clBracket.indexOf(clB)
      )
        return false;
    }
  }
  return true;
};

// ! tests
let output = balancedBrackets("())()(()");
console.log(output); // --> false

let output2 = balancedBrackets("[({})]");
console.log(output2); // --> true

let output3 = balancedBrackets("[(]{)}");
console.log(output3); // --> false

let output4 = balancedBrackets("(((((((((())))))))))");
console.log(output4); // --> true

let output5 = balancedBrackets(")");
console.log(output5); // --> false

let output6 = balancedBrackets("(");
console.log(output6); // --> false

let output7 = balancedBrackets("()()");
console.log(output7); // -> treu

let output8 = balancedBrackets("()");
console.log(output8); //-> true

let output9 = balancedBrackets(")(");
console.log(output9); //-> false

// //! 4 번째 - string으로 진행 해보기 + getOpenBracket 빼보기
// const balancedBrackets = function (str) {
//   // TODO Data Type Stack을 이용하자!
//   let strtoArr = str.split(""); // str을 배열로 변환

//   const getOpenBracket = (arr) => {
//     // stack에 open bracket을 넣는 method . stack에 들어갈 문자를 제외한 문자들을 배열로 return 한다.
//     for (let i = 0; i < arr.length; i++) {
//       if (opBracket.includes(arr[i])) stack.push(arr[i]);
//       else return stack.length === 0 ? false : arr.slice(i); // 만약 stack이  비어있다면 return false
//     }
//   };

//   // open 문자와 close 문자를 각 각 배열로 만든다
//   // stack 빈 배열을 선언한다.
//   let opBracket = ["(", "[", "{"];
//   let clBracket = [")", "]", "}"];
//   let stack = [];

//   // 입력으로 받은 str에서 ),],} 중 하나가 나올 떄까지 Stck에 넣는다. -> getOpenBracket(str)
//   let remains = getOpenBracket(strtoArr); // stack에 넣은 나머지 문자들을 remain 변수에 배열 자료형으로  초기화

//   // stack의 길이가 0이 될 때까지 while문을 돌린다.
//   while (stack.length !== 0) {
//     nextB = remains[0]; // stack에 넣은 문자의 바로 다음 문자
//     openB = stack[stack.length - 1]; // stack의 제윌 위의 문자

//     // 만약 다음 문자들이 한  쌍이라면
//     if (clBracket.indexOf(nextB) === opBracket.indexOf(openB)) {
//       stack.pop(); // stack에서 제거한다.
//       remains.shift(); // ramains에서 제거한다.
//       if (!stack.length) {
//         // 만약 stack이 비었다면  남아있는 문자에서 stack을 채운다.
//         if (getOpenBracket(remains) === false) return false; // 결과가   false면 return false
//       }
//     }
//     // 만얃 str의 다음 문자가 [,{,( 중에 있으면 (Openbracket 문자이면) stack에 추가한다.
//     else if (opBracket.includes(nextB)) stack.push(nextB);
//     // 위의 두 경우가 아니면 return false
//     else return false;
//   }

//   return true;
// };
