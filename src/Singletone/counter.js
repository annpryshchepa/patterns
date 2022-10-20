let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
  result() {
    return count
  }
};

Object.freeze(counter);
export { counter };