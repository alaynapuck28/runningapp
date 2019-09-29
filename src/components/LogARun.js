import React from "react";
import { Link } from 'react-router-dom';

function LogARun() {
  return (
    <div className="logARun">
      log a run page
      <Link to="/meetpet">
        <button>Log A Run</button>
      </Link>
    </div>
  );
      
}

export default (LogARun);