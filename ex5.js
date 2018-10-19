function max(){
    input1 = parseInt(prompt("Please input your first number: "));
    input2 = parseInt(prompt("Please input your second number: "));
    if (input1<input2){
        console.log(input2)
    }
    else if (input1>input2){
        console.log(input1)
    }
    else{
        console.log("Those are the same number")
    }
}
max();