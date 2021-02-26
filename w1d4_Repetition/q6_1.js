/*
1
22
333
4444
55555

Outer loop: i 1 to 5
Inner loop:
    print i i times: j goes from 1 to i and log i
    
*/

for (let i = 1; i <= 5; i++) {
    let row = ' ';
    for (let j = 0; j < i; j++) {
        row += i;
    }
    console.log(row);
}


