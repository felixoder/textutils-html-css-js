console.log("hello world")
let text = document.getElementById('text')
let para = document.getElementById('para')

//The function Section


function punc() {
    //remove punctuations

    let generated = text.value;
    let punctuations = /[.,@\/#!$%\^&\*;:{}=\-_`~()]/g;
    let newText = generated.replace(punctuations, '');
    alert("remove punctuations is running")
    para.innerHTML = newText;
}
function fullcaps() {
    //generate capital letters
    let generated = text.value;
    const uppercase = generated.toUpperCase();
    console.log(uppercase)
    alert("Uppercase is running--Press OK to continue")
    para.innerHTML = uppercase
}
function smallcaps() {
    //generate small letters
    let generated = text.value;
    const lowercase = generated.toLowerCase();
    console.log(lowercase)
    alert("smallcaps is running--Press OK to continue")
    para.innerHTML = lowercase
}
function whitesp() {
    //remove white space
    let generated = text.value
    let newtext = generated.replace(/\s+/g, ' ');
    alert("whitespace remover is running--Press OK to continue")
    para.innerHTML = newtext
}
function rev() {
    //generate the reverse forms
    let generated = text.value;
    let words = generated.split(' ');
    let reversedWords = words.reverse();
    let reversedText = reversedWords.join(' ');
    alert("reverse is running--Press OK to continue")
    para.innerHTML = reversedText

}
function count(){
    let generated = text.value;
    
    
    count = 0;
    for (let index = 0; index < generated.length; index++) {
        count++;
        
    }
    alert("Count is running")
    para.innerHTML = count
}
//comment if you want to add any functionalities