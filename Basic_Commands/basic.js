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
            console.log(filesArr[i]+" alraedy exists");
        }
        else{
            fs.appendFileSync(joinPath,"");
        }
    }

}



function deleteFile(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        let joinPath=path.join(srcPath,filesArr[i]);
        let doesExist=fs.existsSync(joinPath);
    
        if(doesExist){
            fs.unlinkSync(joinPath);
        }
        else{
            console.log(filesArr[i]+" does not exist");
        }
    }
}



function readFiles(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        let joinPath=path.join(srcPath,filesArr[i]);
        let doesExist=fs.existsSync(joinPath);
        if(!doesExist){
            console.log(filesArr[i]+" does not exist");
            return;
        }
    }

    // for(let i=0;i<filesArr.length;i++){


    // }
}


module.exports={
    createFile:createFile,
    deleteFile:deleteFile,
    readFiles:readFiles
}