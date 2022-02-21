// 12_treeBFS
// 문제 : 임의의 tree를 구성하는 노드 중 하나의 Node객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색 (Breadth First Search)를 한다. 이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 return 한다.
// 입력 : value, childern속성을 갖는 객체 Node
// node.value는 Number type, node.children은 Node를 요소로 갖는 배열
// 출력 : 배열을 리턴해야 한다.

let bfs = function (node) {
  // TODO
  // values 배열과 queue를 빈 배열로 선언한다.
  const values = [];
  let queue = [node];

  // while문을 사용한다. queue의 길이만큼 반복한다.
  while (queue.length) {
    // queue의 맨 마지막 요소 한 개를 vertex에 넣는다.
    const vertex = queue.pop();
    // vertex를 values에 push 한다.
    values.push(vertex.value);
    // 만약 vertex에 children이 있다면 vertex의 children Node들을 queue에 shift한다.
    if (vertex.children) queue.unshift(...vertex.children.reverse());
  }

  return values;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (children) {
  this.children.push(children);
  return children;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));

let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]
