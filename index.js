const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/peopleAssignment',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(console.log(`DB GOT CONNECTED`))
.catch(error=>{
    console.log(`DB CONNECTION ISSUE`);
    console.log(error);
    process.exit(1);
});
app.use(express.json());
const user = require('./routes/user');
app.use("/api",user);


app.listen(4000,()=>{
    console.log(`server is running on port 4000...`);
})