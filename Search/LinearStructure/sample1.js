// n개의 정수로 이루어진 수열이 있다. 이 정수열에서 k가 어느 위치에 있는지 검색하는 프로그램을 작성

/**
 * 입력 설명
 * 1. 첫번째 줄에는 자료의 수 n과 k가 공백을 기분으로 입력된다. (1 <= n)
 * 2. 두번째 줄에는 n개의 정수가 입력된다. n개의 정수 중 i번째 원소는 Mi이고, 각 원소는 공백으로 구분뒈어 차례로 입력된다. (s, Mi <= 100,000)
 */

/**
 * 출력 설명
 * 1. s가 몇 번째 자료인지 출력한다.
 * 2. 만약 s가 존재하지 않는다면 -1을 출력한다.(단, 찾는 값이 여러개 존재할 경우에는 제일 먼저 나오는 값으 인덱스 출력)
 */

/**
 * 예시 1)
 * 입력
 * - 5 3
 * - 5 2 9 7 3
 *
 * 출력 : 5
 */

const n = Math.floor(Math.random() * 99) + 1; // 랜덤 숫자 : n
const input1 = `${n} ${Math.floor(Math.random() * 100000) + 1}`;

// 1 ~ 100000 사이의 랜덤 숫자 n개 생성
const input2 = Array.from(
  { length: n },
  () => Math.floor(Math.random() * 100000) + 1
);

const solution = (input1Value, input2Value) => {
  const input1List = input1Value.split(" ").map((v) => Number(v));
  const input2List = input2Value.map((v) => Number(v));

  const k = input1List[1];

  for (let i = 0; i < input2List.length; i++) {
    if (k === input2List[i]) {
      return i + 1;
    }
  }

  return -1;
};

const s = solution(input1, input2);

console.log("s", s);

/**
 * 예시 2)
 * 입력
 * - 5 4
 * - 5 2 9 7 3
 *
 * 출력 : -1
 */
