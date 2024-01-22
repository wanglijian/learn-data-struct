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