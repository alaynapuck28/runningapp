import React, {Component} from "react";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import MeetPet from "./MeetPet";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {isLogInButtonClicked: true};
    this.state = {isMeetPetButtonClicked: false};
  }

  handleClick = () => {
    this.setState({
      isLogInButtonClicked: !this.state.isLogInButtonClicked
    });
  }

  handleClick2 = () => {
    this.setState({
      isMeetPetButtonClicked: !this.state.isMeetPetButtonClicked
    });
  }

  render() {

    if (this.state.isLogInButtonClicked === true) {
      return <LogIn handleClick2={this.handleClick2} />;
    } else if (this.state.isMeetPetButtonClicked === true) {
      return <MeetPet />;
    }
    return <HomePage handleClick={this.handleClick} handleClick2={this.handleClick2} />;
    
  }
}

export default Main;
