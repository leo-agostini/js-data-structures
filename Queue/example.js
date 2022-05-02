import { Queue } from "../Queue/index.js"

const hotPotato = (elements, num) => {
    const queue = new Queue();
    const eliminatedList = [];

    for (let i = 0; i < elements.length; i++) {
        queue.enqueue(elements[i]);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }

    return {
        winner: queue.dequeue(),
        elimated: eliminatedList,
    }
}

const elements = ['Leo', 'Ana', 'Jesus', 'Andre', 'Ruan'];

console.log(hotPotato(elements, 9))