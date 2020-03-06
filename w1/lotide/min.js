var numbers = [2, 2, 4, 6, 10, 2, 1, 0]

const min = function(list){
    var i = 0;
    minimum = list[i];
    for (; i < list.length; i++){
        if (list[i] <= minimum) {
            minimum = list[i];
            }
    //console.log(minimum)
    }
    return minimum
}

console.log(min(numbers))
