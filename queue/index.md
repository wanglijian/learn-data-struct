# 队列的两种实现
## 数组实现
```
class Queue {
    #items = []
    enqueue(item) {
        // 进入队列
        this.#items.push(item)
    }
    dequeue() {
        // 出队列
        return this.#items.shift()
    }
    front() {
        // 对头元素
        return this.#items.at(0)
    }
    isEmpty() {
        return this.#items.length === 0
    }
    size() {
        return this.#items.length
    }
    toString(split = ' ') {
        this.#items.join(split)
    }
}
```
数组实现的缺点： 出队使用的是数组的shift方法，会导致数组所有元素集体向前移动，性能较差
## 对象实现
```
class Queue {
    #items = {}
    #lowCount = 0; // 队首下标
    #count = 0; // 队尾下标
    enqueue(item) {
        // 进入队列
        this.#items[this.#count] = item
        this.#count ++
    }
    dequeue() {
        // 出队列
        // if(this.#lowCount >= this.#count) return
        if(this.isEmpty()) return
        const frontItem = this.#items[this.#lowCount]
        delete this.#items[this.#lowCount]
        this.#lowCount ++
        return frontItem
    }
    front() {
        // 对头元素
        return this.#items[this.#lowCount]
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.#count - this.#lowCount
    }
    toString(split = ' ') {
        // this.#items.join(split)
        let str = ''
        for(let i = this.#lowCount; i < this.#count; i++) {
            str+= `${this.#items[i]} `
        }
        return str
    }
}
```
## 击鼓传花小游戏代码实现
```
function game(list, num) {
    const queue = new Queue()
    // 入队列
    list.forEach(item => {
        queue.enqueue(item)
    })

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        // console.log(queue.dequeue(), '淘汰了')
        queue.dequeue()
    }
    return queue.dequeue()
}
const res = game(['kervin', 'tuichui', 'gangdaner', 'xiaoming', 'guludunzi'], 7)
console.log(res, '赢了')
```
### 双端队列实现
```
class DeQueue {
    // 双端队列
    #items = {}
    #lowCount = 0;
    #count = 0;
    addBack(item) {
        // 队尾新增
        this.#items[this.#count] = item
        this.#count ++
    }
    addFront(item) {
        // 队首新增
        if(this.isEmpty()) {
            this.addBack(item)
        } else {
            if(this.#lowCount > 0) {
                this.#lowCount --
                this.#items[this.#lowCount] = item
            } else {
                for(let i = this.#count; i > 0; i --) {
                    this.#items[i] = this.#items[i-1]
                }
                this.#items[0] = item
                this.#count ++
            }
        }
    }
    removeFront() {
        // 队首出队列
        // if(this.#lowCount >= this.#count) return
        if(this.isEmpty()) return
        const frontItem = this.#items[this.#lowCount]
        delete this.#items[this.#lowCount]
        this.#lowCount ++
        return frontItem
    }
    removeBack() {
        if(this.isEmpty()) return
        const res = this.#items[this.#count - 1]
        delete this.#items[this.#count - 1]
        this.#count --
        return res
    }
    peakFront() {
        // 对首元素
        return this.#items[this.#lowCount]
    }
    peakBack() {
        // 队尾元素
        if(this.isEmpty()) return
        return this.#items(this.#count - 1)
    }
    isEmpty() {
        return this.size() === 0
    }
    size() {
        return this.#count - this.#lowCount
    }
    toString(split = ' ') {
        // this.#items.join(split)
        let str = ''
        for(let i = this.#lowCount; i < this.#count; i++) {
            str+= `${this.#items[i]} `
        }
        return str
    }
}
```
### 回文判断
```
const test = (str) => {
    let lowStr = str.toLocaleLowerCase().split(' ').join('')
    const dequeue = new DeQueue()
    for(let i = 0;i < lowStr.length; i++) {
        dequeue.addBack(lowStr[i])
    }
    let isEqual = true
    while(dequeue.size() > 1) {
        if(dequeue.removeBack() !== dequeue.removeFront()) {
            isEqual = false
            break
        }
    }
    return isEqual
}
```