const sudoku = function (board) {
  const N = board.length;
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];

  const getBoxNum = (row, col) => boxes[row][col];

  const blanks = []; //? 요소가 0인 index(x,y)를 배열로 저장
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } //
      else {
        //? 행,열,box에 사용된 숫자들을 표시가히 위함?
        const num = board[row][col]; //? 요소가 0이 아닌 경우에는 그 요소를 추출하여 nmm에 넣고
        const box = getBoxNum(row, col); //
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }
  //? 위의 과정을 거치면 초기 스도쿠의 요소가 0인 위치들과 (blanks) , 각 index에서 행,열,box에 사용된 숫자들이 표 시된다.

  const isValied = (row, col, num) => {
    //? 인자로 넘겨받은 row, col, num을 넣어서 사용된 적이 없으면 true를 return 해주고, 그 num은 후보 숫자가 된다.
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };

  const toggleNum = (row, col, num) => {
    const box = getBoxNumq(row, col);
    board[row][col] = num; //? 후보 숫자를 넣너줌
    //? 이 숫자가 사용됨을 표시해줌
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };

  const aux = (idx, blanks, board) => {
    //? blank의 길이 (요소가 0인 요쇼들의 개수)가 indx와 같다면 전체 0인 요소들은 모두 진행했다는 의미 --> true
    if (idx === blanks.length) {
      return true;
    }

    const [row, col] = blanks[idx]; //? index가 0인 요소의 index (x,y)를 전달한다.
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        //? num이 이 위치에서 후보 숫자가 맞다면
        toggleNum(row, col, num); //? 후보 숫자를 넣어주고 사용됨을 표시해준다.
        if (aux(idx + 1, blanks, board) === true) {
          //? 그 다음 요소가 0인 index로 같은 동작을 반복한다.
          return true;
        } //? false라면
        toggleNum(row, col, num);
      }
    }
    return false; //? 반복들 다 했는데도 찾지 못했다면  false
  };

  aux(0, blanks, board);
  return board;
};
