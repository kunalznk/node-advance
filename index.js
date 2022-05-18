// Improving Node Performace 
// => Cluster Mode ||
// => Worker thread
process.env.UV_THREADPOOL_SIZE = 1;

const clustre = require('cluster');

if(clustre.isMaster) {
    clustre.fork();
    clustre.fork();
    // clustre.fork();
    // clustre.fork();
    // clustre.fork();
    // clustre.fork();
    
} else {

    // child acts as a server 
    // and do nothing else
    const expree = require("express");
    const crypto = require('crypto');
    const app = expree();

  

    const start = Date.now();
    app.get("/" , (req , res) => {
        crypto.pbkdf2("kunal123" , "sdljnsjkv" , 100000 , 512 , 'sha512' , () => {
            res.send("Hi There !");
        })
        
    })
    
    app.get("/fast" , (req , res) => {
        crypto.pbkdf2("kunal123" , "sdljnsjkv" , 100000 , 512 , 'sha512' , () => {
            res.send("This was fast !");
        })
        
    })
    
    app.listen(3000 , () => {
        console.log("Server is up !!!")
    })
}

