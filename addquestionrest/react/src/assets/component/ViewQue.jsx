import React, { useEffect } from "react";
import APIservice from "../services/APIservice";
import { Link } from "react-router-dom";

export default class ViewQue extends React.Component{
   
    constructor()
    {
        super();
        this.state={
        Adddata:[]
        }
    }
    componentDidMount()
    {
        let obj=APIservice.showQuestions();
            obj.then((r)=>{
             this.setState({Adddata:r.data});
            }).catch((err)=>{
                console.log(err);
            })
    }

   delQuese=(aid)=>{
    let delob=APIservice.delQuestions(aid);
    delob.then((s)=>{
     const updatedata=this.state.Adddata.filter((item)=>item.aid!==aid);
     this.setState({Adddata:updatedata});
      alert(s.data.msg);
    }).catch((err)=>{
        console.log(err)
    });
   }
    
   searchajax=(name)=>
   {
     let http=new XMLHttpRequest();
          http.onreadystatechange=()=>{
           if(http.readyState===4 && http.status===200)
           {
             let responseData=http.responseText;
            
             let jsonob=JSON.parse(responseData);
                   if(Array.isArray(jsonob)){
                      this.setState({Adddata:jsonob});
                   }else{
                    this.setState({Adddata:[]})
                   }
           }
          }
          http.open("GET",`http://localhost:4000/search?sname=${name}`,true);
          http.send();
   }

   handlersearch=(e)=>{
       this.searchajax(e.target.value);
   }
    render()
    {
        return<>
        <div className="contaner mt-4">

            <input type="text" name="search"  className="form-control mb-3" placeholder="Search the question" onChange={this.handlersearch} />
            
           <table className=" table table-striped">
            <thead>
            <tr>
                <th>SR.NO</th>
                <th>qname</th>
                <th>opta</th>
                <th>optb</th>
                <th>optc</th>
                 <th>optd</th>
                 <th>optco</th>
                 <th>Delete</th>
                 <th>Update</th>
            </tr>
            </thead>

            <tbody>
               { this.state.Adddata.length>0 ? (
                this.state.Adddata.map((row)=><tr key={row.aid}>
                <td>{row.aid}</td>
                <td>{row.qname}</td>
                <td>{row.opta}</td>
                <td>{row.optb}</td>
                <td>{row.optc}</td>  
                <td>{row.optd}</td> 
                <td>{row.optco}</td>

              <td><button onClick={ ()=>this.delQuese(row.aid)}>delete</button></td>
            <td>
             <Link to={`/update/${row.aid}`}>
             <button>Update</button>
             </Link>
             </td>

                </tr>)):(
                        <tr>
                            <td colSpan="9" className="text-center text-danger">
                                record not fount
                            </td>
                        </tr>)}

                    
                
            </tbody>
        </table>
         </div>
        
        
        </>
    }
}