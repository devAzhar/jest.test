(() => {
  const addTwoNumbers = (first = 0, second = 0) =>
    (isNaN(first) ? 0 : first) + (isNaN(second) ? 0 : second);

  const sum = (...input: any[]) => {
    return input.reduce(
      (first, second) => addTwoNumbers(Number(first), Number(second)),
      0
    );
  };

  module.exports = sum;
})();
