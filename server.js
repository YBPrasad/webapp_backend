const express=require("express");
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT || 8000;

const DB_URL="mongodb+srv://YBPrasad:Buddi%40123@mernapp.xa6f4.mongodb.net/test?";
//const DB_URL="mongodb+srv://techflare:Techflare%409192021@cluster0.lqyny.mongodb.net/ppms";
mongoose.connect(DB_URL,({
    useNewUrlParser:true,
    useUnifiedTopology:true
})).then(()=>{
    console.log("DB connected ");
}).catch((error)=>{
    console.log("DB connected error "+error);
});


app.listen(PORT,()=>{
    console.log("App is running on port "+PORT);
    
});

