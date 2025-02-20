function hasPattern(seq){
    let pattern = /\b[b-zB-Z]{6,}/;
    return console.log(`Matches with pattern: ${pattern.test(seq)}`);
};

let seq1 = "Wonderful, Joyful";
let seq2 = "Happiness, Time, Task, Apple";

hasPattern(seq1);
hasPattern(seq2);