// https://leetcode.com/problems/remove-duplicate-letters/

// 중복된 문자를 제외하고 사전식 순서로 나열하는 문제

/*
? 자료구조를 알고리즘에 적용하는 연습을 하고싶어 문제를 골아보았습니다.  
? ,queue stack과 같은 기본적인 자료구조부터 시작하여 관련 문제를 풀면서
? 자료구조를 적절히 사용하는 연습이 되길 바랍니다!! 

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

EX1
Input: s = "bcabc"
Output: "abc"

EX2
Input: s = "cbacdcbc"
Output: "acdb"

Constraints:
1 <= s.length <= 10^4  
? --> O(nlogn)으로 풀어야 한다??
s consists of lowercase English letters.


! HINT : Stack

? lexicographical order 의미????
? https://stackoverflow.com/questions/34531748/how-to-get-the-smallest-in-lexicographical-order

*/
// O(n)
var removeDuplicateLetters = function (s) {
  // 중독되었음을 확인하는 객체를 한 개 생성한다 duplicateCheck --> isIn은 들어있는지 check
  // 만약 result가 비어있다면 한 개를 넣는다.
  // s길이만큼 반복문을 돌린다.
  // 문자를 한 개씩 뽑아서 result에 넣는다.
  // result 마지막 문자 comp와 s에서 뽑은 문자 Node를 비교한다.
  // if comp === Node 이면 comp개수 --
  // else if comp > Node 이고 dubplicateCheck에 comp의 개수가 >1이라면
  // result.pop() , result.push(Node) , comp개수 -=1
  // else (comp < Node or comp > Node 이지만 comp의 개수가 유일한 경우 )
  // result.push(Node)

  const getDuplicateChecker = () => {
    let obj = {};
    for (key of s) {
      if (!(key in obj)) {
        obj[key] = {};
        obj[key].count = 1;
        obj[key].isIn = false;
      } else obj[key].count += 1;
    }
    return obj;
  };

  let checkD = { ...getDuplicateChecker() };
  let result = [];
  result.push(s[0]);
  checkD[s[0]].isIn = true;
  let i = 1;
  let node = 0;
  while (i < s.length) {
    let comp = result[result.length - 1];
    node = node === 0 ? s[i] : node;

    if (checkD[node].isIn) {
      // 만약 중복값이 있다면 넘어감
      checkD[node].count -= 1;
      i++;
      node = 0;
      continue;
    } else if (comp > node && checkD[comp].count > 1) {
      // node보다 작으면 comp뺀다
      result.pop();
      checkD[comp].count -= 1;
      checkD[comp].isIn = false;
      continue;
    }
    // 위의 조건이 만족하지 않는다면 node로 change
    result.push(node);
    checkD[node].isIn = true;
    node = 0;
    i++;
  }

  return result.join("");
};
console.log(removeDuplicateLetters("bddbccd")); // ->  "bbcd"
console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));
console.log(removeDuplicateLetters("dfjhgkfiruykafjdfblfpo"));
// my->"dfhgiruykajblpo"
// --> "dfhgiruykajblpo"
