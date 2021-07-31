// // implementation->files/folder or directory interact

// //files->read,write,delete,update
let fs=require("fs");
// let content= fs.readFileSync("f1.txt");
// //concatenate->string->"text"
// console.log("content:"+content);
// //buffer-> video/audio/text
// console.log("content:",content);
// //write->writeFileSync
// // if File doesn't exist ->file create,content put
// //if file does exist content-> override
// fs.writeFileSync("abc.txt","Hum aaj khush nhi hain");
// //update
// fs.appendFileSync("abc.txt","Bhai khush kyu nhi hain");
// //delete the file by passing it's path
// fs.unlinkSync("abc.txt");
// console.log("File removed");

// *****************************directory*********************************
//->create/delete
// fs.mkdirSync("myDirectory");
// //Delete
// fs.rmdirSync("myDirectory");


//path->does it exist or not
// let doesExist=fs.existsSync("fs.js");
// console.log("This path exist ?",doesExist);

//path-> to identify belong to folder or file

// let statsOfAPath=fs.lstatSync("dir");
// console.log("statsOfAPath",statsOfAPath);
// console.log("isFile?",statsOfAPath.isFile());
// console.log("isDirectory?",statsOfAPath.isDirectory());
// *****************************doubt**************************
// directory->content
let address="G:\\PEPCODING\\PP_12_21\\Module_1_Js";
let content=fs.readdirSync(address);
console.log("directoryContent",content);

//********************COPYFILESYNC***********************************************
// let path=require("path");
// let srcFilePath="G:\\PEPCODING\\PP_12_21\\Module_1_Js\\f1.txt";
// let destDir="G:\\PEPCODING\\PP_12_21\\Module_1_Js\\dir";
// let tobeCopiedFileName=path.basename(srcFilePath);
// console.log(tobeCopiedFileName);
// let destPath=path.join(destDir,tobeCopiedFileName);
// console.log(destPath);
// fs.copyFileSync(srcFilePath,destPath);
// console.log("File copied");

