const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    status:{
        type:String,
        default:"in-progress"
    }
});

module.exports = mongoose.model("Job",jobSchema);