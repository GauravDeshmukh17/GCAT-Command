const fs=require("fs");
const path=require("path");

function create(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        // let joinPath=path.join(srcPath,filesArr[i]);
        // console.log(joinPath);
        // let checkFileArr=joinPath.split("\\");

        //               OR 

        let joinPath=srcPath+"/"+filesArr[i];
        // console.log(joinPath);
        let checkFileArr=joinPath.split("/");

        // console.log(checkFileArr);
        let checkFile=checkFileArr[checkFileArr.length-1];
        let doesExist=fs.existsSync(checkFile);

        if(doesExist){
            console.log(checkFile+" alraedy exists");
            break;
        }
        else{
            fs.appendFileSync(filesArr[i],"");
        }
    }

}

module.exports={
    create:create
}