const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function solution(nums = []) {
  let answer = [];

  for (let start = 0; start < nums.length; start++) {
    console.log(`now - ${start}번째 :`, nums[start]);
    console.log(`now as - ${start}번째 :`, answer);

    if (start === 0) {
      answer.push(nums[0]);
    } else {
      console.log(`비교 nums[start]:`, nums[start]);
      console.log(
        `비교 nums[start - 1] + nums[start]:`,
        nums[start - 1] + nums[start]
      );

      if (nums[start] > answer[start - 1] + nums[start]) {
        answer.push(nums[start]);
      } else {
        answer.push(answer[start - 1] + nums[start]);
      }
    }
  }

  const test = Math.max(...answer);
  return test;
}

solution(list);
