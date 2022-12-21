// import Queue from "./Queue";


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

export default class PriorityQueue extends Queue {
    constructor(queue) {
        super(queue);
    };
    priorityQueue(member,priority) {
        const priorityMember = {member,priority}; 
        if(this.isEmpty()) {
            this.enqueue(member);
        }else {
            const preIndex = this.queue.findIndex(member => {
                return priorityMember.priority > (member.priority || 0);
            });
            preIndex > -1 ? this.queue.splice(preIndex,0,priorityMember) : this.enqueue(priorityMember);
        }

    }
};

