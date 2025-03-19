https://www.youtube.com/watch?v=HraOg7W3VAM

# 해시테이블 개념

- 해시테이블은 array구조를 가진다.
- 다시 볼것

# 개념

- 검색하고자 하는 키값을 입력하여 해시함수를 활용하여[1], 반환받은 해시코드를[2], 배열의 index로 환산해서[3], 데이터 접근[4]
- F(key) -> HashCode -> Index -> Value
  > [1] : F(key) - F: 해시함수, key: 검색 값
  > [2] : HasCode - 반환받은 해시코드 (동일한 형태의 값 : 이게 해시)
  > [3] : Index - 해시코드로 배열의 index 환산
  > [4] : Value - 환산한 Index를 가지고 값을 접근
