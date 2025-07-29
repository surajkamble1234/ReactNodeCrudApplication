let express=require("express");
let app=express();

let bodyParser=require("body-parser");
let db=require("../db.js");
let router=require("../src/routes/adminroute.js");
const cors = require("cors");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors({origin:'http://localhost:5173',
    methods:['GET','POST']
}));
app.set("view engine","views");
app.use("/",router);
module.exports=app;