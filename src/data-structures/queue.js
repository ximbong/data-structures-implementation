function Queue() {
  var storage = {},
    head = 0,
    tail = 0;

  return {
    enQueue: function(item) {
      storage[tail] = item;
      tail++;
    },
    deQueue: function() {
      var size = tail - head;

      if (size <= 0) return undefined;

      var item = storage[head];

      delete storage[head];

      head++;

      //Reset the counter
      if (head === tail) {
        head = 0;
        tail = 0;
      }

      return item;
    },
    queueEmpty: function() {
      while (tail - head > 0) {
        //queue is not empty
        this.deQueue();
      }
    },
    size: function() {
      return tail - head;
    },
    peek: function() {
      return storage[tail - 1];
    },
    print: function() {
      var result = [];

      for (var key in storage) {
        result.push(storage[key]);
      }

      return result;
    }
  };
}

export default Queue;
