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