# 큐

- 큐는 FIFO(선입선출) 원칙을 따르는 선형 자료구조
- First In First Out
- 큐는 ADT(추상 자료형)이다.
- 데이터 구조는 논리적인 특성을 정의하지만 직접적인 구현은 추상화 하는 것
- 구현할 때 큐 규칙을 따라야한다.

* 가장 먼저 들어간 데이터가 가장먼저 나온다.
* 아래가 뚫린 컵 or 버스

- 버스 줄 : 큐 자료구조 (queue)
- 줄서기 : 요소 추가 (enqueue)
- 버스 탈출 : 요소 제거 (dequeue) [들어온순서대로 나옴]

<- 제거 [10,20,30,40,50] <- 추가
enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

dequeue() // [20,30,40,50]
dequeue() // [30,40,50]
dequeue() // [40,50]
dequeue() // [50]
dequeue() // []
