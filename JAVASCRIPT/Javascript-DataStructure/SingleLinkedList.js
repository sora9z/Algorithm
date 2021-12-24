//!---- Single Linked List 구현 ------//
// 단일 연결 리스트는 각 Node가 다음 Node에 대한 참조를 갖는 자료구조 이다.
//---- 단일연결리스트의 Node를 정의하는 함수 ----//
// 단일 연결 리스트의 Node의 속성에는 data와 next 라는 속성이 존재한다.
function SingleLinkedListNode(data) {
  this.data = data;
  this.next = null; // 다른 SingleLinkedListNode의 다른 인스턴스에 대한 참조를 한다. 기본 값은 null
}

//! ---- 단일 연결 리스트를 정의하는 함수 --- //
function SingleLinkedList() {
  this.head = null; // head는 연결 리스트의 시작. 기본 값은 null
  this.size = 0;
}
// --- 단일 연결 리스트가 비었지는 확인하는 도움 함수 --- //
SingleLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
};

//! --- 단일 연결 리스트에 항목을 삽입하는 함수 --- //
// --- 시간 복잡도 : O(1)
SingleLinkedList.prototype.insert = function (value) {
  // head가 가리키는 노드가 없을 경우 새로운 노드를 생성하여 설정한다.
  if (this.head === null) this.head = new SingleLinkedListNode(value);
  else {
    let temp = this.head; // 현재 노드가 참고하고있는 것을 temp에 저장한다.
    this.head = new SingleLinkedListNode(value); // 새로운 노드를 생성하여 저장한다.
    this.head.next = temp; // 새로 생성한 노드(현재 head가 가리키는 노드)의 다음 노드로 temp(이전 노드)를 가리킨다.
  }
  this.size++; // 현재 리스트의 노드 갯수가 늘어났으므로 증가를 시켜준다.
};

// ----- Test Insert ------ //

let sllist = new SingleLinkedList();
sllist.insert(1); // 현재 연결 리스트 : head 1->null
sllist.insert(3); // 현재 연결 리스트 : head 3 -> 1 -> null
sllist.insert(5); // 현재 연결 리스트 : head 5 -> 3 -> 1 -> null
sllist.insert(9); // 현재 연결 리스트 : head 9 -> 5 -> 3 -> 1 -> null
console.log(sllist);

// ! --- 단일 연결 리스트의 노드를 삭제하는 함수 --- //
// --- 시간복잡도 : O(n) --- //
// 노드의 삭제는 해당 노드의 참조를 제거함으로써 구현할 수 있다.
// 삭제하고하 하는 노드의 이전 노드의 next 를 삭제하고자 하는 노드의 다음 노드를 가리키게 한다.
SingleLinkedList.prototype.remove = function (value) {
  let currentHead = this.head; // head부터 탐색을 시작한다.
  if (currentHead.data === value) {
    // 단순히 head를 현재 노드의 next노드를 가리키게 한다.
    this.head = currentHead.next;
    this.size--;
  } else {
    let prev = currentHead; // 이전 노드를 가리키는 prev에 현재 가리키는 노드를 넣는다.
    // 노드의 다음 값이 없을 때까지 반복문을 돌린다.
    while (currentHead.next) {
      // 만약 현재 가리키고 있는 노드의 data가 찾는 값(value) 이면
      if (currentHead.data === value) {
        prev.next = currentHead.next; // 현재 노드의 바로 전 노드 (prev)가 현재 노드의 다음 노드를 가리키게 하고
        prev = currentHead; //이전 노드를 가리키는 포인터가 현재 노드를 가리키게 한다.
        currentHead = currentHead.next; // 현재 노드를 가리키는 포인터는 그 다음 노드를 가리키게 한다.
        break;
      }
      prev = currentHead; // 이전 노드를 가리키는 prev에 현재 노드를 가리키게하고
      currentHead = currentHead.next; // 현재 노드에 다음 노드를 가리키에 한다.
    }
    // 만약 찾고자 하는 값이 head , 중간에도 없다면 tail에 있다.
    if (currentHead.data === value) prev.next = null;
    this.size--; // 삭제를 했으므로 사이즈를 한 개 줄인다.
  }
};

// ! 단일 연결 리스트의 head의 값을 삭제하는 함수 //

SingleLinkedList.prototype.deleteAtHead = function () {
  let toReturn = null;
  // head가 존재하면
  if (this.head !== null) {
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
  }
  return toReturn;
};

//! 단일 연결 리스트를 검색하는 함수

SingleLinkedList.prototype.find = function (data) {
  let currentNode = this.head; // 시작 노드를 head부터 시작한다
  // 현재 노드의 다음 노드가 없을 때까지 (taill 노드까지) 반복한다.
  while (currentNode.next) {
    if (currentNode.data === data) return true; // 만약 현재 노드의 data가 찾는 값과 같으면 true를
    currentNode = currentNode.next; // 아니라면 탐색 할 노드를 현재 노드의 다음 노드로 이동한다.
  }
  return false; // 반복문이 다 끝나면 찾지 못했다는 뜻이므로 false를 리턴한다.
};

//! ----- Test Remove ------ //
let sllist2 = new SingleLinkedList();
sllist2.insert(1);
sllist2.insert(12);
sllist2.insert(20);
console.log(sllist2);
sllist2.remove(12);
sllist2.remove(20);
console.log(sllist2);

//! ---- Test deleteAtHead --- //
let sllist3 = new SingleLinkedList();
sllist3.insert(1); // 1 -> null
sllist3.insert(12); // 12--> 1 -> null
sllist3.insert(20); // 20--> 12--> 1 -> null
console.log(sllist3);
sllist3.deleteAtHead();
console.log(sllist3);
