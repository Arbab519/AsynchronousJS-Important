 
const fs = require('fs');
const superagent = require("superagent");

//read file
const readFilePro =  (file =>{
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

const sum =(a,b)=> {
  return a+b;
}



const getDogPic= async ()=>{
try {
    const data = await readFilePro('dog.txt'); 
    console.log(data);
    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);
    await writeFilePro('dog-img.txt', res.body.message);
    console.log('image Saved in dog-img.txt');

    
} catch (error) {
    console.log(error.message);  
}
const total = sum(5,5); 
return { "string": '2: Ready' , "total" :total} ;
}

(async () => {
    try { 
        console.log('1:I wil get dog pics');
        const x= await getDogPic();
        console.log(x.string);
        console.log(x.total);
        console.log('3:Done getting dog pics');
    } catch (error) {
        console.log('Error');
    }
})();



//Notes
// 1 async function always returns a promise

// 2 use async/await to treat that returned value 

// 3 anthor try catch  to catch  that error 
// ()()  first to declear the function  second () is to call that function 
// (async ()=>{}) pass async function form first () 
// use try catch 

// ---------------------------------------------------------

// outputs Before 
// 1:I wil get dog pics
// Promise { <pending> }
// 3:Done getting dog pics
// akita
// https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg
// image Saved in dog-img.txt
// 2: Ready 


//Done