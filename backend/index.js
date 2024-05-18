require("dotenv").config()

const express=require("express")
const app=express()



const port=process.env.PORT

app.use(express.json());

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
})

app.listen(port,()=>{
    console.log("Listening to port",port)
})


