/*
21_inequalityNumber
아래와 같은 과정을 통해 부등호 수를 만들 수 있다.
- 최대 9개의 부등호(< >)가 주어진다.
- 부등호의 좌우에 0부터 9까지의 숫자가 한 번씩 들어가야한다
- 부등호를 만족하는 숫자의 조합을 차례대로 이어 붙여 만든 정수를 부등호수라고 한다.

부등호 기호들을 입력받아 부등호를 만족하는 최대 부등호 수와 최소 부등호 수의 차이를 리턴한다.

입력 : signs : string 타입의 공백을 사이에 둔 부등로 기호등
length는 17이하이다.
출력 : num타입

Caution : 첫 자리가 0인 경우도 부등호 수에 포함되어야 한다.
모든 입력에 답은 항상 존재한다.
*/
//! def이용
const inequalityNumber1 = function (signs) {
  // maxNum , minNum을 각각 선언하여 9,0 까지 0,9까지의 정수로 초기화한다.
  //const max=getInequalityNum(max) 함수를 사용하여 최대값을 구한다
  // const min=getInequalityNum(min) 함수를 사용하여 최소값을 구한다.
  // return max-min

  /* getInequalityNum(arr){

    let result=[]
    let visited=[false x 10]   
    result.push(arr[0]) 초기값을 넣는다.
    visited[0]=true 방문 표시
    return dfs(visited,[...result])

    const dfs =(visited,result){
        consg sign=signs 첫 번쨰 문자 
        const target = result 마지막 숫자
        for(node : arr){
            if(sign ==="<")
                taeget < node ? result.push(node)
                visited[node index] = true
                if not return (back tacking)
            else
                target>node ? result.push
                visited[node index] = true
                if not return (back tracking)

            if signs.len ===0 ? return result
            else dfs(visited,[...result])            
        }
    }
    
  }
  */
  const getInequalityNum = (arr) => {
    let visited = new Array(10).fill(false);

    const dfs = (visited, result, signsArr) => {
      const sign = signsArr[0]; //첫 번쨰 문자
      const target = result[result.length - 1]; //마지막 숫자
      let isZero;

      for (let i = 0; i < arr.length; i++) {
        // 부등호완성
        if (!signsArr.length) {
          return result;
        }
        if (visited[i]) continue;
        if (target === undefined) {
          // 첫 번째 문자를 넣는 경우
          visited[i] = true;
          isZero = dfs([...visited], result.concat([arr[i]]), [...signsArr]);
          if (isZero === 0) {
            visited[i] = false;
          } else return isZero;
        } //;
        else {
          if (sign === "<") {
            if (target < arr[i]) {
              visited[i] = true;
            } else return 0;
          } else if (sign === ">") {
            if (target > arr[i]) {
              visited[i] = true;
            } else return 0;
          }

          isZero = dfs(
            [...visited],
            result.concat([arr[i]]),
            signsArr.slice(1)
          );

          if (isZero === 0) {
            visited[i] = false;
          } else return isZero;
        }
      }
      return result;
    };

    return Number(dfs([...visited], [], signs.split(" ")).join(""));
  };

  const [maxNums, minNums] = [
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const max = getInequalityNum(maxNums);
  console.log(max);
  const min = getInequalityNum(minNums);

  return [max, min, max - min];
};

// ? 가독성 있게 고쳐보기
// 부등호에 따른 처리의 코드가 중복되어있다. 중복성을 최소화 해보자
const inequalityNumber = function (signs) {
  const getInequalityNum = (arr) => {
    let visited = new Array(10).fill(false);

    const dfs = (visited, result, signsArr) => {
      const sign = signsArr[0]; //첫 번쨰 문자
      const target = result[result.length - 1]; //마지막 숫자
      let isZero;

      for (let i = 0; i < arr.length; i++) {
        // 부등호완성
        if (!signsArr.length) {
          return result;
        }
        if (visited[i]) continue;

        let node = arr[i];

        if (target >= 0) {
          // 첫 번째 숫자가 아닌 경우
          // (중복되었던 코드) 부등호에 맞지 않는 경우만 return 0을 하므로 같이 처리를 해준다.
          if (sign === "<" && target >= node) return 0;
          else if (sign === ">" && target <= node) return 0;
          else {
            // 위의 조건을 마족할 경우 첫 번째 값이 아니고 부등호에도 맞는 경우임.
            // 중복되는 부분은 visited 표시, dfs진행
            visited[i] = true;
            isZero = dfs(
              [...visited],
              result.concat([arr[i]]),
              signsArr.slice(1)
            );
          }
        } else {
          // 첫 번째 숫자인 경우
          visited[i] = true;
          isZero = dfs([...visited], result.concat([arr[i]]), [...signsArr]);
        }

        if (isZero === 0) {
          visited[i] = false;
        } else return isZero;
      }
      return result;
    };
    return Number(dfs([...visited], [], signs.split(" ")).join(""));
  };

  const [maxNums, minNums] = [
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  const max = getInequalityNum(maxNums);
  const min = getInequalityNum(minNums);

  return [max, min, max - min];
};

// let output = inequalityNumber("<");
// console.log(output); // --> 88 (89 - 01)

// let output2 = inequalityNumber("< >");
// console.log(output2); // --> 876 (897 - 021)

// output = inequalityNumber("> < >");
// console.log(output); // --> 8,754 (9,786 - 1,032)

// let sign = "> > > > < > < > >";
let output3 = inequalityNumber("> > > > < > < > >");
console.log(output3);
// should.equal(5555386323);

//? ref
const inequalityNumber_ref = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    if (idx === signs.length) {
      // 부등호 수를 만든 경우
      return parseInt(nums.join(""));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      // 숫자를 차례대로 검토한다.
      // max를 구할 때는 9부터, min을 구할 때는 0부터
      const right = digits[i];
      // 이전 단계에서 사용한 숫자인 경우 스킵
      if (isVisited[right]) continue;

      // 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
      if (idx >= 0) {
        // 항상 바로 직전의 숫자와 비교하면 된다.
        const left = nums[nums.length - 1];
        if (sign === "<" && left >= right) continue;
        if (sign === ">" && left <= right) continue;
      }

      // 조건을 만족하거나 첫번째 숫자인 경우
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) {
        // 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다.
        return target;
      }
      // 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
      isVisited[right] = false;
    }

    return undefined;
  };

  signs = signs.split(" ");
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};
