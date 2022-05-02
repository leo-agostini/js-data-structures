import { Stack } from "../Stack/index.js";


const decimalToBinary = (decNumber) => {
    const remStack = new Stack();

    let rem;
    let number = decNumber;
    let binaryString = '';

    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


const a = decimalToBinary(10);
const b = decimalToBinary(12);

console.log(a, b);