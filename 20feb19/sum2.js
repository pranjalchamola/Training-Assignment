function sum(a,b) {
  if (arguments.length === 1) {
    return function(b2) {
      return a + b2;
    };
  }
  return a + b;
}
console.log(sum(2, 3));
console.log(sum(2)(3));