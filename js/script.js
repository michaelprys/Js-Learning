'use strict';

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 * 4 === '8');
console.log(2 + 2 * 2 === 8); // будет false, т.к. у умножения приоритет выше чем у сложения.

const isChecked = false,
    isClosed = false;

console.log(isChecked && isClosed);
console.log(isChecked || !isClosed);
