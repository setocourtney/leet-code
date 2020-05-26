var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

const searchArray = (array, value) => {
    for (let i = 0 ; i < array.length ; i++) {
        if ( array[i] === value) {
            return true;
        }
    }
    return false;
}


console.log(random_value + "" +  searchArray(stuff, random_value));

