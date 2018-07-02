class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    let head = undefined;
    let length = 0;
    return {
      insert(item) {
        if (!item) return;

        let node = new Node(item);

        if (head) {
          node.next = head;
        }

        head = node;
        length++;
      },
      delete(value) {
        let curr = head;

        if (head.value.index === value) {
          head = head.next;
          return;
        }

        while (curr) {
          if (curr.next) {
            let next = curr.next;

            if (next.value.index === value) {
              curr.next = next.next;
              length--;
              break;
            }
          }

          curr = curr.next;
        }
      },
      search(value) {
        let curr = head;
        let found = undefined;

        while (curr) {
          if (curr.value.index === value) {
            found = curr;
            break;
          }

          curr = curr.next;
        }
        return found;
      },
      size() {
        return length;
      },
      print() {
        const result = [];

        let curr = head;
        while (curr) {
          result.push(curr.value);
          curr = curr.next;
        }

        return result;
      }
    };
  }
}

export default LinkedList;
