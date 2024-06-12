function solution(list = [], value = 0) {
  // for 문
  //   for (let i = 0; i < list.length; i++) {
  //     console.log('i', i);
  //     if (list[i] === value) {
  //       return i;
  //     }
  //   }
  //   return -1;
  let i = 0;
  while (i < list.length) {
    console.log('i', i);
    if (list[i] === value) {
      return i;
    }
    i++;
  }
  return -1;
}

let numbers = [50, 30, 20, 10, 50, 40];

const answer = 10;

const result = solution(numbers, answer);

console.log('result', result);
