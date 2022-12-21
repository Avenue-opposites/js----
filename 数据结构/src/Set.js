export default class Set {
    constructor(items = []) {
        this.items = {};
        if (items[Symbol.iterator]) {
            for (let v of items) {
                if (!this.items[`[${v}]`]) {
                    this.items[`[${v}]`] = v;
                };
            };
        } else {
            throw "参数必须实现可迭代协议";
        };
    };
    has(value) {
        for (let k in this.items) {
            if (value === this.items[k]) {
                return true;
            };
        };
        return false;
    };
    add(value) {
        if (this.has(value)) return false;
        this.items[`[${value}]`] = value;
        return true;
    };
    remove(value) {
        if (!this.has(value)) return false;
        return delete this.items[`[${value}]`];
    };
    get size() {
        let i = 0;
        for(let k in this.items) {
            i++;
        };
        return i;
    };
    get values() {
        const vals = [];
        for(let k in this.items) {
            vals.push(this.items[k]);
        }
        return vals;
    };
};