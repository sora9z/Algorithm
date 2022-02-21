// ! 15_PrimePassword
/* 문제 : 조건을 만족하면서 현재 비번을 새 비번으로 변경하는데 필요한 최소 동작의 수를 리턴해야 한다. 
- 한 번에 한 개의 숫자만 변경 가능하다. 
- 4자 소수(prime)인 비밀번호로만 변경 가능하다

-> 비밀번호가 계속 소수를 유지하도록 숫자 한 개씩 바꿔갈 때, 현재 비밀번호에서 새 비밀번호로 바꾸는데 최소 몇 개의 숫자를 변경해야 하는지 return

- 인자1 : curPwd : num type의 1,000 이상 9,999아하의 자연구
- 인자2: newPwd : num type의 1,000이상 9,999이하의 자연수
- 출력 : num 타입 리턴
- 주의 : 4자리 소수는 1,000이상의 소수를 말한다
*/
// ! 1'st Try------- failed

//! 2'dn
// const primePassword1 = (curPwd, newPwd) => {
//   // TODO: 여기에 코드를 작성합니다.
//   // 기존의 password와 새로운 pwd가 같은 경우 0을 return 한다.
//   if (curPwd === newPwd) return 0;
//   // curPwd와 newPwd의 각 숫자를 배열로 담는다.
//   let curArray = curPwd.toString().split("");
//   let newArray = newPwd.toString().split("");
//   // queue 배visited을 한 개 생성한다.
//   let queue =visited[];
//   // memo 배열을 선언하여 curPwd의 인자들을 DeepCopy 한다.
//   let memo = curArray.slice();
//   // while문 종료를 위한 count
//   let count = 4;
//   let result = 0;
//   // ----
//   // count가 0이 될 떄까지 while문을 돌린다.
//   let idx = 0;
//   while (count !== 0) {
//     // newArray[idx]가 false가 아닌 경우
//     if (newArray[idx] !== false) {
//       // curArray[idx]와 값이 같다면  newArray[ids]=false 를 하고 idx++
//       if (newArray[idx] === curArray[idx]) {
//         newArray[idx] = false;
//         idx++;
//         count--;
//         continue;
//       }
//       // queue에 newPwe의 i번 째 인자 한 개를 push한다.
//       queue.pvisitedsh(newArray[idx]);
//       // queue.pop을 하여 curPwd의 i번째 요소에 할당한다.

//       curArray[idx] = queue.pop();
// parseInt(curArray.join(""))소수인지 판별한다.
//       // 만약 소수라면 newPwd의 i번째 요소에 0을 할당하고, count--
//       if (isPrime(parseInt(curArray.join("")))) {
//         count--;
//         newArray[idx] = false;
//         result++;
//       }
//       // 아니라면 idx++후 newArray 값 원상복귀 coutinue
//       else curArray[idx] = memo[idx];
//     }
//     idx++;
//     if (idx >= 4) idx = 0;
//   }
//   return result;
// };

//! 2'nd Try -- failed -> 문제 이해가 잘못됨.
// const primePassword = (curPwd, newPwd) => {
//   //count가 0인 조건이 재귀를 종료시키는 조건이다.
//   // TODO: 여기에 코드를 작성합니다.
//   // 기존의 password와 새로운 pwd가 같은 경우 0을 return 한다.
//   if (curPwd === newPwd) return 0;
//   // curPwd와 newPwd의 각 숫자를 배열로 담는다.
//   let curArray = curPwd.toString().split("");
//   let newArray = newPwd.toString().split("");
//   let visited = new Array(4).fill(false);

//   const result = isPrimeRecursive(curArray, newArray, visited, 4);
//   return result;
// };

// const isPrimeRecursive = (curArray, newArray, visited, count) => {
//   const goBack = (memo, i, el) => {
//     // isPrime === false || 재귀의 결과가 false 일 때 backtracking
//     curArray[i] = memo;
//     visited[i] = false;
//   };

//   let queue = [];
//   for (let i = 0; i < 4; i++) {
//     let memo = curArray[i]; // 되돌아 올 때 다시 넣어줄 값을 저장해둔다
//     if (!visited[i]) {
//       queue.push(newArray[i]);
//       curArray[i] = queue.shift();
//       visited[i] = true; // 방문했음을 의미

//       if (isPrime(parseInt(curArray.join("")))) {
//         if (count === 0) return 1; // 소수이고, queue의 길이가 0이면 마지막 남은 인수까지 완료했다는 의미 -> 성공
//         const result = isPrimeRecursive(curArray, newArray, visited, count - 1);
//         if (result) return result + 1;
//         else goBack(memo, i);
//       } else goBack(memo, i); // 소수가 아니라면 goBack
//     }
//   }
//   return false;
// };

//! 3'rd BFS 자료구조를 사용

const primePassword = (curPwd, newPwd) => {
  let queue = [curPwd]; // 인접한 노드를 넣는 queue  초기 노드는 현재 비번
  let count = 0; // 비밀번호 변경 횟수를 기록
  let base = 0; // 기준이 될 노드를 넣는 변수
  let queueTemp = []; // 임시 queue/
  let visited = {}; // 방문했음을 표시하는 Obj

  if (curPwd === newPwd) return 0;

  let newArr = newPwd.toString().split("");
  // queue에 노드가 없을 때 까지 반복한다.
  while (queue.length) {
    base = queue.shift(); // base에 탐색을 진행 할 queue에 있는 노드를 넣는다.

    for (let i = 0; i < 4; i++) {
      // newARr[i]를 base의 i 번 쨰 인덱스에 넣은 숫자를 반환
      let modifiedPwd = getModifiedNum(base, newArr[i], i);
      if (!(modifiedPwd in visited)) {
        visited[modifiedPwd] = true; // visited에 방문했음을 표시
        isPrime(modifiedPwd)
          ? queueTemp.push(modifiedPwd) // 소수이면 queueTemp에 push
          : queueTemp.push(...getPrime(base, i, visited)); // 아니면 소수를 구하고 push
      }
    }
    // 해당 idx에 해당하는 인접 숫자들을 구하고 queueTemp에 push한다.

    // count를 일려주기 위해 다음의 작업을 시행
    if (!queue.length) {
      // 동일 level의 노들이 다 돌 떄까지 queue를 업데이트 하지 않는다.
      // 만약 queueTemp에 newPwd가 있다면 return count
      if (queueTemp.indexOf(newPwd) > -1) return count + 1;
      // 이 떄 다음 level로 이동하므로 count++
      count++;
      queue.push(...queueTemp);
      queueTemp.length = 0; // queeuTemp 초기화
    }
  }

  return console.log("FAILED");
};

const getModifiedNum = (num, value, idx) => {
  numTostring = num.toString();
  if (idx === 0) return Number(value + numTostring.slice(1));
  else if (idx === 3) return Number(numTostring.slice(0, 3) + value);
  else
    return Number(
      numTostring.slice(0, idx) + value + numTostring.slice(idx + 1)
    );
};

const getPrime = (base, targetIdx, visited) => {
  // 기준이 되는 숫자의 targetIdx부분만 0~9까지 넣으면서 소수인지 확인하고
  // 배열에 넣은 후 배열을 리턴한다.

  // base를 배열로 변환
  let toArray = base.toString().split("");
  let result = [];
  let number;

  if (targetIdx === 0)
    // targetIdx가 첫 번째 인자인 경우  0을 제외한 값으로 반복문을 돌린다.
    for (let i = 1; i < 10; i++) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        // visited에 없다면
        visited[number] = true; // 방문했음 표시하고
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  else if (targetIdx === 3)
    for (let i = 1; i < 10; i += 2) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        visited[number] = true;
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  else
    for (let i = 0; i < 10; i++) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        visited[number] = true;
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  return result;
};

// 소수인지 팔별하는 함수
const isPrime = (number) => {
  // number의 제곱근을 구한다
  // 3부터 제곱근 보다 작거나 같은 정수까지 홀수만 number와 "%"연산을 해서 0이 나오면 false
  // 나워지지 않으면 true 를 return 한다.
  // number가 2 또는 3이면 true
  // else ifnumber가 짝수이면 false
  if (number === 2 || number === 3) return true;
  if (!(number % 2)) return false;
  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) if (!(number % i)) return false;
  return true;
};
let output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)

output = primePassword(1009, 1171);
console.log(output); // --> 5

output = primePassword(9787, 9923);
console.log(output); // --> 6
