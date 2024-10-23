const arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];

let Max = 0;
let secondMax = 0;

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > Max) {
        secondMax = Max;
        Max = num;
    } else if (num > secondMax && num !== Max) {
        secondMax = num;
    }
}

console.log("The second Max number is:", secondMax);
