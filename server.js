import express from 'express'

const app = express();


// console.log('hello from node server');


app.listen(3000, ()=>{
    console.log("server is running...");
});