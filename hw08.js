/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    "use strict";
    if (a > b) {
        console.log(b + " is the smaller number");
    } else {
        console.log(b + " is the bigger number");
    }
}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
    "use strict";
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else if (a < b) {
        if (a < c) {
            console.log(c);
        } else {
            console.log(b);
        }
    }

}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";

    var vowels = "aeiou";
    var n = vowels.indexOf(char);

    if (n >= 0) {
        console.log("True");
    } else {
        console.log("False");
    }

}



// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    "use strict";
    var vowels = "aeiou ";
    return phrase.split("").map(function(letter) {
        return vowels.indexOf(letter) === -1 ? letter + "o" + letter : letter

    }).join("");
}



// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(Array) {
    "use strict";

    var total = 0;

    for (var i = 0; i < Array.length; ++i) {
        total += Array[i];
    }

    return total;
}


//   return a + b + c + d;

//   console.log(sum);


function multiply(Array) {
    "use strict";

    var total = 1;

    for (var i = 0; i < Array.length; ++i) {
        total *= Array[i];
    }

    return total;
}


//    return a * b * c * d;
//    console.log(multiply);


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str) {
    "use strict";

    var sentence = "";

    for (var i = str.length - 1; i >= 0; i--) {
        sentence += str[i];
    }
    return sentence;
}

//This one works just as well

//function reverse(str){
//    return str.split("").reverse().join("");
//}


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";

    words = words.split(" ");
    
    words.sort(function(a, b) {
        return a.length > b.length ? -1 : 1;
    })
    
    return words[0].length;
}


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";

var longWords = []
    words.map(function(word){
        if (word.length > i) {
            longWords.push(word)
        }
    })
    return longWords;

}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    
    var characters = {};

    for (var i=0; i<string.length; i++){

        characters[string[i]] = 
            (characters[string[i]] === undefined) ?
            1 : 
            characters[string[i]]+1;
    }
    return characters;    
}


// the object characters is empty

// we pass in a string called "hhllo"

// let's set this object characters equal to 

// Does the characters object have a property that is equal to the value of hello at index equal to 0 which is h?

// There is no property h in our characters object so let's define it and set it equal to a value of 1

// loop again with i equal to 1

// Does the characters object have a property that is equal to the value of hello at index equal to 1 which is h?

// Yes, this proprety is defined and has a value equal to 1, so set the value of the characters object whose property is the same
// as the value of the string at index=1 (which is also h) and let's increment it by 1. So now this property (which is h) is equal
// to 2.



//15 things I learned..
//Do not use ==, use ===
//== coerces code, while === does not perform type coercion
//the typeof/instanceof operator is JavaScript's biggest design flaw
//to check the type of an object, use Object.prototype.toString
//instanceof operator compares constructors of its two operands
//instanceof should also be avoided at most costs
//javascript is a weakly typed language so it will apply type coercion wherever possible
//using !! twice, a value can be converted to a boolean
//the use of Eval should also be avoided
//eval can produce security issues beaue it executes any code given to it
//two distinct values for nothing: null and undefined
//undefined is more useful than null
//javascript utilizes semicolons and automatically inserts them if missing in a lot of cases
//this is considered a huge flaw because it can change behavior of the code
//in the case of a leading parenthesis, the parser will not insert a semicolon
//
