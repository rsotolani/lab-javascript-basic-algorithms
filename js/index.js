/* ### Iteration 1: Names and Input

  1.1 Create a variable `hacker1` with the driver's name. <br>
  1.2 Print `"The driver's name is XXXX"`.<br>
  1.3 Create a variable `hacker2` with the navigator's name.<br>
  1.4 Print `"The navigator's name is YYYY"`. 
*/
console.log("Iteration 1.1:");

let hacker1;
hacker1 = "Rodrigo S";
console.log(`The driver's name is ${hacker1}`);

let hacker2;
hacker2 = "Rodrigo A"
console.log(`The navigator's name is ${hacker2}`);
console.log("-----------------------------------");


/* ### Iteration 2: Conditionals
  2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
  <br>
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`. 
*/
console.log("Iteration 2.1:");

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}

console.log("-----------------------------------");


/* ### Iteration 3: Loops
  3.1 Print all the characters of the driver's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
  i.e. `"J O H N"`
*/
console.log("Iteration 3.1:");

let nome1 = '';
for (const i of hacker1) {
    nome1 += i.toUpperCase();
    if (hacker1.indexOf(i) === hacker1.length - 1) { continue; }
    nome1 += " ";
}

console.log(nome1);
console.log("-----------------------------------");


/*  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
*/
console.log("Iteration 3.2:");

let nome2 = [];
for (let i = hacker2.length - 1; i >= 0; i--) {
    nome2 += hacker2[i];
}

console.log(nome2);
console.log("-----------------------------------");


/*  3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?` 
*/
console.log("Iteration 3.3:");

/* primeira versão:
if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
} else if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}*/
switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`);
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
}  

console.log("-----------------------------------");



/* ### Bonus Time!

#### Bonus 1:
Go to [lorem ipsum generator](http://www.lipsum.com/) and:
  - Generate 3 paragraphs. Store the text in a variable type of string.
  - Make your program count the number of words in the string.
  - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears
*/
console.log("Iteration Bonus 1:");

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget magna at ligula suscipit finibus. Sed efficitur lorem dolor, in dignissim turpis dapibus ultrices. Nullam ac pretium leo. Phasellus aliquet dolor volutpat elit tincidunt accumsan. Vestibulum lacus nunc, viverra a lectus vestibulum, viverra luctus quam. Nullam ex metus, sagittis sit amet maximus in, auctor at purus. Sed sed semper urna, in tempor dui. Aliquam malesuada est vel accumsan malesuada. Sed tincidunt commodo dolor non faucibus. Morbi et lobortis libero. Pellentesque tincidunt non ex id tempus. Phasellus diam orci, tempus quis libero eget, euismod elementum orci. Maecenas vulputate iaculis bibendum. Nam malesuada efficitur diam, id ornare sapien cursus eu.

Ut sed pretium metus. Etiam ac lacus sit amet odio volutpat faucibus. Praesent vestibulum, sem eget porta suscipit, odio ante porta libero, sit amet iaculis metus ante ac quam. Sed metus nunc, feugiat quis fermentum ut, sodales hendrerit libero. Nunc pulvinar sagittis nisi, a lacinia turpis imperdiet a. Fusce felis quam, laoreet in erat hendrerit, ultrices rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

In rutrum, dui eu laoreet elementum, purus sem malesuada diam, ut hendrerit urna nunc eget justo. Sed vel velit non mi sagittis ultricies. Vestibulum in tempor tellus, et ultricies lectus. Aliquam erat volutpat. Curabitur rutrum nulla mollis elementum blandit. In elementum, lectus quis sagittis scelerisque, felis tellus ornare nulla, nec pellentesque quam elit eu nunc. Cras maximus tellus a bibendum tincidunt. Donec tincidunt id orci et pretium. Nam laoreet libero sit amet libero sodales pharetra. Nunc mi augue, dictum id mattis sed, consectetur eu sapien. Vivamus dignissim convallis maximus. Aenean id pellentesque mi. Pellentesque iaculis tortor id urna rutrum, vel iaculis enim fermentum. Nam ligula turpis, ornare nec lobortis a, finibus sit amet orci. Fusce congue tristique dignissim. Aliquam consequat nec mi sit amet consectetur.`

let words = lorem.match(/[\w]+/gi);
console.log("Number of words is ", words.length);

let et = 0;
for (let i in words) {
  if (words[i] === "et") { et++; }
}
console.log("Number of times the Latin word [`et`] is ", et)
console.log("-----------------------------------");


/* #### Bonus 2:
Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes: 
  - "A man, a plan, a canal, Panama!"
  - "Amor, Roma"
  - "race car"
  - "stack cats"
  - "step on no pets"
  - "taco cat"
  - "put it up"
  - "Was it a car or a cat I saw?" and "No 'x' in Nixon". 
*/
console.log("Iteration Bonus 2:");

function palindrome(str) {
    //remover nao-alfanumerico e faz uppercase
    const strLimpa = str.replace(/[\W_]/gi,"").toUpperCase();

    //reverter string 
    let rts = "";
    for (let i = strLimpa.length-1; i>=0; i--) {
        rts += strLimpa[i];
    }

    return strLimpa === rts; 
}

const str = ["\"A man, a plan, a canal, Panama!\"",
            "\"Amor, Roma\"",
            "\"race car\"",
            "\"stack cats\"",
            "\"step on no pets\"",
            "\"taco cat\"",
            "\"put it up\"",
            "\"Was it a car or a cat I saw?\"",
            "\"No 'x' in Nixon\""];
for (let i in str) {
    if (palindrome(str[i])) {
        console.log(str[i], " is a palindrome.");
    } else {
        console.log(str[i], " is NOT a palindrome.");
    }
}
console.log("-----------------------------------");

