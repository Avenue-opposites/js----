class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};
export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    };
    //添加元素
    append(element) {
        const node = new Node(element);
        let current = this.head;
        if (!current) {
            this.head = node;
            this.length = 1;
        } else {
            while (current.next) {
                current = current.next;
            };
            current.next = node;
            this.length++;
        };
    };
    //插入
    insert(postion, element) {
        const node = new Node(element);
        let i = 0;
        let current = this.head;
        let prev = null;
        if (!(postion >= 0 && postion <= this.length)) return false;
        if(postion === 0) {
            current ? this.append(node) : this.head = node; 
        }else {
            while (i < postion) {
                prev = current;
                current = current.next;
                i++;
            };
            prev.next = node;
            node.next = current;
        }
        this.length++;
        return true;
    };
    //根据下标移除
    removeAt(postion) {
        let i = 0;
        let current = this.head;
        let prev = null;
        if (postion < 0 || postion >= this.length) return null;
        if (postion === 0) {
            this.head = current.next;
        }else {
            while (i < postion) {
                prev = current;
                current = current.next;
                i++;
            };
            prev.next = current.next;
            current.next = null;
        }
        this.length--;
        return current;
    };
    //查找下标
    findIndex(element) {
        let i = 0;
        let current = this.head;
        while (i < this.length) {
            if(element === current.value) {
                return i;
            }
            current = current.next;
            i++;
        };
        return -1;
    };
    //根据元素移除
    remove(element) {
       return this.removeAt(this.findIndex(element));
    };
    isEmpty() {
        return !this.length;
    };
    size() {
        return this.length;
    };
    toString() {
        let string = "";
        let current = this.head;
        while (current) {
            string += current.value;
            current = current.next;  
        };
        return string;
    };
};