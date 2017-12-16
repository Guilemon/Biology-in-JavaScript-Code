//JS Implementation of the Hardey-Weinberg Principle

//Allele Frequencies
var a1a1 = 0.5;
var a2a2 = 0.8;

var a1a2 = 1 - (a1a1 + a2a2);

var p = a1a1 + (a1a2 / 2);
var q = 1 - p;

console.log("generation 0:",a1a1,a1a2,a2a2);

//Calculating the next generation

a1a1 = p*p;
a1a2 = 2*p*q;
a2a2 = q*q;

console.log("generation 1:",a1a1, a1a2, a2a2);