const router = require('express').Router();
const jwt = require('jsonwebtoken');
const JWT_ADMIN_KEY = process.env.JWT_ADMIN_KEY;
const Admin = require('../../model/admin/Admin');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/signup',(req,res)=>{
    const {email,password} = req.body;
    Admin.findOne({email})
    .exec()
    .then(admin=>{
        if(!admin){
            bcrypt.hash(password, saltRounds, function(err, hash) {
                if(err)
                    res.status(500).send("Server error!");
                else {
                    // save user into DB
                    const admin = new Admin({email,password:hash});
                    admin.save()
                    .then(savedAdmin=>{
                        res.send(savedAdmin);
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
    Admin.findOne({email})
    .then(admin=>{
        if(!admin)
            res.status(404).send("User does not exist!");
        else{
            bcrypt.compare(password, admin.password, function(err, result) {
                if(err){
                    console.log(err);
                    res.status(500).send("Server error!");
                }else{
                    if(result){
                        const tokenAdmin = {
                            id:admin._id,
                            email:admin.email
                        }
                        jwt.sign(tokenAdmin,JWT_ADMIN_KEY,(err,token)=>{
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