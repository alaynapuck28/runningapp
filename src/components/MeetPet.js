import React from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

function MeetPet() {
  return (
    <div className="meetPet">
      meet pet page
      <Link to="/logarun">
        <button>Log A Run</button>
      </Link>
      <Footer />
    </div>
  );
      
}

export default (MeetPet);
