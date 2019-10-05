import React from "react";
import { Link } from "react-router-dom";
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
            Running Goal: 10 miles
          </h5>

          <div className="border border-primary bg-light rounded">
            <p className="card-text text-left p-1">Goal Started: 10/4/19</p>
            <p className="card-text text-left p-1">Goal Completed: 10/5/19</p>
            <p className="card-text text-left p-1">4 runs logged</p>
          </div>

          <Link to="/profilepage">
            <button
              type="button"
              className="btn btn-primary"
              data-container="body"
            >
              View your Profile
            </button>
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <img alt="critter" className="critterIcon" src={critterLogo} />
          <h5 className="card-title font-weight-bold text-left">
            Running Goal: 10 miles
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text text-left">Goal Started: 10/4/19</p>
          <p className="card-text text-left">Goal Completed: 10/5/19</p>
          <p className="card-text text-left">4 runs logged</p>

          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
          <Link to="/profilepage">
            <button className="btn btn-primary">View your Profile</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <Link to="/profilepage">
            <button className="btn btn-primary">View your Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RunHistory;