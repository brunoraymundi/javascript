const assertEqual = function(actual, expected) {
    if (actual == expected){
        console.log('Pass')
    } else {
        console.log('Fail')
    }
    };

const eqArrays = function(actual, expected) {
    if (actual === Array && expected === Array){
        console.log('sim')
    }
        
    if (actual === expected){
        console.log('Pass')
    } else {
        console.log('Fail')
    }
    };




a = [1,2]
b = [1,2]

eqArrays(a, b)
eqArrays([1,2,'3'], [1,2,3])
eqArrays([1, 2, 3], [3, 2, 1])