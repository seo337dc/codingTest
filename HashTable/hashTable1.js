const nums1 = [4, 1, 9, 7, 5, 3, 16];
const target1 = 14;

const hasTableFun = (num, target) => {
  // 1. Dic 만들기
  let dic = {};
  for (let i = 0; i < num.length; i++) {
    dic[num[i]] = num[i];
  }

  // 2. dic 활용하면서 문제 풀기 (핵심)
  for (let i = 0; i < num.length; i++) {
    const value = target - num[i]; // target과 순회 한 값의 차
    const check = value in dic; // 딕션너리에 차의 결과 물이 있으면 output조건에 맞으므로 true

    if (check === true) return true;
  }

  // 3. 위에 output 조건을 찾지 못하면 false 반환r
  return false;
};

const result1 = hasTableFun(nums1, target1);
console.log(result1);

const nums2 = [2, 1, 5, 7];
const target2 = 4;

const result2 = hasTableFun(nums2, target2);
console.log(result2);
