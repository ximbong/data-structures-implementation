function Stack() {
  let stack = {};
  let stackSize = 0;

  return {
    push: function(item) {
      stack[stackSize] = item;
      stackSize++;
    },
    pop: function() {
      if (this.isEmpty()) {
        return undefined;
      }

      stackSize--;

      const item = stack[stackSize];
      delete stack[stackSize];

      return item;
    },
    peek: function() {
      if (this.isEmpty()) {
        return undefined;
      }

      return stack[stackSize - 1];
    },
    stackEmpty: function() {
      while (!this.isEmpty()) {
        this.pop();
      }
    },
    isEmpty: function() {
      return stackSize === 0;
    },
    size: function() {
      return stackSize;
    },
    print: function() {
      const result = [];

      for (const key in stack) {
        result.unshift(stack[key]);
      }

      return result;
    }
  };
}

export default Stack;
