function maxSubarraySumQuadratic(nums) {
  const n = nums.length;
  const prefixSum = Array(n).fill(0);
  console.log('prefixSum', prefixSum);

  let maxSum = nums[0];

  // 누적합 계산
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  // 모든 가능한 부분 배열의 합을 계산하여 최대값 찾기
  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      let currentSum = prefixSum[end];
      if (start > 0) {
        currentSum -= prefixSum[start - 1];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySumQuadratic(list)); // 이 함수는 주어진 배열에서 가능한 모든 부분 배열의 최대 합을 계산합니다.
