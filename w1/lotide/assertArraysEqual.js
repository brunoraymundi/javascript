const assertArrayEqual = function(actual, expected) {
    var i = actual.length;
    if (i != expected.length) {
    console.log('Fail')
    return false;
    } 
    while (i--) {
        if (actual[i] !== expected[i]) {
        console.log('Fail')
        return false;
        } 
        
    }
    console.log('Pass')
    return true 
    }

    a = [1]
    b = [1]
    assertArrayEqual(a, b) //pass
    assertArrayEqual([1,2,'3'], [1,2,3]) //fail
    assertArrayEqual([1, 2, 3, 4], [3, 2, 1]) //fail
    assertArrayEqual([1, 2, 3], [1, 2, 3]) //pass
    assertArrayEqual([1, 2, 3, 'a'], [1, 2, 3, 'a']) //pass