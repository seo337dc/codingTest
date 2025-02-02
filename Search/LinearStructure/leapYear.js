// 한 자연수를 입력받아서 윤년인지 아닌지를 판단하는 프로그램을 작성하시오. 단, 윤년은 다음과 같은 성질을 가진다.

/**
 * 성질
 * 1. 400의 배수이면 윤년이다.
 * 2. 1이 아닌 값 중에 4의 배수이면서 100의 배수가 아니면 윤년이 아니다.
 */

const n = 104;

const solution = (num) => {
  if (400 % num === 0) {
    return true;
  }

  if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  }

  return false;
};

const result = solution(n);
