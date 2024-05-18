require("dotenv").config()

const cors = require('cors');
const express=require("express")
const app=express()



const port=process.env.PORT

app.use(express.json());
app.use(cors());

app.use((req,res,next)=>{
    console.log(req.method," --> ",req.path)
    next()
})

app.get("/cam",(req,res)=>{
    res.status(200).json({"M":"i"})
})

app.post("/cam",(req,res)=>{
    const data=req.body;
    res.status(200).json(data)
    console.log(data)
})

app.listen(port,()=>{
    console.log("Listening to port",port)
})


