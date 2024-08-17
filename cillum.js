// Define the 'forward' object
let forward = {};

// Add the 'invert' method to 'forward'
forward.invert = function(x, y) {
    // Example logic: swap x and y
    return { invertedX: y, invertedY: x };
};

// Usage example
let result = forward.invert(3, 5);
console.log(result); // Output: { invertedX: 5, invertedY: 3 }
