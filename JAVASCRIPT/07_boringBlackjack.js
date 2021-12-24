/*
07_boringBlackjack
주어진 배열에서 3장을 뽑아 만들 수 있는 숫자 중 소수가 되는 경우의 수를 return 하는 함수를 만든다.
입력 : cards Array 3<=len-1<=50의 카드가 숫자로 있는 배열 
출력 : Number type return
주의 : 중복된 숫자의 카드는 들어있지 않다.
각 카드에 적힌 수는 1이상 1,000 이하의 자연수이다.
*/
function boringBlackjack(cards) {
  // TODO: 이 문제는 조합으로 푸는 문제이다. 순열과 같이 dfs를 이용한다.
  let numOfPrime = 0;
  let prime = [];

  const dfs = (sum, visited, count) => {
    count = count ?? 1;
    let len = cards.length;
    visited = visited ?? new Array(len).fill(0);

    if (count === 3) {
      // 3장을 뽑았다면
      for (let i = 0; i < len; i++) {
        // 반복문을 돌리고 만약 소수이고 중복된 값이 아니라면 소수 개수에 추가한다.
        if (!visited[i]) {
          visited[i] = 1;
          let temp = sum + cards[i];
          if (isPrime(temp)) {
            numOfPrime += 1;
            prime.push(temp);
          } else continue;
        }
      }
    } else
      for (let i = 0; i < len; i++) {
        if (!visited[i]) {
          // 방문한 적이 없다면
          visited[i] = 1; // 방문 했음을 표시 후
          dfs(sum + cards[i], [...visited], count + 1); // dfs 진행
        }
      }
    return;
  };

  dfs(0);
  return numOfPrime;
}

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

//! ref
function boringBlackjackRef(cards) {
  let count = 0;

  // 1. cards 에서 카드 3장 뽑기
  let length = cards.length;
  // 카드 뽑는 방식은 첫 카드를 cards 의 0번 index 부터 고정해 놓고 1씩 뒤로 옮겨간다
  for (let i = 0; i < length; i++) {
    // 두 번째 카드의 인덱스는 첫 카드 + 1에서 시작해야 하고
    for (let j = i + 1; j < length; j++) {
      // 세 번째 카드의 인덱스는 두 번째 카드 + 1에서 시작해야 한다
      for (let k = j + 1; k < length; k++) {
        const number = cards[i] + cards[j] + cards[k];
        // 세 카드의 합이 소수이면 경우의 수 + 1
        if (isPrime(number)) count++;
      }
    }
  }

  //2. 소수 판별
  function isPrime(number) {
    // 2부터 비교하기 시작해서 나누어 떨어지는 수가 있으면 소수가 아니다
    // for 문 조건을 number/2 로 해도 되는 이유는 i > number/2 가 되면 몫이 절대 0이 될수 없기 때문에
    // number/2 까지만 비교해 보아도 소수 판별이 가능하다
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}

//! test

// let output = boringBlackjack([1, 2, 3, 4]);
// console.log(output); // 1

// let output2 = boringBlackjack([2, 3, 4, 8, 13]);
// console.log(output2); // 3

// let output3 = boringBlackjack([2, 4, 6, 8, 14, 27]);
// console.log(output3); // 5
console.time();
let output4 = boringBlackjack([
  3, 5, 7, 11, 19, 22, 27, 29, 33, 39, 41, 49, 51, 56, 89, 34, 14, 53, 77,
]);
console.timeEnd();

console.time();
let output5 = boringBlackjackRef([
  3, 5, 7, 11, 19, 22, 27, 29, 33, 39, 41, 49, 51, 56, 89, 34, 14, 53, 77,
]);
console.timeEnd();
