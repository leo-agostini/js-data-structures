import { DoubledEndedQueue } from "./index.js";

const palindromeChecker = string => {
    if (!string) return null;

    const deck = new DoubledEndedQueue();
    const lowerString = string.toLocaleLowerCase().split(' ').join('');

    let firstChar, lastChar;
    let isEqual = true;

    for (let i = 0; i < lowerString.length; i++) {
        deck.addBack(lowerString.charAt(i));
    }

    while (deck.size() > 1 && isEqual) {
        firstChar = deck.removeFront();
        lastChar = deck.removeBack();

        console.log(firstChar, lastChar)
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;

};

