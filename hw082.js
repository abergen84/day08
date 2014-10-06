// Problem 1

function max(a, b) {
    "use strict";
 return a > b ? a : b;

 //   if (a > b) {
 //       return a
 //   } else return b;
}

// Problem 2

function maxThree(a, b, c) {
    "use strict";
    if (a > b) {
        if (a > c) {
            return a;
        } 
    } else if (a < b) {
            if (b < c) {
                return c;
            } else {
                return b;
            }
    }
}

// Problem 3

function isVowel(char){
	"use strict";

var vowels = "aeiou";
var n = vowels.indexOf(char);

	if (n >= 0){
	
	return "True";
	
	} else{
	
	return "False";
	}
}

// Problem 4

// Problem 5

function sum(Array){

var total = 0;

	for (var i = 0; i < Array.length; ++i){
	total += Array[i];
	}
	
	return total;

}

// Problem 6

function multiply(Array){

var total = 1;

for (var i = 0; i < Array.length; ++i){
	total *= Array[i];
}
	
	return total;

}

// Problem 7

function Reversal(str){

	Array = "";

	for (var i = str.length -1; i >=0; i--){

		Array += str[i];
	}

return Array;

}

// Problem  8


function findLongestWord(words) {
    "use strict";

    words.sort(function(a, b) {
    	if (a.length > b.length){
    		return 1;
    	} else {
    		return -1;
    	}
//        return a.length > b.length ? 1 : -1;
    })

    return words[0].length;
}










