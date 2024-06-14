const value = 10;

let chk = new Array(value).fill(0);
let dt = new Array(value).fill(0);

const solution = (n) => {
  console.log(`n : ${n} / dt: ${dt}`);
  if (chk[n] === 1) return dt[n]; // 재귀함수 전부 넣으면... 그때 재귀 종료하고 각 값을 더함
  chk[n] = 1;

  if (n <= 2) return (dt[n] = 1);

  return (dt[n] = solution(n - 1) + solution(n - 2)); // 역계산
};

const result = solution(value);
console.log('result', result);
console.log('dt', dt);
