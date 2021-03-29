const { Router } = require('express');

const router = require('express').Router();
const auth = require('../../middleware/auth/admin');
const Worker = require('../../model/worker/Worker');

router.get('/workers',auth().authenticate(),(req,res)=>{
    Worker.find()
    .then(workers=>{
        res.send(workers);
    }).catch(err=>{
        console.log(err);
        res.status(500).send("Not Ok!");
    })
});
module.exports=router;