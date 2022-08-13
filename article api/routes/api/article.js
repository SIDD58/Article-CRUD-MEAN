const express=require('express');
const req = require('express/lib/request');
const Article=require('../../models/article');
app=express.Router();
app.route('/')
.get(async (req,res)=>{
    try{
        const articles=await Article.find();
        res.status(200).json(articles);
    }
    catch(e)
    {
        return res.status(500).json({error:e.message});
    }
})
.post(async (req,res)=>{
    const article=new Article({
        description:req.body.description,
        title:req.body.title
    });
    try{
        newArticle=await article.save()
        res.status(201).json(newArticle)

    }
    catch(err)
    {
        return res.status(400).json({error:err.message})
    }
})
.delete(async (req,res)=>{
    try{
        await Article.remove();
        res.status(204).json({message:"All records removed"});
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
    

});
async function getArticle(req,res,next)
{
    try{
        const article =await Article.findById(req.params.id);
        if(article)
        {
            res.article=article;  
        }
        else
        {
            return res.status(400).json({error:"No Such ID"});
        }
        next();
        
    }
    catch(err)
    {
        return res.status(500).json({error:err.message});
    }
    
}
//
app.route('/:id')
.get(getArticle,async (req,res)=>{
    try{
        res.status(200).json(res.article)
    }
    catch(err){
        res.status(500).json({error:err.message});
    }

})
.delete(getArticle,async (req,res)=>{
    try{
        await res.article.remove();
        res.status(204).json({message:"Successfully removed"});
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }

})
.patch(getArticle,async (req,res)=>{
    res.article.description= req.body.description;
    res.article.title= req.body.title;
    try{
        await res.article.save();
        res.status(204).json({message:"Record Updated"});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
});
module.exports=app;