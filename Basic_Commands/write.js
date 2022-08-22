const fs=require("fs");
const path=require("path");

function writeFile(srcPath,inputArr){

    srcPath=srcPath+"/"+inputArr[2];
    let i=3;
    while(inputArr[i]!="~"){

        fs.appendFileSync(srcPath,inputArr[i]+" ");
        i++;
    }

}

module.exports={
    writeFile:writeFile
}

