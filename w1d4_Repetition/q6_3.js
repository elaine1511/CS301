/*
55555
4444
333
22
1

Outer loop: loop from number to 1 with decrement of the index i from 5 to 1
Inner loop:
   print i i times: j goes from 1 to i and log i 
*/
for (let i = 5; i > 0; i--) {
    let row = ' ';
    for (let j = 0; j < i; j++) {
        row += i;
    }
    console.log(row);
}