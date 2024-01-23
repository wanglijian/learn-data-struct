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