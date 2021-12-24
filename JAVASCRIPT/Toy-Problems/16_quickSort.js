// 16_quickSort
/* 문제 
정수를 요소로 갖는 배열을 입력받아 오름차숭느로 정리하여 return
인자 : arr - num타입을 요소로 갖는다.  각 요소는 정수이다. 배열의 길이는 100,000이하이다.

출력 : num타입을 갖는 배열을 return 한ㄷ.
배열의 요소는 오름차순으로 정렬된다.
*/
/* pivot 을  기준으로 하여 pivot보다 작은 경우 pivot의 왼쪽에,
pivot 보다 큰 경우 pivot의 오른 쪽에 요소들을 놓는 방식으로 pivot을 기준으로 partition을 하는 방식이다
*/

const quickSort_pivot_hi = function (arr) {
  //
  const quickSortrecursive = (arr, lo, hi) => {
    // pivot은 배열의 가장 우측에 있는 요소로 한다.
    let pivot = arr[hi];
    // left 와 right를 가리키는 변수 두 개를 선언하고 배열의 첫 번째 요소로 초기화를 진행하다.
    let left = lo;

    // right이 arr.length보다 작을 때까지 반복한다
    for (let right = lo; right <= hi; right++) {
      if (arr[right] < pivot) {
        // 만약 right이 가리키는 인자가 pivot보다 작다면,
        //  left가 가리키는 인자와 right가 가리키는 인자를 swap한다.
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // left를 증가시킨다
        left++;
      }
    }

    // 반복문이 끝나고 pivot과 left를 바꾼다 --> pivot은 위치해야 할 곳에 위치함 -> partition [ 1,4 ,6 ,8 left, g.g right]
    [arr[hi], arr[left]] = [arr[left], arr[hi]];
    pivot = arr[left];

    if (lo < hi) {
      // lo>=hi 이면 재귀는 종료
      let pivotIdx = arr.indexOf(pivot);
      if (pivotIdx !== lo && pivotIdx - 1 !== lo) {
        // pivot이 lo가 아니거나 pivot의 index -1이 lo이 아닌 경우만
        quickSortrecursive(arr, lo, arr.indexOf(pivot) - 1);
      }
      if (pivotIdx !== hi && pivotIdx - 1 !== hi) {
        // pivot이 hi가 아니거나 pivot의 index-이 hi가 아닌 경우에만
        quickSortrecursive(arr, arr.indexOf(pivot) + 1, hi);
      }
    }
    return true;
  };
  quickSortrecursive(arr, 0, arr.length - 1);
  return arr;
};

const quickSort2 = function (arr) {
  //
  const quickSortrecursive = (lo, hi) => {
    if (hi - lo < 1) return true;
    // pivot은 배열의 가장 우측에 있는 요소로 한다.
    // let pivot = arr[hi];
    let [pivot, pivotIdx] = [
      arr[Math.floor((lo + hi) / 2)],
      Math.floor((lo + hi) / 2),
    ];

    // left 와 right를 가리키는 변수 두 개를 선언하고 배열의 첫 번째 요소로 초기화를 진행하다.
    let left = lo;

    // right이 arr.length보다 작을 때까지 반복한다
    for (let right = lo; right <= hi; right++) {
      if (arr[right] < pivot) {
        // 만약 right이 가리키는 인자가 pivot보다 작다면,
        //  left가 가리키는 인자와 right가 가리키는 인자를 swap한다.
        [arr[left], arr[right]] = [arr[right], arr[left]];

        // left를 증가시킨다
        left++;
      }
    }
    // 반복문이 끝나고 pivot과 left를 바꾼다
    [arr[pivotIdx], arr[left]] = [arr[left], arr[pivotIdx]];

    pivotIdx = left;

    if (lo < hi) {
      // lo>=hi 이면 재귀는 종료

      if (pivotIdx !== lo && pivotIdx - 1 !== lo) {
        // pivot이 lo가 아니거나 pivot의 index -1이 lo이 아닌 경우만
        quickSortrecursive(lo, pivotIdx - 1);
      }
      if (pivotIdx !== hi && pivotIdx - 1 !== hi) {
        // pivot이 hi가 아니거나 pivot의 index-이 hi가 아닌 경우에만
        quickSortrecursive(pivotIdx + 1, hi);
      }
      return true;
    }
    return true;
  };
  quickSortrecursive(0, arr.length - 1);
  return arr;
};

//! --------- 2 번째 방식

const quickSort = function (arr, cb) {
  if (cb === undefined) cb = (item) => item;

  // arr이 한 개이면 종료
  if (arr.length === 1) return arr;
  const lo = 0;
  const hi = arr.length - 1;
  let pivot = undefined;

  //! partition (pivot)을 구하는 method
  const partition = (lo, hi) => {
    // pivot은 배열의 중간 값
    let pivot = arr[Math.floor((lo + hi) / 2)];
    let left = lo;
    for (let right = lo; right <= hi; right++) {
      if (cb(arr[right]) < cb(pivot)) {
        // 만약 right이 가리키는 인자가 pivot보다 작다면,
        //  left가 가리키는 인자와 right가 가리키는 인자를 swap한다.
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // left를 증가시킨다
        left++;
      }
    }
    let pivotIdx = arr.indexOf(pivot);
    [arr[pivotIdx], arr[left]] = [arr[left], arr[pivotIdx]];
    return left;
  };

  if (lo < hi) {
    let pivot = partition(lo, hi); // partition을 구한다.
    // lo>=hi 이면 재귀는 종료
    let prevarr = arr.slice(lo, pivot); // pivot 이전의 배열
    let nextarr = arr.slice(pivot + 1); // pivot 이후의 배열

    if (pivot !== lo && pivot - 1 !== lo) prevarr = [...quickSort(prevarr, cb)];
    if (pivot !== hi && pivot + 1 !== hi) nextarr = [...quickSort(nextarr, cb)];
    return [...prevarr, arr[pivot], ...nextarr];
  }
  return arr;
};

function quickSort_ref(arr, transform = (item) => item) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort_ref(left, transform);
  const rSorted = quickSort_ref(right, transform);
  return [...lSorted, pivot, ...rSorted];
}

//! test
console.time();
let output = quickSort_ref([5, 4, 3, 2, 1, 1, 2, 2, 5, 5, 5, 6, 5, 3, 4]);
console.timeEnd();
console.log(output); // --> [1, 2,3,4,5]

// const cb = (item) => item * item;
console.time();
let output3 = quickSort([5, 4, 3, 2, 1, 1, 2, 2, 5, 5, 5, 6, 5, 3, 4]);
console.timeEnd();
console.log(output3);

// ? 새로 배열을 만들어서 넣는 것 보다 기존의 배열을 수정하는 편이 더 빠른 듯 하다 (mutable)
