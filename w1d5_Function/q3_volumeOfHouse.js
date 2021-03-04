/*
Write a program that calculates the total volume of a house, including the volume of the roof space. 
Your program must allow the user to enter width, depth, height and sweep as shown in figure below. 
Write code to call and test your function
    houseVolume = livingVolume + roofVolume
    livingVolume = width * height * depth
    roofVolume = triangleArea*depth
    triangleArea = √s(s−a)(s−b)(s−c)
    s = (a+b+c)/2

// */
'use script';
function houseVolume(width, height, depth, sweep) {
    let lv = livingVolume(width, height, depth);
    let rv = roofVolume(sweep, sweep, width);
    return lv + rv;
}

function triangleArea(sideA, sideB, sideC) {
    const s = (sideA + sideB + sideC) / 2;
    const product = s * (s - sideA) * (s - sideB) * (s - sideC);
    const result = Math.sqrt(product);
    return result;
}

function roofVolume(sweep, width, depth) {
    return triangleArea(sweep, sweep, width) * depth;
}

function livingVolume(width, height, depth) {
    return width * height * depth;
}



console.log(houseVolume(16, 10, 10, 10));











