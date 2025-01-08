const mongoose = require("mongoose");

exports.dbConnect = () =>{
    
         mongoose.connect(process.env.DATABASE_URL).then(()=>{
            console.log("DB connection successful");
         }).catch((err)=>{
            console.log("Can't connect to Database");
            console.log(err.message);
            process.exit(-1);
         })
    
}