# 栈结构
栈结构通常包含 push(压栈), pop(出栈)，peak 获取栈顶元素，以及 isEmpty(是否为空)、size(栈大小)等方法
```
class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    peak() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    toString(split = '') {
        return this.items.join(split)
    }
}
```