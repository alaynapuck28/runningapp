import React from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Headshot from '../images/headshot-placeholder.png';

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="circle-image">
        <img className="headshot" src={Headshot} />
      </div>
      <h2>Hello Erin</h2>
      <Link to="/meetpet">
          <button>View your Goal</button>
      </Link>
      <Link to="/createagoal">
          <button>Create a Goal</button>
      </Link>
      <Footer />
    </div>
  );
      
}

export default (ProfilePage);