num = 4936

console.log(`Thousands place is ${String(num).slice(0,1) % 10}`);
console.log(`Hundreds place is ${String(num).slice(1,2) % 10}`);
console.log(`Tens place is ${String(num).slice(2,3) % 10}`);
console.log(`Ones place is ${String(num).slice(3,4) % 10}`);