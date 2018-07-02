class Queue {
  constructor() {
    let storage = {},
      head = 0,
      tail = 0;

    return {
      enQueue(item) {
        storage[tail] = item;
        tail++;
      },
      deQueue() {
        const size = tail - head;

        if (size <= 0) return undefined;

        let item = storage[head];

        delete storage[head];

        head++;

        //Reset the counter
        if (head === tail) {
          head = 0;
          tail = 0;
        }

        return item;
      },
      queueEmpty() {
        while (tail - head > 0) {
          //queue is not empty
          this.deQueue();
        }
      },
      size() {
        return tail - head;
      },
      peek() {
        return storage[tail - 1];
      },
      print() {
        const result = [];

        for (const key in storage) {
          result.push(storage[key]);
        }

        return result;
      }
    };
  }
}

export default Queue;
