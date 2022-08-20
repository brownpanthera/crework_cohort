function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            console.log("fizz");
        }else if(i % 5 == 0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
    return;
}