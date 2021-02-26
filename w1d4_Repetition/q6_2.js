
/*
55555
4444
333
22
1
*/
let row = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 + 1 - i; j++) {
        row += i;
    }
    console.log(row);
}