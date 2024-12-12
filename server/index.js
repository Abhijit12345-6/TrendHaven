const express=require("express");
const app=express();

const database=require("./config/database");
const cookieParser=require("cookie-parser");
const cors=require("cors");


require("dotenv").config();
const PORT=process.env.PORT || 4000;

//database Connect 
database.connect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://localhost:5173/",
    methods:['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credential:true
}))

//default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is Up and running"
    });
});

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})