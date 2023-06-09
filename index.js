const { ifError } = require('assert');
const fs = require('fs');
const superagent = require("superagent");


fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    console.log(`Dog Breed: ${data}`);

    superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`).end((err,res)=>{
        console.log(res.body.message);
        if(err) return console.log(err.message);

        fs.writeFile('dog-img.txt',res.body.message, (err)=>{
            if(err) return console.log(err.message);
             console.log('file save');
        })
    })
});


