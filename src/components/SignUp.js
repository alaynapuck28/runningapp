import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router";
let emptyUser = {
  fname: "",
  lname: "",
  email: "",
  password: ""
};

class SignUp extends Component {
  state = {
    user: emptyUser,
    redirect: false
  };

  handleSubmit = e => {
    console.log(this.state.user);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.user)
    });
    this.setState({ user: emptyUser });
    this.setState({ redirect: true });
  };

  render() {
    const { from } = this.props.location.state || "/";
    const { redirect } = this.state;

    return (
      <div>
        <form className="login" onSubmit={this.handleSubmit}>
          First Name:
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, fname: e.target.value }
              });
            }}
          />
          Last Name
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, lname: e.target.value }
              });
            }}
          />
          Email
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, email: e.target.value }
              });
            }}
          />
          Password
          <input
            type="text"
            className="form-control"
            onChange={e => {
              this.setState({
                user: { ...this.state.user, password: e.target.value }
              });
            }}
          />
          <input type="submit" value="save" />
          {redirect && <Redirect to={from || "/profilepage"} />}
        </form>
      </div>
    );
  }
}

export default SignUp;
