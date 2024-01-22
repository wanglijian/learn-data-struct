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