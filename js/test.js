var myDeclaration = "Feel good, Feel Nice, Feel alive and fuck That";
var myFrustratedDeclaration =
    myDeclaration.replace("That", "ME");


$(document).ready(function() {
    $( "p" ).append(myFrustratedDeclaration);
});





// QUIZZ  array manipulation

var sampleArray = [0,0,7];

function incrementLastArrayElement(_array)  {
    var newArray = [];
    //copy of the original array sampleArray
    newArray = _array.slice(0);
    // extract the last value of the copy of the array
    var lastNumber = newArray.pop();
    // add 1 to the the last value of the array
    newArray.push(lastNumber + 1);
    // execute the operation
    return newArray;
}

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
// will show in the console [0, 0, 8]



// QUIZZ  string manipulation

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    // we create a generic variable which will be transfrom the way we want. We will return the new generic variable at the end of this function. The var finalName reflect what will happen to the var name
    var finalName = oldName;
    // we create an array of the string "AlbERt EINstEiN" so that every word separated by a space " " will constitute an element.
    // the array called names has 2 elements "AlbERt" and "EINstEiN"  var names = [ "AlbERt", "EINstEiN"];
    var names = oldName.split(" ");
    // we select the second element (index 1 = EINstEiN) del array names and make it all caps
    names[1] = names[1].toUpperCase();
    // we select the first element (index 0 = AlbERt) del array names and make the first caracter of it a cap, the rest of it lowercases
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    // array.join([chars]) allows us to put array elements together into a single string. here we decide to seperate them the the chars " " (space)
    finalName = names.join(" ");
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
// will show in the console Albert Einstein

