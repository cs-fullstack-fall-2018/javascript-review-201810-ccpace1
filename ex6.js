function max(){
    input1 = parseInt(prompt("Please input your first number: "));
    input2 = parseInt(prompt("Please input your second number: "));
    input3 = parseInt(prompt("Please input your third number: "));
    if (input1<input2&&input2>input3){
        console.log(input2)
    }
    else if (input1>input2&&input1>input3){
        console.log(input1)
    }
    else if (input1<input3&&input2<input3){
        console.log(input3)
    }
    else{
        console.log("multiple numbers are the same")
    }
}
max();