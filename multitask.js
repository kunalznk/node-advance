const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() { 
https.request('https://www.google.com' , res => {
    res.on('data' , () => {  })

    res.on('end' , () => {
        console.log('REQ', Date.now() - start);
    });
})
.end();
}

function doHash() {
    crypto.pbkdf2("kunal123" , "sdljnsjkv" , 100000 , 512 , 'sha512' , () => {
        console.log('HASH' , Date.now() - start);
    })
}

doRequest();


fs.readFile('/home/kunal/Development/node-advance/multitask.js' , 'utf-8' , () => {
    console.log("FS:" ,Date.now() - start)
})

doHash();
doHash();
doHash();
doHash();

