const basic=require("./Basic_Commands/basic");
// const { create } = require("domain");

let inputArr=process.argv.slice(2);
let srcPathInput;
if(inputArr[0]=="--cdp"){
    srcPathInput=process.cwd();
}
else{
    srcPathInput=inputArr[0];
}

let command=inputArr[1];

let filesArr=[];
for(let i=2;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}

switch(command){

    case "-c":
        basic.create(srcPathInput,filesArr);
        break;
    
    case "-d":
        basic.deleteFile(srcPathInput,filesArr);
        break;  

    default:
        console.log("command not found");

}