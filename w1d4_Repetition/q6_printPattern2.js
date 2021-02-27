/*
1
12
123
1234
12345

Outer loop: i 1 to 5
Inner loop:
     print i i times: j goes from 1 to i and log j

*/

for (let i = 1; i <= 5; i++) {
    let row = ' ';
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}