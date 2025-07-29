let conn=require("../../db.js");

exports.savequestion=((...saveq)=>{
 return new Promise((resolve,reject)=>{
    conn.query("insert into addquestion values('0',?,?,?,?,?,?)",[...saveq],(err,result)=>{
        if(err){
             reject(err);
        }else{
            resolve(result);
        }
    })
 })
});

exports.showqe=(()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from addquestion",(err,result)=>{
         if(err){
            reject(err);
         }else{
            resolve(result);
         }
        });
    })
})

exports.delquestion=((qid)=>{
    return new Promise((resolve,reject)=>{
        conn.query("delete from addquestion where aid=?",[qid],(err,result)=>{
         if(err)
         {
               reject(err);
         }else{
         
            resolve(result);
         }
        })
    })
})

exports.updatequestion=((qid)=>{
    return new Promise((resolve,reject)=>{
     conn.query("select * from addquestion where aid=?",[qid],(err,result)=>{
      if(err)
      {
        reject(err);
      }else{
        resolve(result);
      }
     });
    });
})

exports.updatequestions=((...save)=>{
    return new Promise((resolve,reject)=>{
      conn.query("update addquestion set qname=?,opta=?,optb=?,optc=?,optd=?,optco=? where aid=?",[...save],(err,result)=>{
        if(err)
        {
            reject(err);
        }else{
            resolve(result);
        }
      })
    });
})

exports.searchdata=((sname)=>{
 return new Promise((resolve,reject)=>{
    conn.query("select * from addquestion where qname like ?",[`%${sname}%`],(err,result)=>{
        if(err)
        {
            reject(err);
        }else{
            resolve(result);
        }
    })
 })
})