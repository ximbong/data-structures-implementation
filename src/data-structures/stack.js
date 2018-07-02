class Stack {
  constructor() {
    let stack = {};
    let stackSize = 0;

    return {
      push(item) {
        stack[stackSize] = item;
        stackSize++;
      },
      pop() {
        if (this.isEmpty()) {
          return undefined;
        }

        stackSize--;

        const item = stack[stackSize];
        delete stack[stackSize];

        return item;
      },
      peek() {
        if (this.isEmpty()) {
          return undefined;
        }

        return stack[stackSize - 1];
      },
      stackEmpty() {
        while (!this.isEmpty()) {
          this.pop();
        }
      },
      isEmpty() {
        return stackSize === 0;
      },
      size() {
        return stackSize;
      },
      print() {
        const result = [];

        for (const key in stack) {
          result.unshift(stack[key]);
        }

        return result;
      }
    };
  }
}

export default Stack;
