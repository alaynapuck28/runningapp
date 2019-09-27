import React, {Component} from "react";
import MeetPet from "./MeetPet";
import LogInComponent from "./LogInComponent";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {isMeetPetButtonClicked: false};
  }

  handleClick2 = () => {
    this.setState({
      isMeetPetButtonClicked: !this.state.isMeetPetButtonClicked
    });
  }

  render() {
    if (this.state.isMeetPetButtonClicked === true) {
      return <MeetPet />;
    }
    return <LogInComponent handleClick2={this.handleClick2} />;
  }
      
}

export default (LogIn);
