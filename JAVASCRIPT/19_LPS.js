// 19_LPS
/*
문제 : 문자열을 입력받고 다음의 조건을 만족하는 LPS를 찾아 그 길을 return 한다.
LPS란, 주어진 문자열의 가잗 긴 접두어이자 접미어(Longest Prefix which is also Suffix)
non-overlapping : 접두어와 접미어는 서로 겹치는 부분이 없어야 한다. 
prefix와 suffix는 문자열의 동일한 인덱스테 위치한 문자를 요소로 가지면 안 된다.

인자1 str
str 타입의 알파벳 소문자 문자열 len <=60,000
출력 : num타입

예를들어, aabaa의 경우 aa가 가장 긴 접두어이자 접미어이다.
*/

const LPS1 = function (str) {
  // 문자열을 반으로 자른다.
  // 각 각 prefix, suffix 라는 변수에 담는다.
  // prefix가 str/2보다 작을 동안 반복한다.
  // prefix에 str의 문자를 첫 번째 문자부터 넣는다
  // suffix에는 마지막 문자를 넣는다.
  // 두 변수를 비교하고 같다면 result 배열에 길이를 Push한다.
  // 반복이 끝나면 배열의 최댓갑을 반환

  let result = [];

  let len = str.length - 1;

  let [prefix, suffix] = ["", ""];

  let iterator = str.length % 2 === 0 ? str.length / 2 : str.length / 2 - 1;

  for (let i = 0; i < iterator; i++) {
    prefix += str[i];
    suffix = str[len - i].concat(suffix);
    if (prefix === suffix) result.push(prefix.length);
  }

  return result.length === 0 ? 0 : Math.max(...result);
};

const LPS = (str) => {
  const result = str.match(/^(\w*).*\1$/);
  return result[1].length;
};

let output = LPS("codecodecode");
console.log(output); // --> 4

output = LPS("aaaa");
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(2)
// non-overlapping 조건이 없는 경우 정답은 4 입니다.

output = LPS("aaaaa");
console.log(output); // --> 2
// prefix: str.slice(0, 2)
// suffix: str.slice(3)
// non-overlapping 조건이 없는 경우 정답은 5 입니다.

/*reg expression
 const result = str.match(/^(\w*).*\1$/);
  return result[1].length;
  */
