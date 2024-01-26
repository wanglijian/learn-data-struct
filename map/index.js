class LijianMap {
    constructor() {
        this.items = {}
    }
    toStrFn(key) {
        if(key === null) {
            return 'NULL'
        }else if(key === undefined) {
            return 'UNDEFINED'
        } else if(typeof key === 'string' || key instanceof String) {
            return key
        }
        return JSON.stringify(key)
    }
    hasKey(key) {
        key = this.toStrFn(key)
        return this.items[key] !== null
    }
    set(key, value) {
       if(key === null || value === null) return false
       key = this.toStrFn(key)
       this.items[key] = new ValuePair(key, value)
       return true
    }
    get(key) {
        const valuepair = this.items[this.toStrFn(key)]
        return valuepair === undefined ? undefined : valuepair.value
    }
    remove(key) {
        if(this.hasKey(key)) {
            delete this.items(this.toStrFn(key))
            return true
        }
        return false
        
    }
    keys() {

    }
    values() {

    }
    keyValues() {

    }
    isEmpty() {

    }
    size() {

    }
    clear() {

    }
    forEach(cb) {
        const valuePair = this.keyValues()
        for(let i = 0; i < valuePair.length; i++) {
            cb(valuePair[i])
        }
    }
}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}