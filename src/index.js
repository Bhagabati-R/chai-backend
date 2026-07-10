//will connect to the data base//
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB()











/*
import express from "express"
const app=express()

(async()=>{
    //use try catch to conect the database//
    try {
        await  mongoose.connect(`${process.env.MONGO_URI}/ ${DB_NAME}`)
        //listener//
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App id listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR",error)
        throw err
    }
})()
    */