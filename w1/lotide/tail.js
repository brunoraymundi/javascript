const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log('Pass')
    } else {
        console.log('Fail')
    }
    };

/*
const tail = function(item) {
    item.shift()
    var tail = item
    return tail
}
*/

let numbers = [3, 2, 8, 9, 4]
let numbers2 = [1, 2, 3, 4, 5, 6]

const tail = function(list) {
    let i;
    let newlist = []
    for (i = 1; i < list.length; i++) {
        newlist.push(list[i])
        
    };
    return newlist
}


console.log(numbers)
//console.log(numbers2)
console.log(tail(numbers))
//console.log(tail(numbers2))
assertEqual(tail(numbers),[ 2, 8, 9, 4 ])


y = [1]
x = [1]
assertEqual(x, y)
