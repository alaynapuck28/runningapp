import React from "react";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
import critterLogo from "../images/critter-plant-icon.png";

function RunHistory() {
  return (
    <div className="runHistory">
      <div className="card">
        <div className="card-header text-left">Goal History</div>
        <div className="card-body">
          <img alt="critter" className="critterIcon pb-2" src={critterLogo} />
          <h6 className="card-subtitle mb-2 text-muted">Hodor</h6>
          <h5 className="card-title font-weight-bold text-left">
            Running Goal: 100 miles
          </h5>

          <div className="border bg-light rounded p-3">
            <p className="card-text text-left pr-2 pl-2">Goal Started: 10/5/19</p>
            <p className="card-text text-left pr-2 pl-2">Goal Completed: 10/5/19</p>
            <p className="card-text text-left pr-2 pl-2">4 runs logged</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img alt="critter" className="critterIcon pb-2" src={critterLogo} />
          <h6 className="card-subtitle mb-2 text-muted">Brian</h6>
          <h5 className="card-title font-weight-bold text-left">
            Running Goal: 26 miles
          </h5>

          <div className="border bg-light rounded p-3">
            <p className="card-text text-left pr-2 pl-2">Goal Started: 10/4/19</p>
            <p className="card-text text-left pr-2 pl-2">Goal Completed: 10/5/19</p>
            <p className="card-text text-left pr-2 pl-2">7 runs logged</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img alt="critter" className="critterIcon pb-2" src={critterLogo} />
          <h6 className="card-subtitle mb-2 text-muted">Walter</h6>
          <h5 className="card-title font-weight-bold text-left">
            Running Goal: 100 miles
          </h5>

          <div className="border bg-light rounded p-3">
            <p className="card-text text-left pr-2 pl-2">Goal Started: 10/4/19</p>
            <p className="card-text text-left pr-2 pl-2">Goal Completed: 10/5/19</p>
            <p className="card-text text-left pr-2 pl-2">20 runs logged</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RunHistory;