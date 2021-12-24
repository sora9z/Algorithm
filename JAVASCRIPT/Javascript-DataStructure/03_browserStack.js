// 03_browserStack
/*
1. 새로운 페이지로 접속할 경우 prev 스택에 원래 있던 페이지를 넣고 next 스택을 비웁니다.

2. 뒤로 가기 버튼을 누를 경우 원래 있던 페이지를 next 스택에 넣고 prev 스택의 top에 있는 페이지로 이동한 뒤 prev 스택의 값을 pop 합니다.

3. 앞으로 가기 버튼을 누를 경우 원래 있던 페이지를 prev 스택에 넣고 next 스택의 top에 있는 페이지로 이동한 뒤 next 스택의 값을 pop 합니다.

4. 브라우저에서 뒤로 가기, 앞으로 가기 버튼이 비활성화일 경우(클릭이 되지 않을 경우)에는 스택에 push 하지 않습니다.
*/

/* 
인자 1. actions : Number type을 요소로 갖는 브라우저에서 행동한 순서를 차례대로 나열한 배열

인자 2. String 타입의 시작 페이지를 나타내는 현재 접속해 있는 대문자 알파벳

출력 : Array 타입 return
*/

function browserStack(actions, start) {
  let prev = [];
  let next = [];
  let curPage = start; // 현 재 page는 start page
  let result = [];

  for (let action of actions) {
    // 만약 action이 1이라면 (앞으로 가기)
    if (action === 1) {
      if (next.length) {
        prev.push(curPage); // 이전 page에 curPage를 넣고
        curPage = next.pop(); // curPage는 next에서 pop한 요소르 넣는다.
      }
    } else if (action === -1) {
      // 뒤로가기
      if (prev.length) {
        next.push(curPage); // 현재 page가 next page가 된다
        curPage = prev.pop(); //  이전 page에서 한 개를 빼서 현재 페이지로 넣는다.
      }
    } // action이 page라면
    else {
      prev.push(curPage);
      curPage = action;
      next.length = 0;
    }
  }
  result.push(prev);
  result.push(curPage);
  result.push(next);
  return result;
}

const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(output); // [["A"], "B", ["A", "D"]]
