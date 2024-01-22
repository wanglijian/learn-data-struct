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