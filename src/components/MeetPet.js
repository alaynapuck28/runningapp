import React from "react";
import { Link } from 'react-router-dom';

function MeetPet() {
  return (
    <div className="meetPet">
      meet pet page
      <Link to="/logarun">
        <button>Log A Run</button>
      </Link>
    </div>
  );
      
}

export default (MeetPet);