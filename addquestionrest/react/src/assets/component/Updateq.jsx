import React from "react";
import APIservice from "../services/APIservice";
import { data, useParams } from "react-router-dom";

export default class Updateq extends React.Component{
constructor()
{
  super();
  this.state={
    addques:{
      aid:"",
      qname:"",
      opta:"",
      optb:"",
      optc:"",
      optd:"",
      optco:""
    }
  }
}
componentDidMount()
{
  const aid=window.location.pathname.split("/")[2];
  let updata=APIservice.updatequedata(aid);
      updata.then((rp)=>{
        console.log(rp.data)
      this.setState({addques:rp.data.data[0]});
    
      }).catch((err)=>{
        console.log(err)
      })
}

uniHandler=(e)=>{
    const {name,value}=e.target;
    this.setState((prevState)=>({
      addques:{
        ...prevState.addques,[name]:value
      }
    }));

 }

 saveques=()=>{
   let saveobques=APIservice.saveupdateques(this.state.addques);
        saveobques.then((rpeq)=>{
           alert(rpeq.data.mess);
           window.location.href="/view";
        }).catch((err)=>{
          console.log(err)
        })
  }

    render(){
        return<>
      
          <div className="container mt-5 pt-4" >
             
                <input type="hidden" name="aid" value={this.state.addques.aid} onChange={(e)=>this.uniHandler(e)} />
                <div className="form-group">
                  <input type="text" name="qname" className="form-control" value={this.state.addques.qname} onChange={(e)=>this.uniHandler(e)} />
                </div>

                <div className="form-group">
                  <input type="text" name="opta" className="form-control" value={this.state.addques.opta} onChange={(e)=>this.uniHandler(e)} />
                </div>

                  <div className="form-group">
                  <input type="text" name="optb" className="form-control" value={this.state.addques.optb} onChange={(e)=>this.uniHandler(e)} />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optc" className="form-control" value={this.state.addques.optc} onChange={(e)=>this.uniHandler(e)} />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optd" className="form-control" value={this.state.addques.optd} onChange={(e)=>this.uniHandler(e)} />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optco" className="form-control" value={this.state.addques.optco} onChange={(e)=>this.uniHandler(e)} />

                </div>

                 <div className="form-group">
                  <input type="button" value="UpdateQuestion"   className="form-control bg-success text-white" onClick={this.saveques}  />
                </div>
                



         </div>
        </>
    }
}