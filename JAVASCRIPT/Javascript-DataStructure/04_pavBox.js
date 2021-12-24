{
  function paveBox(boxes) {
    // result 배열을 한개 선언한다.
    let result = [];

    getCount(boxes, result);

    return Math.max(...result);
  }

  function getCount(arr, result) {
    if (!arr.length) return 0;
    let first = arr[0];
    let count = 0;
    // for 문을 돌린다
    for (let el of arr) {
      if (el > first) break;
      count++;
    }
    result.push(count);
    return getCount(arr.slice(count), result);
  }

  // let boxes = [5, 1, 4, 6];
  // let output = paveBox(boxes);
  // console.log(output); // 3
  // console.log(paveBox([95, 90, 99, 99, 80, 99]));
}

{
  function pavBox2(boxes) {
    // 예외처리
    //   만약 boxex의 길이가 0이면 return 0
    // 새로운 배열arr에 boxes를 복사한다.
    // count를 넣을 배열 result를 선언한다
    // 배열의 길이가 0보다 클 떄동안 반복문을 돌린다
    //   배열의 첫 번째 요소를 넣을 변수 first를 선언한다
    //   count 변수를 선언한다.
    //   반복문을 요소의 갯수만큼 돌린다(배열의 길이만큼)
    //      만약 요소가 first 보다 크면 break
    //      아니면, count에 1을 더한다.
    //   반복문을 나오면 result에 count를 push한다.
    //   arr.split(count)만큼 자른다.
    // 첫 번쨰 반복문이 끝나면 result의 최대 값을 반환한다.

    // 예외 처리
    if (boxes.length === 0) return 0;

    let newArr = boxes.slice();
    let result = [];
    while (newArr.length > 0) {
      let first = newArr[0];
      let count = 0;
      for (let person of newArr) {
        if (person > first) break;
        count += 1;
      }
      result.push(count);
      newArr.splice(0, count);
    }
    return Math.max(...result);
  }

  let boxes = [5, 1, 4, 6];
  let output = pavBox2(boxes);
  console.log(output); // 3
  console.log(pavBox2([95, 90, 99, 99, 80, 99]));
}
