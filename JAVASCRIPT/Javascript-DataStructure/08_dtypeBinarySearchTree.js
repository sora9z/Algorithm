// 이진트리 구현
// 먐버 변수
// 입력 데이터를 담을 수 있는 value
// 노드를 왼쪽에 저장할 수 있는 Array 타입의 left
// 노드를 오른쪽에 저장할 수 있는 Array 타입의 right
// 메서드
// insert(value) : 입력받은 value를 Binary Search 에 맞게 Tree를 계층적으로 추가할 수 있어야 한다
// contains(value) : 트리에 포함된 데이터를 찾을 수 있어야 한다.
// preorder(callback) : 전위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 한다.
// inorder(callback) : 중위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 한다.
// postorder(callback) : 후위 순회를 통해 트리의 모든 요소에 callback을 적용할 수 있어야 합니다
// 주의사항 : value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한한다.
class BinarySearchTree {
  constructor(value) {
    // Tree 의 Node
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // 이진 탐색 트리의 삽입하는 메서드를 만든다
  insert(value) {
    // 입력값을 기준으로 현재의 노드의 값보다 크거나 작은 것에 대한 조건문이 있어야 한다.
    // 보다 작아면 Node의 왼쪽이 비어있는지 확인 후 값을 넣는다.
    if (value < this.value)
      this.left
        ? this.left.insert(value)
        : (this.left = new BinarySearchTree(value));
    // 보다 크면 Node의 오른쪽이 비어 있는지 확인 후 값을 넣는다
    else if (value > this.value)
      this.right
        ? this.right.insert(value)
        : (this.right = new BinarySearchTree(value));
    else return; // 입력값이 트리에 들어있는 경우임 . 아무것도 하지 않는다.
  }

  contains(value) {
    if (this.value === value) return true;
    // value가 this.value 보다 작으면
    // left가 존재하고 노드의 입력값과 일치하면 true
    if (value < this.value)
      if (this.left)
        return this.left.value === value ? true : this.left.contains(value);
    if (value > this.value)
      if (this.right)
        return this.right.value === value ? true : this.right.contains(value);

    return false;
  }

  // 트리의 순회
  // 함수를 매개변수로 받아 콜백 함수에 값을 적용시킨 것을 순회한다.
  preorder(callback) {
    callback(this.value);
    if (this.left) {
      if (this.left.left || this.left.right) this.left.preorder(callback);
      else callback(this.left.value);
    }
    if (this.right) {
      if (this.right.left || this.right.right) this.right.preorder(callback);
      else callback(this.right.value);
    }
  }

  inorder(callback) {
    if (this.left) {
      if (this.left.left || this.left.right) this.left.inorder(callback);
      else callback(this.left.value);
    }
    callback(this.value);
    if (this.right) {
      if (this.right.left || this.right.right) this.right.inorder(callback);
      else callback(this.right.value);
    }
  }

  postorder(callback) {
    if (this.left) {
      if (this.left.left || this.left.right) this.left.postorder(callback);
      else callback(this.left.value);
    }
    if (this.right) {
      if (this.right.left || this.right.right) this.right.postorder(callback);
      else callback(this.right.value);
    }
    callback(this.value);
  }
}

const rootNode = new BinarySearchTree(10);
rootNode.insert(7);
rootNode.insert(8);
rootNode.insert(12);
rootNode.insert(11);
console.log(rootNode.left.right.value); // 8
console.log(rootNode.right.left.value); //11
console.log(rootNode.contains(7));
console.log(rootNode.contains(null));
console.log(rootNode.contains(13));

console.log(rootNode);
let arr = [];
rootNode.preorder((value) => arr.push(value * 2));
console.log(arr); // [20, 14, 16, 24, 22]

//------------------------------------------------------
console.log("_----------------------------------------------");

let arr5 = [];
let cb = function (value) {
  arr5.push(value);
};

rootNode.insert(8);
rootNode.insert(3);
rootNode.insert(7);
rootNode.insert(5);
rootNode.insert(15);
rootNode.insert(16);
rootNode.insert(11);
rootNode.insert(14);
rootNode.inorder(cb);
console.log(arr5);

console.log("-----------후위순회-----------");

let arr6 = [];
let cb2 = function (value) {
  arr6.push(value);
};
rootNode.insert(8);
rootNode.insert(3);
rootNode.insert(7);
rootNode.insert(5);
rootNode.insert(15);
rootNode.insert(16);
rootNode.insert(11);
rootNode.insert(14);
rootNode.postorder(cb2);
console.log(arr6);

/*-----------Do it myself-----------------------------*/
// Binary Tree ADT
// Tree : 객체로 정의된 Tree 그 자체
// left : Node의 자식 중 왼쪽 node
// Right : Node의 자식 중 오른쪽 node

// Tree를 대표하는 연산
// insertNode(value) : Node에 데이터를 저장
// search(val) : 값을 찾는다.
// findParent (val) : 값의 부모 노드를 찾는다.

/* Pesudocode ---------------------------------------*/
//------------ insert(value)-------------------------//
// insertNnode(val)
// if -> this.val >val
// if -> this.left true -> this.left.insertNode(vel)
// else -> new Tree(val)
// else if -> this.val<val
// if -> this.right true-> this.right.insertNode(val)
// else -> new.Tree(val)

//------------ search(val)-------------------------//
// if this.value===value -> return true
// if this.value>value -> return this.left.search(value)
// else return this.right.search(value)

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertNode(value) {
    if (this.value > value) {
      this.left
        ? this.left.insertNode(value)
        : (this.left = new BinaryTree(value));
    } else if (this.value < value)
      this.right
        ? this.right.insertNode(value)
        : (this.right = new BinaryTree(value));

    return " 이미 존재하는 값";
  }

  contains(value) {
    //------------ search(val)-------------------------//
    // if this.value===value -> return true
    // if this.value>value -> return this.left.search(value)
    // else return this.right.search(value)
    if (this.value === value) return true;
    if (this.value > value) {
      if (this.left)
        return this.left.value === value ?? this.left.contains(value);
    } else {
      if (this.right)
        return this.right.value === value ?? this.right.contains(value);
    }
  }
}

console.log("------------- Do It Myself--------------------------");
const doitmself = new BinaryTree(10);
doitmself.insertNode(7);
doitmself.insertNode(8);
doitmself.insertNode(12);
doitmself.insertNode(11);
console.log(doitmself.left.right.value); // 8
console.log(doitmself.right.left.value); //11
console.log(doitmself.contains(7));
console.log(doitmself.contains(null));
console.log(doitmself.contains(13));
