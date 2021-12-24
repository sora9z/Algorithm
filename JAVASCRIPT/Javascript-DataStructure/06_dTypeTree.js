// Tree 구현
// 맴버 변수 : 입력 데이터를 담을 수 있는 value
// 하위 노드를 저장할 수 있는 Array 타입의 children
// 메서드 : insertNode(value): 입력받은 value를 Tree에 계층적으로 추가할 수 있어야 한다.
// contains(value) : 트리에 포함된 데이터를 찾을 수 있어야 한다.
// value는 어떠한 값도 들어갈 수 있지만 현재 구현하는 Tree는 숫자로 제한한다.
//-------------------------------------------------------------------------
class Tree {
  constructor(value) {
    // constructor롤 만든 객체는 트리의 Node가 된다.
    this.value = value;
    this.children = [];
  }

  // 트리의 삽입 메서드를 만든다.
  insertNode(value) {
    // tree에 붙게 될 childNode를 만들고 children에 넣어야 한다.
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // 트리 안에 해당 값이 포함되어 있는지 확인하는 메서드를 만든다.
  contains(value) {
    if (this.value === value) return true;
    for (let tree of this.children) {
      if (tree.contains(value)) return true;
    }
    return false;
  }
  // 값을 찾을 때까지 children 배열을 순회하며 childNode를 탐색한다.
}

const rootNode = new Tree(null);

for (let i = 0; i <= 4; i++) {
  if (rootNode.children[i]) {
    rootNode.children[i].insertNode(i);
  }
  rootNode.insertNode(i);
}
console.log(rootNode); // {value: null, children: Array(5)}
console.log(rootNode.contains(5)); //false
console.log(rootNode.contains(1)); //true
