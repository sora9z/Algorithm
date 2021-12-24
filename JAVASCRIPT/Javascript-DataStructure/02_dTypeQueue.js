// Queue 구현
// 맴버변수 : 데이터를 저장할 Object 타입의 storage
// Queue의 가장 앞을 가리카는 Numbmer type의 포인터 front
// Queue의 가장 뒤를 가리키는 Number type의 포인터 rear
// 메서드 : size() Queue에 추가된 데이터의 크기를 리턴해야한다.
// enqueue() : Queue에 데이터를 추가할 수 있어야 한다.
// dequeue() : 가장 먼저 추가된 데이터를 Queue에서 삭제하고 삭제한 데이터를 리턴한다.
// 주의사항 : 내장 객체 Array.prototype에 정의된 메서드는 사용하면 안된다.
// 포인터 변수 front, rear의 초기값음 -1,0,1등 임의로 지정할 수 있지만 여기서는 0으로 한다

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  // Queue에 데이터를 추가할 수 있어야 한다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
  // 가장 먼서 추가된 데이터가 가장 먼저 추출되어야 한다.
  dequeue() {
    // 빈 큐에 연산을 적용해도 에러가 발생하지 않아야 한다.
    if (!this.size()) return;

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

const queue = new Queue();

queue.size(); // 0
for (let i = 1; i < 10; i++) {
  queue.enqueue(i);
}
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.size()); // 7
console.log(queue.enqueue(10));
console.log(queue.size()); // 8
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // 4
console.log(queue.size()); // 6

/*-----------------------------------------------------------------*/
// 배열로 Queue를 구현한다.
/*- Queue : 배열 또는 Object로 정의됨 queue 그 자체
-  front : Queue의 맨 앞에 저장된 요소 확인
-  reare : Queue의 맨 뒤에 저장된 요소 확인
-  Queue를 대표하는 연산
    - equeue : Queue의 맨 뒤에 요소 추가
    - dequeue :  Queue의 맨 앞에서 요소 삭제
    - toSrging : Queue의 의 모든 요소를 문자열로 반환
    - empty : Queue의 남은 요소가 있는지 확인 
*/

const queueArray = [];

for (let i = 0; i < 10; i++) queueArray.push(i);

console.log(queueArray);

queueArray.shift();
queueArray.shift();
queueArray.shift();

console.log(queueArray);
