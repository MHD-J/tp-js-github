let notes = [12, 8, 15, 10, 7];

let somme = 0;
for (let n of notes) somme += n;
let moyenne = somme / notes.length;

let maxNote = Math.max(...notes);
let admisCount = notes.filter(n => n >= 10).length;

console.log("Moyenne = " + moyenne);
console.log("Meilleure Note = " + maxNote);
console.log("Admis = " + admisCount);