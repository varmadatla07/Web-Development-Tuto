const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8"); 
console.log(text); 
text = text.replace("browser","Varma");
console.log("THe content is ");
console.log(text);

fs.writeFileSync("varma.txt",text);