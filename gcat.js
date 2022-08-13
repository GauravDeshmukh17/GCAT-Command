const basic=require("./Basic_Commands/basic");
// const { create } = require("domain");

let inputArr=process.argv.slice(2);
// console.log(inputArr);
let srcPathInput;

let command;
if(inputArr[0]=="--cdp"){
    srcPathInput=process.cwd();
    command=inputArr[1];
}
else if(inputArr[0].charAt(0)=="-"){
    srcPathInput=process.cwd();
    command=inputArr[0];
}
else{
    srcPathInput=inputArr[0];
    command=inputArr[1];
}

let filesArr=[];

let getIndex;
for(let i=0;i<inputArr.length;i++){

    if(inputArr[i].includes(".")){
        getIndex=i;
        break;
    }
}

for(let i=getIndex;i<inputArr.length;i++){
    filesArr.push(inputArr[i]);
}

switch(command){

    case "-c":
        basic.createFile(srcPathInput,filesArr);
        break;
    
    case "-d":
        basic.deleteFile(srcPathInput,filesArr);
        break;  

    case "--read":
        basic.readFiles(srcPathInput,filesArr);
        break;

    default:
        console.log("command not found");

}

