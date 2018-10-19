function Main(){
    input1 = parseInt(prompt("What number would you like to see multiples of? "));
    input2 = parseInt(prompt("How many multiples would you like to see? "));
    for (x=1; x<=input2; x++ ){
    console.log(input1*x)
    }
}
Main();