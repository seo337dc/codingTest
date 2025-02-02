# 문제

정수가 저장된 뱅렬 nums이 주어졌을 때,
nums의 원소중 두 숫자를 더해서 target이 될 수 있으면 true, 불가능하면 false를 반환하세요.
같은 원소를 두 번 사용할 수 없다.

# 제약조건

- 2 <= nums.length < 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9

# 예시

1.

- input : nums = [4,1,9,7,5,3,16] / target : 14
- output : True

2.

- input : nums = [2,1,5,7] / target : 4
- output : False

# 문제풀이 - 해시테이블 사용방법

- 처음에 리스트를 읽었을 때, 미리미리 다 기억을 해버린다. (뇌)
- 그리고 그냥 기억하는 것이 아니라, 하나하나 확인 했을 때, 해당 값을 노출하기 위한 값을 미리 찾아본다.

# 방법

1. 뇌 : Dictionary
2. 한번 리스트를 훓는다. 그럴 때마다 dic에 저장한다.
3. dic의 key를 넣는다 : 데이터를 찾을려면 key를 통해 비교하기 때문
4. 만약 만개 이상의 값이 있다. 그 키 값을 통해 바로 접근이 가능하다.
5. hasfunc으로 해당 키를 넣어서 값을 찾도록 한다.

# 코드 설계

- 딕션너리 선언
- 리스트의 키 값을 다 저장
  `for v in list {  dic[v] = true }` : o(n) / o(1)
- 다시 리스트를 순회하면서 해당 값과 target의 차이를 구하여, dic에 있는지 확인
  `for v in list { if target-v in dic return true }` o(n) / o(1)
