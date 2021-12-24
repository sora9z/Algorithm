// 02_fibonnaci
// 문제 : 피보나치 수열 중 n번째 항의 수를 리턴한다.
// function fibonacci(n) {
//     // 재귀적으로 구현
//     if(n===0)
//     return 0;
//     else if(n===1)
//     return 1;
//     return fibonacci(n-2)+fibonacci(n-1)
//   }

// 메모리를 앋는 함수를 선언한다 (getMemmory)
// getMemmory(n,메모리로 사용 하는 arr)
// 만약 arr[n-2]가 없다면
// getMemmory(n-2,arr)
// 만약 arr[n-1]이 없다면
// getMemmory(n-1,arr)
// arr[n]+=arr[n-2]+arr[n-1]

const getMemmory = (n, arr) => {
  if (!arr[n - 2]) getMemmory(n - 2, arr);
  if (!arr[n - 1]) getMemmory(n - 1, arr);
  arr.push(arr[n - 1] + arr[n - 2]);
};

function fibonacci(n) {
  // 값이 중복 된다면, 중복되는 값을 미리 메모리에 저장을 해놓고, 존재 한다면 불러오는 방식으로 진행해본다,

  // 메모리를 담당할 배열을 한 개 선언하고
  // 0,1,2 일때의 값만을 미리 넣어둔다
  // 만약 n<2 이면 --> 1을 리턴한다
  // 아니면 다음을 실행한다

  // return arr[n]을 한다

  let memmory = [0, 1, 1];
  if (n < 2) return 1;
  else {
    if (!memmory[n - 2]) getMemmory(n - 2, memmory);
    if (!memmory[n - 1]) getMemmory(n - 1, memmory);

    memmory.push(memmory[n - 1] + memmory[n - 2]);
    return memmory[n];
  }
}

//   let output = fibonacci(0);
// console.log(output); // --> 0

// output = fibonacci(1);
// console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
