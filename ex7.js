function isVowel(){
    alert("Is your letter a vowel?");
    letter = prompt("Please input your letter: ");
    letter = letter.toLowerCase();
    if (letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u"){
        console.log("True")
    }
    else{
        console.log("False")
    }
}
isVowel();