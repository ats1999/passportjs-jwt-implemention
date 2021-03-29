const router = require('express').Router();
const auth = require('../../middleware/auth/admin');
const Job = require('../../model/jobs/Job');
/**
 * This api requires two parameters
 *      description - description of job
 *      assignedTo - ObjectId of assigned worker
 */
router.post('/create',auth().authenticate(),async(req,res)=>{
    const task = new Job({
        description:req.body.description,
        assignedTo:req.body.assignedTo,
        createdBy:req.user.id
    });
    task.save()
    .then(newTask=>{
        res.send(newTask);
    }).catch(err=>{
        console.log(err);
        res.status(500).send("Server error!");
    })
})
module.exports = router;
