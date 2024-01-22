class Queue {
    #items = {}
    #lowCount = 0;
    #count = 0;
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