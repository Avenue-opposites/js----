export default class Stack {
    constructor(stack = []) {
        if(!(stack instanceof Array)) throw "stack must is Array";
        this.items = stack; 
    };
    push(item) {
        return this.items.push(item);
    };
    pop() {
        return this.items.length ? this.items.pop() : null;
    };
    size() {
        return this.items.length;
    };
    getStackBottom() {
        return this.items[0];
    };
    peek() {
        return this.items[this.size() - 1];
    };
    clear() {
        this.items = [];
    };
    isEmpty() {
        return !this.size();
    }
};