console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element =>{
         sum += element;

    });
    let avg = sum/arr.length;
    return avg;
}

module.exports = {
    avg : average,
    name:"Varma",
    repo:"GItHub"

}

module.exports.name = "harry";