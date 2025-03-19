class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return;
    }
    return this.items.shift(); // 첫번째 요소 제거
    // Shift : 배열의 첫번째 요소를 제거하고, 뒤에 있는 요소들을 앞으로 한칸씩 당긴다.
    // 선형 시간 복잡도 : O(n)
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  peek() {
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return;
    }
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue); // [1,2,3]

queue.dequeue();
queue.dequeue();
console.log(queue); // [3]

queue.dequeue();
console.log(queue); // []
