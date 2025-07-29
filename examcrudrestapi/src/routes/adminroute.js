let express=require("express");
let router=express.Router();

let adminctrl=require("../controller/adminctrl.js");


router.post("/saveq",adminctrl.addquestion);
router.get("/showque",adminctrl.showque);

router.get("/deleteq",adminctrl.deletequestion);

router.get("/updatedata",adminctrl.updateq);
router.post("/updatequesdata",adminctrl.updatequestiondata);

router.get("/search",adminctrl.searchques);
module.exports=router;