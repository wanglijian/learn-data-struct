class Stack {
    #items = []
    push(item) {
        this.#items.push(item)
    }
    pop() {
        return this.#items.pop()
    }
    peak() {
        return this.#items.at(-1)
    }

    isEmpty() {
        return this.#items.length === 0
    }
    size() {
        return this.#items.length
    }
    toString(split = '') {
        return this.#items.join(split)
    }
}