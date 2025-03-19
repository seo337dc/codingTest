class Stack {
  // 초기화
  constructor() {
    // throw "not implement";
    this.items = [];
  }

  push(item) {
    // throw "not implement";
    this.items.push(item);
  }

  pop() {
    // throw "not implement";
    this.items.pop();
  }

  peek() {
    // throw "not implement";
    // return this.items[this.items.length - 1];
    return this.items.at(-1);
  }
}

// [1,2,3,4,5,6]

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
console.log(s.peek());

s.pop();
s.pop();
console.log(s);
// [1,2,3,4]
