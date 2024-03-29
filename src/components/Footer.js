import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="footerIcon">
        <Link to="/">
            <i className="fas fa-home"></i><br/><p>Home</p>
        </Link>
        </div>
        <div className="footerIcon">
        <Link to="/profilepage">
            <i className="fas fa-user-circle"></i><br/><p>Profile</p>
        </Link>
        </div>
        <div className="footerIcon">
        <Link to="/meetpet">
            <i className="fas fa-running"></i><br/><p>Log Run</p>
        </Link>
        </div>
        <div className="footerIcon">
        <Link to="/runhistory">
            <i className="fas fa-history"></i><br/><p>History</p>
        </Link>
        </div>
    </div>
  );
      
}

export default (Footer);