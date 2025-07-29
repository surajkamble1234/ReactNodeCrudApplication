let mysql=require("mysql2");
let Dotenv=require("dotenv");
    Dotenv.config();
let conn=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_Name
});

conn.connect((err)=>{
    if(err){
        console.log("database is not connected...." );
    }else{
        console.log("database is connected....");
    }
})

module.exports=conn;