// 1. How many times loop will be executed in following scenarios?
for (let i = 0; i > 10; i++) {
    console.log(i);
}
// 0 loop, no output

for (let i = 0; i <= 10; i--) {
    console.log(i);
}
//infinite loop

let i = 1;
while (i < 10) {
    console.log(i);
}
// nfinite loop

let i = 1;
while (i < 10) {
    console.log(i);
    i--;
}
//infinite loop

// 2. What will be the output of running following code?
for (let i = 1; i < 10; i++) {
    if (i % 3 === 0) break;
    console.log(i);
}
// 1 2

for (let i = 1; i < 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}
// 1 2 4 5 7 8