//array and object
const arr = [1,2,3]
const washington = {
    order: 1,
    teeth: "wooden",
    toldLies: false,
    favoriteNumber: 13
}

//array of objects
const convoluted = [{id:1, letter:"a"}, {id:2, letter:"b"}, {id:3, letter:"c"}]

for (const item of convoluted) 
{
    if (item.id > 1)
    {
        console.log ("this letter is " + item.letter)
    }
}

//change an object property using bracket notation
washington["teeth"]="fake"
console.log(`Washington's teeth were ${washington["teeth"]}`)

//log out a specific item property from a specific index
console.log(`the first letter of the alphabet is ${convoluted[0].letter}`)

//use a query selector to put a in html

/*eslint-env browser*/
//document.querySelector("#stage").innerHTML =convoluted[0].letter

//another one (for of loop) - DJ Khaled
for (const lett of convoluted)
{
    if (lett.letter==="c")
    {
        console.log(`${lett.letter} comes after ${convoluted[(convoluted.indexOf(lett))-1].letter}`)
    }
}

// create a function that adds an item to convoluted
function addLett (lett) {
//determine the last id of the existing array
    const lastIndex = arr.length -1;
    let nextId = lastIndex + 2;

    //now add parameter to the array and assign it the new id
    convoluted.push({
        id: nextId,
        letter: lett
})

//print out new array
console.log("here is the array with the new object: ");
console.log(convoluted);

}

addLett("D");