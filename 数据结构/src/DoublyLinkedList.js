class Node {
    constructor(value) {
        this.prev = null;
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
        if (!(postion >= 0 && postion <= this.length)) return false;
        const node = new Node(element);
        let i = 0;
        let current = this.head;
        let prev = null;
        while (i < postion) {
            prev = current;
            current = current.next;
            i++;
        };
        prev.next = node;
        node.next = current;
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
        } else {
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
            if (element === current.value) {
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
export default class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    };
    //追加元素
    append(element) {
        //创建节点
        const node = new Node(element);
        //保存当前head节点
        let current = this.head;
        //如果当前head节点为空
        if (!current) {
            //设置头部节点为新添加的节点
            this.head = node;
            //设置长度为1
            this.length = 1;
        } else {
            //判断当前节点的下一个节点是否存在
            while (current.next) {
                //更新当前节点为下一个节点
                current = current.next;
            };
            //当前为最后一个节点,将该节点的下一个节点设置为新添加的节点
            current.next = node;
            //设置新添加的节点的上一个节点为当前最后的节点
            node.prev = current;
            //更新长度
            this.length++;
        };
        //设置当前尾部为新添加的节点
        this.tail = node;
    };
    //插入元素
    insert(postion, element) {
        //创建节点
        const node = new Node(element);
        //保存当前head节点
        let current = this.head;
        //超出边界就返回
        if (postion < 0 || postion > this.length) return false;
        //处理首位插入
        if (postion === 0) {
            //判断当前的节点是否存在
            if (!current) {
                //添加节点
                this.append(element);
            } else {
                //修改插入节点的下一个节点为当前节点
                node.next = current;
                //修改当前节点的上一个节点为插入节点
                current.prev = node;
                //更新头部节点为插入节点
                this.head = node;
                //更新长度
                this.length++;
            }
            //处理末位插入
        } else if (postion === this.length) {
            this.append(element);
        //判断当前插入的位置离头部近还是离尾部近
        } else if (postion <= Math.round(this.length / 2)) {
            //创建索引
            let i = 0;
            //如果索引小于插入位置就循环
            while (i < postion) {
                //更新当前节点
                current = current.next;
                //索引自增
                i++;
            };
            //设置插入节点的上一个节点为当前节点的上一个节点
            node.prev = current.prev;
            //设置当前节点的下一个节点为当前节点
            node.next = current;
            //当前节点的上一个节点的下一个节点为插入节点
            current.prev.next = node;
            //设置当前节点的上一个节点为插入节点
            current.prev = node;
            //更新长度
            this.length++;
        } else {
            //修改当前节点为尾部节点
            current = this.tail;
            //创建索引
            let i = this.length;
            //如果索引小于插入位置就循环
            while (i > postion) {
                //更新当前节点
                current = current.prev;
                //索引自增
                i--;
            };
            //设置插入节点的上一个节点为当前节点
            node.prev = current;
            //设置插入节点的下一个节点为当前节点的下一个节点
            node.next = current.next;
            //设置当前节点的下一个节点的上一个为插入节点
            current.next.prev = node; 
            //设置当前节点的下一个节点为当前节点
            current.next = node;
            //更新长度
            this.length++;
        };
        return true;
    };
    //删除元素
    removeAt(postion) {
        //保存当前的head节点
        let current = this.head;
        //如果位置超出边界就返回
        if(postion < 0 || postion >= this.length) return null;
        //首位处理
        if(postion === 0) {
            this.head = current.next;
            current.next.prev = null;
            current.next = null;
        //末尾处理
        }else if(postion === this.length - 1) {
            current = this.tail;
            this.tail = current.prev;
            current.prev.next = null;
            current.prev = null;
        //判断删除元素的位置离头部函数尾部更近,从更近的开始寻找
        }else if(postion <= Math.round(this.length / 2)) {
            let i = 0;
            while (i < postion) {
                current = current.next;
                i++;
            };
                current.prev.next = current.next;
                current.next.prev = current.prev;
                current.prev = null;
                current.next = null;
        }else {
            let i = this.length;
            current = this.tail;
            while (i > postion) {
                current = current.prev;
                i--;
            };
            current.prev.next = current.next;
            current.next.prev = current.prev;
            current.prev = null;
            current.next = null;
        };
        //更新长度
        this.length--;
        //返回为删除的元素
        return current;
    };
    //从尾部查找元素下标
    EndFindIndex(element) {
        let i = this.length - 1;
        let current = this.tail;
        while (i >= 0) {
            if(element === current.value) {
                return i;
            }
            current = current.prev;
            i--;
        };
        return -1;
    };
};