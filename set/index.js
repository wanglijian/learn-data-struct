class LijianSet {
    items = {}
    add(element) {
        if(!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    delete(element) {
        if(this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }
    has(element) {
        return element in this.items
    }
    clear() {
        this.items = {}
    }
    size() {
        return Object.keys(this.items).length
    }
    values() {
        return Object.values(this.items)
    }
}