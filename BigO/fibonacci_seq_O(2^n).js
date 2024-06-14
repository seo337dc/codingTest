const solution = (k = 0) => {
  // 1. 재귀호출 종료 조건
  if (k <= 1) {
    return k;
  }

  // 2. 2이상일 경우 solution(k) 계산하기 위해  solution(k - 2) + solution(k - 1)
  // 각각 k가 0이나 1이 될때까지 계속 호출
  return solution(k - 2) + solution(k - 1);
};

const result = solution(10);

console.log('result', result);
