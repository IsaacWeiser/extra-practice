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


//testing functions built into objects
let testObject = {
    fname: "yeets",
    lname: "mcDab",
    favFood: ["nuggies", "tendies", "the fried potato strips of france"],
    add_food: (food) => {testObject.favFood.push(food)},
    remove_food: () => testObject.favFood.pop(),
}

let testObj2 = {
    inLibrary: true,
    meal: "nugs",
    mood: "sad",
    bipolar: (feel) => testObj2.mood =feel
}

testObject.add_food("pringles");
console.log(testObject.favFood);

testObject.remove_food();
console.log(testObject.favFood);

console.log(testObj2);
testObj2.bipolar("Happy");
console.log(testObj2);



//adding event listener
/*document.addEventListener("click", (event)=> {
if (event.target.id === "stage") {
   event.target.style.color="red";
   
}
})

document.addEventListener("click", (event)=>{
    if (event.target.id === "stage"){
        console.log("yeeee");
        event.target.textContent="asdfghjk";
    }
})

document.addEventListener("click", (event)=> {
    if (event.target.id === "tit") {
        event.target.textContent = "THE";
    }
})*/
// adding some array methods
let array = [1,2,3,4,5];

let arg1 = array.map((item)=> `big ${item}`);
console.log(arg1);

console.log(array.find(item => item<2));

console.log(array.filter(item=> item>2));

console.log(array.join("____"));


// more array joining methods practice

let nxtBgThng_2021_sat= ["Girl in Red", "YungBlud", "Bastille", "Andrew McMahon", "Weezer"];

let aa = nxtBgThng_2021_sat.map(band => band+=" rocks!");
console.log(aa);

aa = nxtBgThng_2021_sat.map(band => band = "not weezer lmao");
console.log(aa);

aa =nxtBgThng_2021_sat.find(band => band.length === 8);
console.log(aa);

aa= nxtBgThng_2021_sat.find(band=> band.startsWith("W"));
console.log(aa);

aa=nxtBgThng_2021_sat.filter(band => band.startsWith("W")=== false &&  band.startsWith("And")=== false);
console.log(aa);

aa=nxtBgThng_2021_sat.filter(band => band.startsWith("W") || band.startsWith("And"));
console.log(aa);

aa =nxtBgThng_2021_sat.join(", ");
console.log(aa);

aa= nxtBgThng_2021_sat.join("--");
console.log(aa);

//ternary operators
let joe ="schmo";
joe === "pro" ? console.log("hell yea"): console.log("oof");

let boBurnham = "sad";
boBurnham === "happy" ? console.log("yay!"): console.log("oh no!");

//create db, use sets, gets, transient state
const db ={
    letters: 
    [
        {
            id: 1,
            lett: "a"
        },
        {
            id: 2,
            lett: "b"
        },
        {
            id:3,
            lett: "c"
        }

    ],
    numbers: 
    [
        {
            id: 1,
            num: 1
        },
        {
            id:2,
            num:2
        },
        {
            id:3,
            num:3
        }
    ],
    combos: []
}

const getLetters = () => {
    //get the data sets
    return db.letters.map(letter => ({...letter}));
}

const getNumbers = () => {
    return db.numbers.mao(number => ({...number}));
}

//transient state
let tempCombos = {};

//create functions that will load data into the transient state
const setLetter = (id) => {
  tempCombos.letterId = id; 
}
const setNumber = (id) => {
    tempCombos.numberId = id;
}

//create a function that will utilize the the id of the letters and numbers (to mimic the target.id feature)
// when the ids are grabbed they should be set into the transient state
// once stored within the transient state they (test to see if you can push more into the trans state) can be assigned into a new object
//then determine their order in the permanent object and assign it that ID
// once state has changed, create a custom event that alerts us to the state change
//clear the trans state
//  log out the trans and perm states

const simulatedClickEvent = (lettIdVal, numIdVal) => {
  setLetter(lettIdVal);
  setNumber(numIdVal);
}

const comboBuild = () => {
    //find index they should be
    let lastIndex = db.combos.length;
    let newComboId = lastIndex+1;

    tempCombos.id =newComboId;
    tempCombos.price= 420.69;

    //copy trans state into perm state and clear trans state
    db.combos.push(tempCombos);
    tempCombos = {};
    //document.dispatchEvent(new customEvent("stateChanged"))

}

//console.log("empty array length: " + db.combos.length); //0

simulatedClickEvent(2,3);
comboBuild();

console.log("trans state: " + JSON.stringify(tempCombos) + "\n" + " perm state: " + JSON.stringify(db.combos));