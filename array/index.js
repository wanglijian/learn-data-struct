// 数组的from方法
function test() {
    console.log(arguments)
    console.log(Object.entries(arguments))
    console.log(Object.keys(arguments))
    console.log(Object.values(arguments))
}

test(1, 2, 3, 4)