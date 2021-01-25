var express = require('express');
var router = express.Router();

const Rout = require('./routmod');

router.get('/rout',(req,res,next)=>{
    Rout.find(function(err,rout){
        res.json(rout)
    });
});

router.post('/rout',(req,res,next)=>{
    let newRout = new Rout({
       name:req.body.name,
       mark:req.body.mark
    });
    newRout.save((err,rout)=>{
        if(err){
            res.json({msg:"failed to added"})
        }else{
            res.json({msg:"added successfully"})
        }
    });
});

router.put('/rout/:id',(req,res,next)=>{
    Rout.findByIdAndUpdate(req.params.id,req.body,function(err,post){
        if(err){
            res.json(err)
        }else{
            res.json(post)
        }
    });
});

router.delete('/rout/:id',(req,res,next)=>{
    Rout.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    });
});

module.exports = router;
