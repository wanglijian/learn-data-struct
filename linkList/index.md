# 单链表的封装
```
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.count = 0
        this.head = null
    }
    push(element) {
        const node = new Node(element)
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    removeAt(index) {
        if(index < 0 || index >= this.count) return
        let current = this.head
        if(index === 0) {
            this.head = this.head.next
        } else {
            let i = 0
            let previous = null
            
            while(i < index) {
                previous = current
                current = current.next
                i++
            }
            previous.next = current.next
        }
        this.count--
        return current.element
    }
    removeAt2(index) {
        if(index < 0 || index >= this.count) return
        let current = this.head
        if(index === 0) {
            this.head = this.head.next
        } else {
            let previous = this.getNodeAt(index - 1)
            current = previous.next
            previous.next = current.next
        }
        this.count--
        return current.element
    }
    getNodeAt(index) {
        // 获取index位置的元素
        // 边界判断
        if(index < 0 || index >= this.count) return
        let i = 0
        let current = this.head
        while(i < index) {
            current = current.next
            i++
        }
        return current
    }
    indexOf(element) {
        let current = this.head
        let index = 0
        while(current && current.element !== element) {
            current = current.next
            index++
        }
        if(current) {
            return index
        }else {
            return -1
        }
    }
    remove(element) {
        let index = this.indexOf(element)
        return this.removeAt2(index)
    }
}
```
### 使用链表实现回文检测功能
```
const test = (str) => {
    let lowStr = str.toLocaleLowerCase().split(' ').join('')
    const dequeue = new LinkedList()
    for(let i = 0;i < lowStr.length; i++) {
        dequeue.push(lowStr[i])
    }
    let isEqual = true
    while(dequeue.size() > 1) {
        if(dequeue.removeAt2(dequeue.size() - 1) !== dequeue.removeAt2(0)) {
            isEqual = false
            break
        }
    }
    return isEqual
}
```
### 使用单链表实现击鼓传花
```
function game(list, num) {
    const queue = new LinkedList()
    // 入队列
    list.forEach(item => {
        queue.push(item)
    })

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.push(queue.removeAt2(0))
        }
        // console.log(queue.dequeue(), '淘汰了')
        queue.removeAt2(0)
    }
    return queue.removeAt2(0)
}
```
### 使用单链表实现进制转换
```
const convert = (decNumber, base) => {
    const stack = new LinkedList()
    let str = ''
    while(decNumber > 0) {
        stack.push(decNumber % base)
        decNumber = Math.floor(decNumber/base)
    }
    while(!stack.isEmpty()) {
        str += stack.removeAt2(stack.size() - 1)
    }

    return str
}
```

# 双向链表的实现
```
class DoublyNode extends Node {
    constructor(element) {
        super(element)
        this.prev = null
    }
}
// 双向链表
class DoublyLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }
    push(element) {
        let node = new DoublyNode(element)
        if(this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.count++
    }
    insert(element, index) {
        if(index < 0 || index > this.count) return false
        let node = new DoublyNode(element)
        if(index === 0) {
            if(this.head === null) {
                this.head = node
                this.tail = node
            } else {
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
        } else if(index === this.count) {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        } else {
            let previous = this.getNodeAt(index - 1)
            let current = previous.next
            node.next = current
            current.prev = node
            previous.next = node
            node.prev = previous
        }
        this.count++
    }
    removeAt2(index) {
        if(index < 0 || index >= this.count) return
        let current = this.head
        if(index === 0) {
            this.head = current.next
            if(this.count === 1) {
                this.tail = null
            } else {
                current.next.prev = null
            }
        } else if(index === this.count - 1) {
            current = this.tail
            current.prev.next = null
            this.tail = current.prev
        } else {
            let previous = this.getNodeAt(index - 1)
            current = previous.next
            previous.next = current.next
            current.next.prev = previous
        }
        this.count--
        return current.element
    }
}
```
# 循环链表
```
class CirularLinkedList extends LinkedList {
    constructor() {
        super()
    }
    push(element) {
        let node = new Node(element)
        let current = this.head
        if(this.head === null) {
            this.head = node
        } else {
            current = this.getNodeAt(this.count - 1)
            current.next = node
        }
        node.next = this.head
        this.count++
    }
    insert(element, index) {
        if(index < 0 || index > this.count) return false
        let node = new Node(element)
        let current = this.head
        if(index === 0) {
            if(this.head === null) {
                this.head = node
                node.next = this.head
            } else {
                node.next = this.head
                // 此处步骤位置比较关键
                let lastNode = this.getNodeAt(this.size() - 1)
                this.head = node
                lastNode.next = this.head
            }
        } else {
            let previous = this.getNodeAt(index - 1)
            node.next = previous.next
            previous.next = node
        }
        this.count ++
        return true
    }
    removeAt(index){
        if(index < 0 || index >= this.count) return
        let current = this.head
        if(index === 0) {
            if(this.size() === 1) {
                this.head = null
            } else {
                let last = this.getNodeAt(this.size() - 1)
                this.head = this.head.next
                last.next = this.head
            }
        } else {
            let previous = this.getNodeAt(index - 1)
            current = previous.next
            previous.next = current.next
        }
        this.count --
        return current.element
    }
}
```