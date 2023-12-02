console.log("This is tutorial 53");

let name1 = "Harry";
let name2 = "Varma";
let name3 = "Charan";
let name4 = "Sunil";
let greetText = "Good Morning";
 
function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(name1);
    console.log(name +"is a good boy");
    console.log(greetText + " " +name);
    
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    // This will never be executed
   // console.log("This is not finished")
}
greet(name1,greetText);
greet(name2, greetText);
greet(name3,greetText);
greet(name4);

let returnVal = sum(10,12,13);
console.log(returnVal);


// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");
