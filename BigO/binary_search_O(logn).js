// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function generateUniqueRandomNumbers(size, min, max) {
//     const numbers = new Set();

//     while (numbers.size < size) {
//       numbers.add(getRandomInt(min, max));
//     }

//     return Array.from(numbers);
//   }

//   // 0 ~ 100 사이의 중복되지 않은 임의의 정수값 10개 생성
//   const uniqueRandomNumbers = generateUniqueRandomNumbers(10, 0, 100);

//   console.log(uniqueRandomNumbers);

function generateUniqueRandomNumbers() {
  const numbers = new Set();

  while (numbers.size < 10) {
    const random = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    numbers.add(random);
  }

  return Array.from(numbers);
}

const numberList = generateUniqueRandomNumbers();

const sortData = numberList.sort((a, b) => a - b);
console.log(sortData);

const solution = (list = [], value = 0) => {
  let start = 1;
  let end = list.length;

  while (start <= end) {
    let i = Math.trunc((start + end) / 2);
    console.log(`now - start :${start}, end :${end}, i번째:${i}, ${list[i]}`);

    if (list[i] > value) {
      end = i - 1;
    } else if (list[i] < value) {
      start = i + 1;
    } else {
      console.log(i);
      return i;
    }
  }

  return -1;
};

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = solution(numberList, 8);

console.log('answer', answer);
