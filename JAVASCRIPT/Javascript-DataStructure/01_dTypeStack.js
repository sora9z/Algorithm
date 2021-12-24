// Stack 구현
// 맴버변수 : 데이터를 저장할 Object 타입의 storage
// 스택의 가장 상단을 가리키는 Number 타입의 포인터 top
// 메서드 : size(): 스택에 추가된 데이터의 크기를 리턴
// push() : 스택에 데이터를 추가할 수 있어야 한다.
// pop(): 가장 나중에 추가된 데이터를 스택에서 살제하고 삭제한 데이터를 리턴한다.
// 주의 : 내장 객체 Array.prototype에 정의돈 메서드는 사용하지 않는다.
// 포인터 변수 topㅇ의 초기값은 -1,0,1등 임의로 지정할 수 있디만 여기서는 0으로 하여 데이터가 추가될 위치를 가리키도록 한다.
/*-----------------------------------------------------------------*/
/******************* Stack의 ADT ***********************************/
/*- push : Stack을 쌓음
  - pop :  Stack을 꺼냄
  - peek : Stack의 맨 위의 요소를 확인
  - lefts :  Stack에 있는 모든 요소 문자열로 반환
  - clear : stack에 있는 모든 요소 삭제
  - empty : Stack의 남은 요소가 있는지 확인
*/

class Stack {
  constructor() {
    this.storage = {};
    this.top = 0; //  Stack의 가장 상단을 가리키는 포인터 변수를 초기화한다.
  }

  size() {
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top += 1;
  }
  // 가장 나중에 추가된 데이터가 먼저 추출되어야 한다.
  // 빈 스택에 pop 연산을 적용해도 에러가 발생하지 말아야 한다.
  pop() {
    if (!this.size()) return;

    const result = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top -= 1;
    return result;
  }
  peek() {
    return this.storage[this.top - 1];
  }

  lefts() {
    const str = Object.values(this.storage).toString();
    return str;
  }

  empty() {
    return !this.size() ? true : false;
  }
  clear() {
    this.storage = "";
    return "This Stack is cleared";
  }
}

const stack = new Stack();
console.log(stack.size()); //0
console.log(stack.empty());
for (let i = 1; i < 10; i++) stack.push(i);

console.log(stack.pop()); //9
console.log(stack.pop()); // 8
console.log(stack.size()); // 7
console.log(stack.push(8));
console.log(stack.size()); // 8
console.log(stack.peek());
console.log(stack.lefts());
console.log(stack.clear());

/*------------------------------------------------------*/
// 배열을 사용하여 Stack을 구현하자
/******************* Stack의 ADT ***********************************/
/*- push : Stack을 쌓음 arr.push
  - pop :  Stack을 꺼냄 arr.pop
  - peek : Stack의 맨 위의 요소를 확인 arr[arr.length-1]
  - lefts :  Stack에 있는 모든 요소 문자열로 반환 arr.toString
  - clear : stack에 있는 모든 요소 삭제 // arr.lengt=0
  - empty : Stack의 남은 요소가 있는지 확인 arr.length?
*/
const stackArr = [];

for (let i = 0; i < 10; i++) stackArr.push(i);

console.log(stackArr);

stackArr.pop();
stackArr.pop();
stackArr.pop();
console.log(stackArr);

// lefts :  Stack에 있는 모든 요소 문자열로 반환 arr.toString
console.log(stackArr.toString());

// peek : Stack의 맨 위의 요소를 확인 arr[arr.length-1]
console.log(stackArr[stackArr.length - 1]);

// clear : stack에 있는 모든 요소 삭제 // arr.lengt=0
stackArr.length = 0;
console.log(stackArr);

// empty : Stack의 남은 요소가 있는지 확인
stackArr.length > 0 ? console.log(false) : console.log(true);
