const solution = (k = 0) => {
  //
  if (k <= 1) {
    return k;
  }

  return solution(k - 2) + solution(k - 1);
};

const result = solution(10);

console.log('result', result);
