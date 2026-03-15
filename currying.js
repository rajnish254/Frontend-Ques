function currying(a) {
  // 1. Return a new inner function that captures 'a' via closure
  return function(b) {
    // 2. Base case: If no argument is passed, return the accumulated total
    if (b === undefined) {
      return a;
    }
    // 3. Recursive step: Call 'add' again with the new sum
    return add(a + b);
  };
}

// Usage:
console.log(add(1)(2)(3)(4)()); // Output: 10