// 07_treeDFS
// 문제 : tree의 노드 중 하나의 Node 객체를 입력받고 해당 노드를 지삭으로 DFS를 하여 노드의 값이 저장된 배열을 리턴한다.

let dfs = function (node) {
  let result = [];
  result.push(node.value); // result 배열에 node의 value를 push 한다.
  if (node.children.length)
    // 만약 해당 node에 children이 있다면
    for (let child of node.children) result.push(...dfs(child));
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]
