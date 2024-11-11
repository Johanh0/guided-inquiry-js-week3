function sharePizza(slides, people) {
  if (typeof slides !== "number" && typeof people !== "number") {
    console.error("You need to use a number");
  }

  const result = Math.trunc((slides / people) * 100) / 100;
  const resultFormatted = result.toFixed(2);

  return `Each person gets ${result} slices of pizza; from our ${slides} pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
