require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const app=express();
mongoose.connect(process.env.URL);
db=mongoose.connection;
db.on('error',()=>{console.log("Some error occured")});
db.once('open',()=>{console.log("Connected to databse")});
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
res.status(200).send("You have reached the homepage");
});
const article=require("./routes/api/article");
app.use('/api/articles',article); 
app.listen(process.env.PORT,()=>{
    console.log(`Listening at PORT ${process.env.PORT}`) 
})