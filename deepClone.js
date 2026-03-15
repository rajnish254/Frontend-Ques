
function deepClone(obj) {
  // 1. Handle primitives and null (Edge case: typeof null is 'object')
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // 2. Handle Dates (Often asked as a follow-up edge case)
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // 3. Initialize the accumulator (Array or Object)
  const clone = Array.isArray(obj) ? [] : {};

  // 4. Iterate and recursively clone
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

}