// 05_queuePrinter
// 인쇄 작업 목록은 칸으로 이루어져 있다.
// 각 칸에는 한 개의 문서만 위치할 수 있다.
// 문서는 1초에 한 칸만 이동할 수 있다.
// 인쇄 작업 목록의 크기는 bufferSize이고 최대 용량 capacities만큼 문서를 담을 수 있다.
// 인쇄할 문서의 크기가 나열된 documents가 모두 진쇄 되는데 걸리는 최소 시간을 반환하는 솔루션을 만들어라
// 입력 : bufferSize : Number 타입의 인쇄 작업 목록 크기
// capacities : Number 타입의 인쇄 작업 목록에 추가될 수 있는 최대 용량
// Number 타입을 요소로 갖는 문서 크기가 나열된 배열
// 출력 : Number 타입을 리턴한다.
// 주의사항 : bufferSize는 1이상 100 이하이다.
// capacities는 100Kib 이하이다.
// 인쇄할 문서의 개수 (배열의 길이) 1이상~100이하
// 문서 하나의 크기는 capcacities를 초과하지 않는다.
// ----------------------------------------------------

function queuePrinter(bufferSize, capacities, documents) {
  // bufferSize크기를 갖는 배열을(buffer)를 선언하고 0을 할당
  // 초를 카운트하는 second 이름의 변수를 선언하고 0으로 할당.
  let buffer = new Array(bufferSize).fill(0);
  let second = 0;

  // document의 길이가 0 이사일 동안 반복문을 돌린다.
  // document>0일 때 까지 반복문을 돌린다
  // 1초가 지난다
  // print를 한다
  // buffer의 요소를 이동한다
  // document 에서 buffer로 요소를 이동시킨다.
  // 반복문이 끝나면 second를 return 한다.

  while (true) {
    if (!documents.length && buffer.every((el) => el === 0)) break;
    let data = documents[0];
    second += 1;
    printData();
    moveBufferData();
    documentToBuffer(data);
  }

  // documents -> buffer로 옮기는 메서드
  function documentToBuffer(rear) {
    // 예외처리
    // document에 데이터가 없으면  "출력 할 문서가 없습니다"
    // 만약 buffer 요소의 전체 합이 capaciries보다 크면
    // "사이즈가 크다"
    // 만약 buffer[0]이 있다면 -> "아직 작업물이 있습니다"
    // 아니라면
    // buffer[0]=데이터
    // document의 첫 행을 삭제한다.

    if (!documents.length) {
      // console.log("출력 할 문서가 없습니다");
      return;
    }
    let dataSize = buffer.reduce((acc, cur) => (acc += cur)) + rear;
    if (dataSize > capacities) {
      // console.log("사이즈가 큽니다.");
      return;
    }
    if (buffer[0]) {
      // console.log("아직 작업물이 있습니다");
      return;
    }
    buffer[0] = rear;
    documents.shift();
  }

  function moveBufferData() {
    if (buffer[buffer.length - 1]) {
      // console.log("아직 작업물이 있습니다");
      return;
    }
    buffer = [0, ...buffer.slice(0, -1)];
  }

  function printData() {
    // 예외처리
    // 만약 document.length가 0이면 bbuffer.length=0 (buffer free)
    // 만약 buffer의 마지막 요소가 0이라면 "출력할 데이터가 없습니다")
    if (!buffer[buffer.length - 1]) {
      // console.log("출력 할 데이터가 없습니다.");
      return;
    }
    buffer.splice(-1, 1, 0);
  }
  return second;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8

const result1 = queuePrinter(10, 10, [7, 4, 7, 4]);
const result2 = queuePrinter(10, 20, [10, 20, 1, 20]);
const result3 = queuePrinter(
  32,
  50,
  [18, 2, 15, 15, 20, 20, 30, 32, 45, 50, 23, 26, 29, 33]
);
const result4 = queuePrinter(
  78,
  100,
  [30, 32, 40, 15, 22, 50, 60, 32, 49, 19, 28, 46, 77, 71, 46, 34, 27]
);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//----------------------------------------------------------------
function queuePrinter(bufferSize, capacities, documents) {
  let count = 0;
  let queue = [];
  let totalBufferVolume = 0;

  // queue에 bufferSize만큼 0을 삽입합니다. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
  for (let i = 0; i < bufferSize; i++) {
    queue.push(0);
  }

  // ~23번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
  // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
  let currentDocument = documents.shift();

  // queue의 제일 앞에 currnetDocument를 삽입하고, 제일 마지막 요소를 없앱니다.
  queue.unshift(currentDocument);
  queue.pop();

  // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합칩니다.
  totalBufferVolume = totalBufferVolume + currentDocument;

  // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
  count++;

  // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
  while (totalBufferVolume) {
    // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거합니다.
    totalBufferVolume = totalBufferVolume - queue.pop();

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
    currentDocument = documents.shift();

    // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
    if (currentDocument + totalBufferVolume <= capacities) {
      // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
      queue.unshift(currentDocument);
      totalBufferVolume = totalBufferVolume + currentDocument;

      // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
    } else {
      // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
      documents.unshift(currentDocument);
      queue.unshift(0);
    }

    // 한 번 반복할 때마다 count(초)를 올립니다.
    count++;
  }

  // count를 반환합니다.
  return count;
}
