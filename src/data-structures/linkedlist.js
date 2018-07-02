function Node(value) {
  this.value = value;
  this.next = undefined;
}

function LinkedList() {
  var head = undefined;
  var length = 0;

  return {
    insert: function(item) {
      if (!item) return;

      var node = new Node(item);

      if (head) {
        node.next = head;
      }

      head = node;
      length++;
    },
    delete: function(value) {
      var curr = head;

      if (head.value.index === value) {
        head = head.next;
        return;
      }

      while (curr) {
        if (curr.next) {
          var next = curr.next;

          if (next.value.index === value) {
            curr.next = next.next;
            length--;
            break;
          }
        }

        curr = curr.next;
      }
    },
    search: function(value) {
      var curr = head;
      var found = undefined;

      while (curr) {
        if (curr.value.index === value) {
          found = curr;
          break;
        }

        curr = curr.next;
      }
      return found;
    },
    size: function() {
      return length;
    },
    print: function() {
      var result = [];

      var curr = head;
      while (curr) {
        result.push(curr.value);

        curr = curr.next;
      }

      return result;
    }
  };
}

export default LinkedList;
