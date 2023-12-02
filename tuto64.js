// Synchronous or Blocking -  Line by Line code execution guarantee

// Asynchronous or Non-Blocking - Line by line execution not guarantee

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(err, data);
    console.log("The data is ", data);
});
console.log("This is a message "); 