const temp = [73, 74, 75, 71, 69, 72, 76, 73];

const solution = (tempData) => {
  let stack = [];
  let answer = tempData.map(() => 0);

  // 온도 리스트를 한번 돈다.
  // -> 방향으로 돈다
  for (i in temp) {
    /**
     * 1. stack이 있어야함
     * - 현재 값이 stack 내용들을 바교하므로.
     * - stack 내용이 더 양이 적고 바로바로 out될 수 있으므로
     *
     * 2. stack_top을 비교하는 이유
     * - 현재 위치가 계속 앞으로 가므로
     */
    while (stack.length > 0 && stack[stack.length - 1][1] < temp[i]) {
      const popData = stack.pop(); // stack에서 맨 뒤 제거

      const result_day = i - popData[0]; // 현재 위치와 stack_top의 위치 뺌
      answer[Number(popData[0])] = result_day; // stack_top 위치가 answer의 위치이므로
    }

    stack.push([i, temp[i]]); // 현재 위치는 계속 push (나중에 while을 통해 빠짐)
  }

  console.log(answer);
};

solution(temp);
