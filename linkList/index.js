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
    insert(index, element) {
        if(index < 0 || index > this.count) return false
        const node = new Node(element)
        if(index === 0) {
            let head = this.head
            node.next = head
            this.head = node
        } else {
            let previous = this.getNodeAt(index - 1)
            let current = previous.next
            previous.next = node
            node.next = current
        }
        this.count ++
        return true
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.count
    }
}

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