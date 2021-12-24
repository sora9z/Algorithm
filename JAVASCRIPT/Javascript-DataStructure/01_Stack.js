// Stack - Class로 구현하기
// Last In Firtst Out
/* method

- size () satck에 추가된 data의 크기를 return
- push() stack에 데이터를 추가
- pop() : 가장 나중체 추가 된 데이터 삭제 , 삭제g한 data return 

*/

class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    return Object.keys(this.storage).length;
  }

  push(elem) {
    this.storage[this.top] = elem;
    this.top += 1;
  }

  pop() {
    // if storage is empty
    // return empth message
    if (!this.size) return "This Stack is empty!";
    const data = this.storage[top];
    delete this.storage[top];
    this.top -= 1;
    return data;
  }

  left() {
    return console.log(Object.values(this.storage));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(2);
stack.left();
