import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CreateAGoal from "./components/CreateAGoal";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import ProfilePage from "./components/ProfilePage";
import MeetPet from "./components/MeetPet";
import LogARun from "./components/LogARun";
import LogRun from "./components/LogRun";
// import Filler from "./components/Filler";
import RunHistory from "./components/RunHistory";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router basename={'/runningapp'}>
        <Header />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/profilepage' component={ProfilePage}/>
        <Route exact path='/createagoal' component={CreateAGoal}/>
        <Route exact path='/meetpet' component={MeetPet}/>
        <Route exact path='/logarun' component={LogARun}/>
        <Route exact path='/logrun' component={LogRun}/>
        <Route exact path='/runhistory' component={RunHistory}/>
      </Router>
      </div>
    );
  }
}
export default App;
