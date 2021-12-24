/*
현재 가지고있는 동전 : [1,5,10,50,100,500] 각 동전들은 서로 배수관계에 있다.
동전의 개수를 최소화하여 거스름돈 K를 만들어야 한다. 이 떄, 필요한 동전 개수의 최솟값을 구하는 함수를 작성하라
인자 k: 1<=k<=100,000,000
출력 : number 타입의 거스틈론 k원을 만드는게 필요한 동전 개수의 최솟값을 반환
*/
function partTimeJob(k) {
  // Todo : 매 순간 최적의 선택은, 액수가 큰 동전을 제일 많이 사용하는 것이다.
  // k를 제일 큰 500으로 나눈 정수 값을 구하고 갯수를 곱한 값을 뺀 나머지 금액을 구한다.
  // 500으로 나눈 정수 값은 count에 기록한다.

  const coins = [500, 100, 50, 10, 5, 1];
  let mony = k;
  let count = 0;

  for (let coin of coins) {
    let qty = parseInt(mony / coin);
    if (qty < 1) continue; // 만약 1보다 작으면 다름 coin으로
    mony -= qty * coin;
    count += qty;
  }
  return count;
}

// 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
const output1 = partTimeJob(4000);
console.log(output1); // --> 8

// 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
const output2 = partTimeJob(4972);
console.log(output2); // --> 18
