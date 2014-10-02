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

function max(a,b){
    "use strict";
    if(a > b){
        console.log(b + " is the smaller number");
    }
    else{
        console.log(b + " is the bigger number");
    }
}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if(a > b){
        if(a > c){
            console.log(a);
        } else{
            console.log(c);
        }    
    } else if(a < b){
        if(a < c){
            console.log(c);
        } else{
            console.log(b);
        }
    }

}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    
var vowels = ["a", "e", "i", "o", "u"];
    if (var n = vowels.indexOf(char)){    
    console.log("True");
    } else{
    console.log("False");
    }

}

//    var vowels = ["a", "e", "i", "o", "u"];
//
//   if(char.contains(vowels)){
//        console.log("True");
//    } else{
//        console.log("False");
//    }

 //   if(char "a"){
 //       }else if(char === "e"){
 //           }else if(char === "i"){
 //               console.log("true");        
 //           }
 //       else{
 //           console.log("false");
 //       }    


// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a,b,c,d){
    "use strict";
 
var total = 0;

    for (var i = 0, n = sum.length; i < n; ++i)
    {
    total += sum[i];
    }
}

 //   return a + b + c + d;

 //   console.log(sum);


function multiply(a,b,c,d){
    "use strict";
    return a * b * c * d;
}
    console.log(multiply);
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    var i = str.length;
    i=i-1;
    var reversewords="";
    for (var x = i; x >= 0; x--)
    {
        reversewords +=(str.charAt(x));   
    }
}

reverse("string")

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}


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



