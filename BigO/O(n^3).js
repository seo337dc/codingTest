const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function solution(nums = []) {
  let sum = nums[0]; // 처음 결과 값 : num가 어떤 값이 나올수 없으므로 우선 첫번째가 답

  // 각 부분의 시작점 구하기
  for (let start = 0; start < nums.length; start++) {
    // 각 부분의 끝점 구하기 - 끝점이 start시작하여 끝까지 이동
    for (let end = start; end < nums.length; end++) {
      // 정해진 시작점과 끝점의 합을 구한다
      let currentSum = 0;
      for (let i = start; i < end; i++) {
        currentSum = currentSum + nums[i]; // currentSum += nums[i];
      }

      // 여기서 구해진 값을 비교하여 sum을 교체
      if (sum < currentSum) {
        sum = currentSum;
      }
    }
  }

  console.log(sum);
}

solution(list);
