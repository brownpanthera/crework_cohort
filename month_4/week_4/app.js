const fileSystem = require('fs');

//TODO Creating File
// fileSystem.appendFile('./documents/ --- your file name---', 'hello new file', (err, data)=>{
//     if(err) throw err;
//     console.log('file created!');
// })

//TODO Reading Files
// fileSystem.readFile('./documents/ ---your file name---', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

//TODO Writing Files
//* updaing file with writeFile method

// fileSystem.writeFile('./documents/ ---your file name---', 'hello new written file', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('done');
// })

// TODO Updating file
//* with appendFile method
// fileSystem.appendFile('./documents/ ---your file name---', 'It is my birthCertificate', (err, data)=>{
//     if(err) throw err;
//     console.log('file updated!');
// })

//TODO Deleting Files
// fileSystem.unlink('./documents/ ---your file name---', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file deleted");
// })