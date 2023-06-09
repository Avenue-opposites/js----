export class TreeNode {
    constructor(value,left,right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export class Tree {
    constructor(root) {
        this.root = root ?? new TreeNode(null,null,null);
    }
    insert(value) {
        if(this.root && !this.root.value && !this.root.left && !this.root.right) {
            this.root.value = value;
        }else {
            let { root } = this;
            let pre = null;
            let current = root;
            let newTreeNode = new TreeNode(value,null,null);
           while(current) {
                pre = current;
                if(value > current.value) {
                    current = current.right;
                }else if(value < current.value) {
                    current = current.left;
                }else {
                    break;
                }
           }
           if(value > pre.value) {
             pre.right = newTreeNode;
           }else if(value < pre.value) {
             pre.left = newTreeNode;
           }
        }
    }
    find(value) {
        let current = this.root;
        while(current) {
            if(value > current.value) {
                current = current.right;
            }else if(value < current.value) {
                current = current.left;
            }else {
                return current;
            }
        }
        return null;
    }
    getDistanceAtTreeNode(distance) {
        const treeNodeArray = [];
        const dp = (distance,node) => {
            if(node === null) return;
            if(distance === 0) {
                treeNodeArray.push(node);
            }
            distance--;
            dp(distance,node.left);
            dp(distance,node.right);
        } 
        dp(distance,this.root);
        return treeNodeArray;
    }
    equals(tree) {
        return Tree.equals(this.root,tree.root);
    }
    static equals(root1,root2) {
        //当第一个节点和第二个节点都为null时
        if(root1 === null && root2 === null) {
            return true;
        //当两个都不为null时
        }else if(root1 !== null && root2 !== null) {
            //对比两个值是否相等,并递归对比两颗子树
            return root1.value === root2.value 
            && Tree.equals(root1.left,root2.left) 
            && Tree.equals(root1.right,root2.right);
        }else {
            //当两个节点分别为节点和null时
            return false;
        }
    }
    //前序遍历
    static traversePreOrder(root,callback = root => console.log(root)) {
        //当节点存在时
        if(root) {
            callback(root);
            //递归左子树
            Tree.traversePreOrder(root.left,callback);
            //递归右子树
            Tree.traversePreOrder(root.right,callback);
        }
    }
    traverseLevelOrder(callback = root => console.log(root)) {
        for(let i = 0;i <= Tree.calculateHeight(this.root);i++) {
            const list = this.getDistanceAtTreeNode(i);
            for(let j = 0;j < list.length;j++) {
                callback(list[j]);
            }
        }
    }
    static calculateHeight(root) {
        //当前节点为空时
        if(!root) return -1;
        const { left,right } = root;
        //当前节点的左树和右树为空时
        if(left === null && right === null) return 0;
        //通过递归获取左子树和右子树的最大的高度,并且每个层级加1高度
        return 1 + Math.max(Tree.calculateHeight(left),Tree.calculateHeight(right));
    }   
    static min(root) {
        if(root === null) throw Error("root is not null.");
        /* 找到最深的左树 */
        let current = root;
        while (current.left) {
            current = current.left;
        }
        return current.value;

        /* 全部遍历查找最小的 */
        // if(!root) throw Error("root不能为null");
        // if(root.left === null && root.right === null) return root.value;
        // const left = root.left !== null ? Tree.min(root.left) : root.value;
        // const right = root.right !== null ? Tree.min(root.right) : root.value;
        // console.log(left,right);
        // const minimum = Math.min(left,right); 
        // return Math.min(minimum,root.value);
    }
}

export class AVLTree extends Tree {
    constructor(root) {
        super(root);
    }
    insert(value) {
        if(this.root.value === null) {
            this.root.value = value;
        }else {
            this._insert(this.root,value);
        }
    }
    _insert(node,value) {      
        if(node === null) {
            return new TreeNode(value,null,null);
        }else if(value > node.value){
            node.right = this._insert(node.right,value);
        }else if(value < node.value) {
            node.left = this._insert(node.left,value);
        }
        AVLTree.setBalance(node);
        return node;
    }
    static isBalance(root) {
        const difference = this.calculateHeight(root.left) - this.calculateHeight(root.right);
        return difference === 0 || difference === -1 ||difference === 1;
    }
    //左旋转
    static leftRotation(root) {
        const leftChild = root.left;
        const outNode = leftChild.right;
        leftChild.right = root;
        root.left = outNode;
        return leftChild;
    }
    //右旋转
    static rightRotation(root) {
        const rightChild = root.right;
        const outNode = rightChild.left;
        rightChild.left = root;
        root.right = outNode;
        return rightChild;
    }
    static leftToRightRotation(root) {
        root.left = AVLTree.rightRotation(root.left);
        return AVLTree.leftRotation(root);
    }
    static rightToLeftRotation(root) {
        root.right = AVLTree.leftRotation(root.right);
        return AVLTree.rightRotation(root);
    }
    static setBalance(root) {
        const factor = root === null ? 0 : this.calculateHeight(root.left) - this.calculateHeight(root.right);
        console.log(root);
        if(factor > 1) {
            console.log("左重");
            // AVLTree.leftRotation(root);
           
        }else if(factor < -1){
            console.log("右重");
            
            // console.log(root);
        }
    }
}





