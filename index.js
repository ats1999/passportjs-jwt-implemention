require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// connect database
require('./config/db');

// initialize passport
app.use(require('./middleware/auth/admin')().initialize());
app.use(require('./middleware/auth/worker')().initialize());

app.use(bodyParser.json());

app.get('/',(_,res)=>{
    res.json({
        name:"Rahul"
    });
})

// register routes
app.use('/api/admin',require('./routes/auth/admin'));
app.use('/api/worker',require('./routes/auth/worker'));
app.use('/api/admin/job',require('./routes/admin/create-job'));
app.use('/api/admin/view',require('./routes/admin/view-workers'));
app.use('/api/worker/job',require('./routes/worker/view-jobs'));

app.listen(process.env.port || 3000,()=>{
    console.log(`Server is running on ${process.env.port || 3000}`)
});

module.exports=app;