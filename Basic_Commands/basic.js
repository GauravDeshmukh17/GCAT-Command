const fs=require("fs");
const path=require("path");

function createFile(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        // let joinPath=path.join(srcPath,filesArr[i]);
        //               OR 
        let joinPath=srcPath+"/"+filesArr[i];
        // console.log(joinPath);
        let doesExist=fs.existsSync(joinPath);

        if(doesExist){
            console.log(filesArr[i]+" alraedy exist");
        }
        else{
            fs.appendFileSync(joinPath,"");
            console.log(filesArr[i]+" created !!");
        }
    }

}



function deleteFile(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        let joinPath=path.join(srcPath,filesArr[i]);
        let doesExist=fs.existsSync(joinPath);
    
        if(doesExist){
            fs.unlinkSync(joinPath);
            console.log(filesArr[i]+" deleted !!");
        }
        else{
            console.log(filesArr[i]+" does not exist");
        }
    }
}



function readFiles(str,srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        let joinPath=path.join(srcPath,filesArr[i]);
        let doesExist=fs.existsSync(joinPath);
        if(!doesExist){
            console.log(filesArr[i]+" does not exist");
        }
    }

    for(let i=0;i<filesArr.length;i++){

        let joinPath=path.join(srcPath,filesArr[i]);
        let doesExist=fs.existsSync(joinPath);
        if(doesExist){
            console.log(str+fs.readFileSync(joinPath,"utf-8"));
        }
    }
}


module.exports={
    createFile:createFile,
    deleteFile:deleteFile,
    readFiles:readFiles
}
