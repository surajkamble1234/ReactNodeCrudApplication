let app=require("./src/app.js");

let Port=4000;
app.listen(Port,()=>{
    console.log("server started :"+Port);
});