//JS Implementation of the Hardey-Weinberg Principle

//Allele Frequencies
var a1a1 = 0.5;
var a2a2 = 0.8;

var a1a2 = 1 - (a1a1 + a2a2);

var p = a1a1 + (a1a2 / 2);
var q = 1 - p;

console.log("generation 0:",roundNumbers(a1a1,3),roundNumbers(a1a2,3),roundNumbers(a2a2,3));

//Calculating the next generation
function createNextGeneration(){
    a1a1 = p*p;
    a1a2 = 2*p*q;
    a2a2 = q*q;
}

function roundNumbers(value,decimal){
    var shifter = Math.pow(10,decimal)
    return Math.round(value*shifter)/shifter;
}
for (var iterator = 0; iterator<5;iterator++){
    createNextGeneration();
    console.log("generation "+(iterator + 1)+":",roundNumbers(a1a1,3), roundNumbers(a1a2,3), roundNumbers(a2a2,3));
}
