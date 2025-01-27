let str = "This is a beautiful Morning I ever seen, God please forgive me";
str = str.toLowerCase();

let vowels = "aeiou";
let consonantsCount = 0;
let vowelsCount = 0;

for (let char of str) {
    if (vowels.includes(char)) {
        vowelsCount++;
    } else if (char >= 'a' && char <= 'z') {
        consonantsCount++;
    }
}

console.log(`Vowels: ${vowelsCount}`);
console.log(`Consonants: ${consonantsCount}`);
