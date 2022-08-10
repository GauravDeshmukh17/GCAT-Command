const funCreate=require("./Basic_Commands/basic");
// const { create } = require("domain");

let inputArr=process.argv.slice(2);
let srcPathInput=inputArr[0];
let command=inputArr[1];

let filesArr=[];
for(let i=2;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}

switch(command){

    case "-c":
        funCreate.create(srcPathInput,filesArr);
        break;
    
    default:
        console.log("command not found");

}