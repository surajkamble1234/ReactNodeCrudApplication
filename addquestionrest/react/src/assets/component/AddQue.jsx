import React from "react";
import APIservice from "../services/APIservice.jsx";

export default class AddQue extends React.Component{
    constructor()
    {
        super();
        this.state={
            "qname":"",
            "opta":"",
            "optb":"",
            "optc":"",
            "optd":"",
            "optco":"",
        }

    }

    
    uniHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    saveQuestions=()=>{
        let Promise=APIservice.saveQuestions(this.state);
            Promise.then((res)=>{
              console.log("success "+res.data);
              alert(res.data.message);
                window.location.href="/view";
            }).catch((err)=>{
                console.log(err);
            })
    }

    render()
    {
        return<>
        
         <div className="container mt-5 pt-4 " >
                <div className="form-group">
                  <input type="text" name="qname" placeholder="Enter Question" value={this.state.qname} 
                  onChange={(e)=>this.uniHandler(e)} className="form-control" />
                </div>

                <div className="form-group">
                  <input type="text" name="opta" placeholder="Enter Question Option" value={this.state.opta}  
                  onChange={(e)=>this.uniHandler(e)} className="form-control" />
                </div>

                  <div className="form-group">
                  <input type="text" name="optb" placeholder="Enter Question Option" value={this.state.optb}  onChange={(e)=>this.uniHandler(e)} className="form-control" />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optc" placeholder="Enter Question Option" value={this.state.optc}  onChange={(e)=>this.uniHandler(e)} className="form-control" />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optd" placeholder="Enter Question Option" value={this.state.optd}   onChange={(e)=>this.uniHandler(e)} className="form-control" />
                 </div>

                  <div className="form-group">
                  <input type="text" name="optco" placeholder="Enter Question Option" value={this.state.optco}  onChange={(e)=>this.uniHandler(e)} className="form-control" />

                </div>

                 <div className="form-group">
                  <input type="button" value="AddQuestion"   className="form-control bg-success text-white" onClick={this.saveQuestions} />
                </div>
                



         </div>
        </>
    }
}