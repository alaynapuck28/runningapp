import React from 'react';

class LogRun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalStatus: 0,
        }
    }

    render() {
        return (
            <div className="logRun">
                <form onSubmit={(event) => {
                    this.props.logRun(this.state.goalStatus);
                    event.preventDefault();
                }
                }
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        this.setState({ goalStatus: value })
                    }}>
                    <div className="row">
                        <div className="col">
                            <input
                                className="form-control"
                                type="text"
                                name="goal"
                                placeholder="#"
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" type="submit">Log a Run</button>
                        </div>
                    </div>
                </form>
                <h3>You're logging {this.state.goalStatus} miles today</h3>
            </div>
        )
    }
}
export default LogRun;
