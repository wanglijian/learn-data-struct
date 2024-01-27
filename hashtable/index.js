class HashTable {
    constructor() {
        this.table = {}
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
    // hashCode(key) {
    //     if(typeof key === 'number') {
    //         return key
    //     } else {
    //         let str = this.toStrFn(key)
    //         let hash = 0
    //         for(let i = 0; i < str.length; i++) {
    //             hash += str[i].charCodeAt()
    //         }
    //         return hash % 37
    //     }
    // }
    hashCode(key) {
        const tableKey = this.toStrFn(key)
        let hash = 5381
        for(let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i)
        }
        return hash/1013
    }
    set(key, value) {
        if(key === null || value === null) return false
        let position = this.hashCode(key)
        this.table[position] = new ValuePair(key, value)
        return true
    }
    get(key) {
        const hash = this.hashCode(key)
        const valuepair = this.table[hash]
        return valuepair ? valuepair.value : undefined
    }
    remove(key) {
        const hash = this.hashCode(key)
        if(this.table[hash]) {
            delete this.table[hash]
            return true
        }
        return false
    }
}
class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}