const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

// console.log(list.head.value);
// console.log(list.head.next.value);

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // 1. 초기화 : head, tail 생성 및 초기화
    let init = new Node("init"); // head
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  // 2. 데이터 수를 노출 시키는 함수
  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    this.tail.next = 새로운노드; // 기존 마지막(tail)에서 추가 되어 next로 연결됨
    this.tail = 새로운노드; // 전체 1개에서 tail은 새로운노드가 됨
    this.데이터수 += 1;
  }

  toString() {
    let 순회용현재노드 = this.head; // 검색 시작 점
    순회용현재노드 = 순회용현재노드.next; // init 필요 없음

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data}, `;

      순회용현재노드 = 순회용현재노드.next; // 검색 할 부분을 next 가르킴
    }
    console.log(s);
    return `[${s.slice(0, -2)}]`;
  }

  getFullData() {
    let 순회용현재노드 = this.head; // 검색 시작 점
    순회용현재노드 = 순회용현재노드.next; // init 필요 없음

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data}, `;

      순회용현재노드 = 순회용현재노드.next; // 검색 할 부분을 next 가르킴
    }

    return JSON.parse(`[${s.slice(0, -2)}]`);
  }

  // 새로운 노드를 생성하고, 해당 index 다음번째에 데이터를 넣고, next를 바꿔서 연결
  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    // 설정한 index 번째까지 이동
    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }

    let 새로운노드 = new Node(data);

    새로운노드.next = 순회용현재노드.next; // 이전 노드랑, 새로운 노드가 둘다 다음 노드를 가리킨 상태
    순회용현재노드.next = 새로운노드; // 이전 노드가 새로운 노드를 가르키게 된다.

    this.데이터수 += 1;
  }
}

let l = new LinkedList();
l.append(1);
l.append(2);
l.append(5);
l.append(7);
l.append(10);
l.append(30);
l.insert(3, 6);
l.length();

console.log(l);
console.log(l.length());
console.log(l.toString());
console.log(l.getFullData());
// [1,2,10] 형태로 나오게하기
