const assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log('Pass')
    } else{
        console.log('Fail')
    }
    };

const head = function(item) {
    let first = item[0];
    return first
};

let y = [5, 6, 7]
let names = ['Bruno', 'Katerina', 'Lucas']
console.log(head(y))
console.log(head(names))

assertEqual(head(y), 5);
assertEqual(head(['Bruno', 'Katerina', 'Lucas']), 'Bruno');
assertEqual(head([7,9,10]), 7);
assertEqual(head(names),'Bruno');
