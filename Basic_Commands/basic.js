const fs=require("fs");
const path=require("path");

function create(srcPath,filesArr){

    for(let i=0;i<filesArr.length;i++){

        // let joinPath=path.join(srcPath,filesArr[i]);
        //               OR 
        let joinPath=srcPath+"/"+filesArr[i];
        // console.log(joinPath);
        let doesExist=fs.existsSync(joinPath);

        if(doesExist){
            console.log(filesArr[i]+" alraedy exists");
            break;
        }
        else{
            fs.appendFileSync(joinPath,"");
        }
    }

}

module.exports={
    create:create
}