import { Node } from "../Node/index.js";
import { defaultEquals } from '../utils/index.js';


export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next
            } else {
                const previus = this.getElementAt(index - 1);
                current = previus.next;
                previus.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previus = this.getElementAt(index - 1);
                const current = previus.next;
                node.next = current;
                previus.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            if (this.equalsFn(element, current.element)) return i;
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size === 0;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head == null) return '';
        let objString = `${this.head.element}`;
        let current = this.head.next;

        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`
            current = current.next;
        }
        return objString;
    }
}

const list = new LinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(5)

console.log(list.toString());