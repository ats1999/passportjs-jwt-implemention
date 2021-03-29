const router = require('express').Router();
const auth = require('../../middleware/auth/worker');
const Job = require('../../model/jobs/Job');

/**
 * This API will take user id from request payload and
 * returns all jobs assigned to the current worker.
 */
router.get('/view',auth().authenticate(),(req,res)=>{
    Job.find({assignedTo:req.user.id})
    .then(tasks=>res.send(tasks))
    .catch(err=>{
        console.log(err);
        res.status(500).send("Server error!");
    })
})
module.exports = router;