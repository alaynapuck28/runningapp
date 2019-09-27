import React from "react";

function LogInComponent(props) {
  return (
    <div className="login">
      <input className="form-control" value="Enter Your Email Address" />
      <input className="form-control" value="Create a Password" />
      <button onClick={props.handleClick2} className="btn btn-primary">Meet your pet</button>
    </div>
  );
      
}

export default (LogInComponent);
