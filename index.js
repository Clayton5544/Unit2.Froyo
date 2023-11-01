//create object to keep track of orders and quantities.

const icecreamFlavors = {
    vanilla: 3,
    coffee: 2,
    strawberry: 1
}

//create prompt to enter flavors.
let answer = prompt(`Please enter icecream flavors`)
console.log(answer)

if(answer === `vanilla,vanilla,vanilla,strawberry,coffee,coffee`) {
    console.log(icecreamFlavors)
} else {
    console.log(`Not today.`)
}

// create an array of strings that is the same as user input.
const froyoFlavors = [`vanilla 3`, `coffee 2` , `strawberry 1`]

//create forloop to loop through flavors and quantity per flavor.
for(i = 0; i < froyoFlavors.length; i++) {
    //console.log(froyoFlavors[i])
}

answer = froyoFlavors
//console.log(answer)

//create funtion for counting the frequency of elements in array that returns object.
const allFlavors = () => {
    console.log(icecreamFlavors);
    return;
}
allFlavors()

