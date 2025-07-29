import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
 render(){
    return<>
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="text-primary">Question Manager</h1>
        <p className="lead">Add and manage your quiz questions easily</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-primary">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Add a New Question</h4>
              <p className="text-muted text-center">Click below to start adding questions</p>
              <div className="text-center">
                <Link to="/add">
                  <button className="btn btn-success px-4 py-2">Add Question</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 }

}
