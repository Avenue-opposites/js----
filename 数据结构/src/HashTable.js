class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};
class LinkedList {
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
    end() {
        let current = this.head;
        while (current.next) {
            current = current.next;
        };
        return current;
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
class HashTable {
    constructor() {
        this.table = [];
    };
    static loseloseHashCode(key) {
        let hash = 0;
        for(let codePoint of key) {
            hash += codePoint.charCodeAt();
        };
       return hash % 37;
    };
    //增
    put(key,value) {
        const hash = HashTable.loseloseHashCode(key);
        if(!this.table[hash]) {
            this.table[hash] = value;
        }else {
            let i = 0;
            while (this.table[hash+i]) {
                i++;
            };
            this.table[hash+i] = value;
        }
    };
    //查
    get(key) {
        return this.table[HashTable.loseloseHashCode(key)];
    };
    //删
    remove(key) { 
        delete this.table[HashTable.loseloseHashCode(key)];
    };
};

export default class DivideHashTable extends HashTable {
    constructor() {
        super();
    };
    //添加
    put(key,value) {
        const hash = HashTable.loseloseHashCode(key);
        //判断当前表中的元素是否不是链表
        if(!(this.table[hash] instanceof LinkedList)) {
            //创建链表,将这个元素指向创建的链表
            this.table[hash] = new LinkedList();;
        };
        //向链表追加元素
        this.table[hash].append(value);
    };
    //查询
    get(key) {
        const hash = HashTable.loseloseHashCode(key);
        return this.table[hash].end();
    };
    //删
    remove(key) {
        const hash = HashTable.loseloseHashCode(key);
        const current = this.table[hash];
        current.removeAt(current.size() - 1);
    };
    
}