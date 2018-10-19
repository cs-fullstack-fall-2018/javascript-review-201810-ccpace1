function Main(){
    input1 = parseInt(prompt("Please input your first number: "));
    input2 = parseInt(prompt("Please input your second number: "));
    if (input2<input1){
        console.log("-1")
    }
    else if (input1===input2){
        console.log("Those numbers are the same!")
    }
    else if (input2>input1){
        for (x=input1+1; x<input2; x++){
         console.log(x)
        }
    }
}
Main();