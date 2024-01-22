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