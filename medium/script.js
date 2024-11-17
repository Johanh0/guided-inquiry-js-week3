// Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.

function sharePizza(slides, people) {
  if (typeof slides !== "number" && typeof people !== "number") {
    console.error("You need to use a number");
  }

  const result = Math.trunc((slides / people) * 100) / 100;
  const resultFormatted = result.toFixed(2);

  return `Each person gets ${result} slices of pizza; from our ${slides} pizza`;
}

// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 2));
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(21, 20));
// Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
console.log(sharePizza(10, 3));
