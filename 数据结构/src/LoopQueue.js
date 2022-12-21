class Queue {
    constructor(queue = []) {
        this.queue = queue;
    };
    enqueue(member) {
        this.queue.push({member});
    };
    dequeue() {
        return this.queue.unshift();
    };
    clear() {
        this.queue = [];
    };
    size() {
        return this.queue.length;
    };
    front() {
        return this.queue[0];
    };
    end() {
        return this.queue[this.size() - 1];
    };
    isEmpty() {
        return !this.size();
    }
}
export default class LoopQueue extends Queue  {
    constructor(items) {
        super(items);
    };
    getIndex(index) {
        if(this.isEmpty()) return -1;
        return index >= this.size() ? 0 : index;
    };
    find(index) {
        return !this.isEmpty() ? this.queue[this.getIndex(index)] : null;
    };
}