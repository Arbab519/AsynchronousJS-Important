 
const fs = require('fs');
const superagent = require("superagent");

//read file
const readFilePro = (file =>{
    return new Promise((resolve, reject) => {
        fs.readFile(`${__dirname}/${file}`, 'utf-8', (err, data) => {
            if (err) reject('File Not Found');
            resolve(data)
        });
    });
}); 

//writeFile
const writeFilePro= (fileName, data)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName,data ,(err)=>{
            if (err) reject('data not saved');
         resolve('sucess');
        });
    });
}

// actual event lopp 
 readFilePro('dog.txt').then(res=>{
    console.log(res);
    return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`);
}).then(res=>{
    console.log(res.body.message);
    return writeFilePro('dog-img.txt',res.body.message);
}).then(() => {
   console.log('Random Dog image saved'); 
}).catch((err) => {
    console.log(err.message);
});

