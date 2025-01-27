function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = "I love to eet pizza.";
let correctedSentence = correctfn(sentence, "eet", "eat");
console.log(correctedSentence);