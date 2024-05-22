function solution(n) {
  let ans = 0;

  for (let a = 1; a <= n; a++) {
    ans = a + ans;
  }

  console.log('ans', ans);
}

solution(8);
