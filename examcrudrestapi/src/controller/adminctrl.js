let adminmodel=require("../model/adminmodel.js");

exports.addquestion=((req,res)=>{
  let {qname,opta,optb,optc,optd,optco}=req.body;
  let promobj=adminmodel.savequestion(qname,opta,optb,optc,optd,optco);
      
      promobj.then((re)=>{
          res.status(200).json({message:"question saved successfully"});
      }).catch((err)=>{
          console.log(err);
          res.status(500).json({message:"questions not saved ...",error:err});
      })
});

exports.showque=((req,res)=>{
 let probj=adminmodel.showqe();
     probj.then((r)=>{
      res.send(r);
     }).catch((err)=>{
      console.log(err);
     })
})

exports.deletequestion=((req,res)=>{
    let qid=req.query.qid;
    let delob=adminmodel.delquestion(qid);
         delob.then((d)=>{
          res.status(200).json({msg:"delete successfully",data:d});
         }).catch((err)=>{
            res.status(500).send({msg:"some problem",error:err});
         });

});

exports.updateq=((req,res)=>{
 let aid=req.query.qid;
  let upobj=adminmodel.updatequestion(aid);
      upobj.then((ure)=>{
        res.send({data:ure});
      }).catch((err)=>{ 
        res.status(500).send({error:err});
      })
});

exports.updatequestiondata=((req,res)=>{
 let {aid,qname,opta,optb,optc,optd,optco}=req.body;
  
 let upques=adminmodel.updatequestions(qname,opta,optb,optc,optd,optco,aid);
     upques.then((rqs)=>{
        res.status(200).json({mess:"update successfully",data:rqs});
     }).catch((err)=>{
      console.log(err);
     })
});

exports.searchques=((req,res)=>{
 let sname=req.query.sname;
  let searchob=adminmodel.searchdata(sname);
      searchob.then((sr)=>{
       res.send(sr);
      }).catch((err)=>{
        console.log(err);
      })
});