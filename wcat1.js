let fs=require("fs");
let inputArr=process.argv.slice(2);
// console.log(inputArr);
//  segregate -> option
//  segregate ->file
let optionArr=[];
let filesArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
    optionArr.push(inputArr[i]);
    }
    else{
    filesArr.push(inputArr[i]);
    }
}
// for(let i=0;i<optionArr.length;i++){
//     if(optionArr[i]=="-s"){
        
//     }
// }
// console.log("Option Array:",optionArr);
// console.log("FilesArr:",filesArr)
// let filesArr=inputArr;
for(let i=0;i<filesArr.length;i++){
    let ans=fs.existsSync(filesArr[i]);
    if(ans==false){
        console.log("File doesn't exist");
        return;
    }
}
let content="";
for(let i=0;i<filesArr.length;i++){
    content=content+fs.readFileSync(filesArr[i]) +"\r\n" ;
}
let contentArr=content.split("\r\n");

//-s check
let isSPresent=optionArr.includes("-s");
if(isSPresent){
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]=="" && contentArr[i-1]==""){
            contentArr[i]=null;
        }
        else if(contentArr[i]=="" && contentArr[i-1]==null){
            contentArr[i]=null;
        }
    }
    let tempArr=[];
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr=tempArr;
}
// console.log(contentArr.join("\n"));

//  3)  -n
let isNPresent=optionArr.includes("-n");
if(isNPresent){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=(i+1)+" "+contentArr[i];
    }
}
// console.log(contentArr.join("\n"));


// 4) -b

let isBPresent=optionArr.includes("-b");
if(isBPresent){
    let c=1;
 for(let i=0;i<contentArr.length;i++){
     if(contentArr[i]!=""){
         contentArr[i]=c+" "+contentArr[i];
         c++;
     }
 }   
}
console.log(contentArr.join("\n"));