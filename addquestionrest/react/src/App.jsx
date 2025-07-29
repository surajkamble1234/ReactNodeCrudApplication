import React from "react";
import reactdom from "react-dom";
import Home from "./assets/component/Home";
import AddQue from "./assets/component/AddQue";
import ViewQue from "./assets/component/ViewQue";
import Updateq from "./assets/component/updateq";

import {BrowserRouter,NavLink,Routes,Route,Link} from "react-router-dom";


export default class App extends React.Component{
  render(){
    return<>
     <BrowserRouter>
     <NavLink>
      <ul className="Nav">
        <li ><Link to="/" className="Nav">Home</Link></li>
        <li><Link to="/add"  className="Nav">AddQuestions</Link></li>
        <li><Link to="/view"  className="Nav">ViewQuestions</Link></li>
        
      </ul>
     </NavLink>
      <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/add" element={<AddQue/>}>Addquestions</Route>
          <Route path="/view" element={<ViewQue/>}>ViewQuestions</Route>

          <Route path="/update/:qid" element={<Updateq/>}></Route>
     </Routes>
     </BrowserRouter>

    
    </>
  }
}