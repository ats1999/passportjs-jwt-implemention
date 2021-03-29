const router = require('express').Router();
const jwt = require('jsonwebtoken');
const JWT_WORKER_KEY = process.env.JWT_WORKER_KEY;
const Worker = require('../../model/worker/Worker');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/signup',(req,res)=>{
    const {email,password} = req.body;
    Worker.findOne({email})
    .exec()
    .then(worker=>{
        if(!worker){
            bcrypt.hash(password, saltRounds, function(err, hash) {
                if(err)
                    res.status(500).send("Server error!");
                else {
                    // save user into DB
                    const worker = new Worker({email,password:hash});
                    worker.save()
                    .then(savedWorker=>{
                        res.send(savedWorker);
                    }).catch(err=>{
                        console.log(err);
                        res.status(500).send("Server error!");
                    })
                }
            });
        }else{
            res.status(422).send("User already exist!");
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).send("Server error!");
    })
});


router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    Worker.findOne({email})
    .then(worker=>{
        if(!worker)
            res.status(404).send("User does not exist!");
        else{
            bcrypt.compare(password, worker.password, function(err, result) {
                if(err){
                    console.log(err);
                    res.status(500).send("Server error!");
                }else{
                    if(result){
                        const tokenworker = {
                            id:worker._id,
                            email:worker.email
                        }
                        jwt.sign(tokenworker,JWT_WORKER_KEY,(err,token)=>{
                            if(err){
                                console.log(err);
                                res.status(500).send("Server error!");
                            }else{
                                res.send(token);
                            }
                        })
                    }
                }
            });
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).send("Server error!");
    })
})
module.exports = router;