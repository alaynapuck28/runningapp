import React from 'react';
import { restElement } from '@babel/types';

class SetGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: 0,
        }
    }
    handleSubmit = (event) => {
        this.props.setGoal(this.state.goal);
        //event.target.value = 0;
        this.setState({
            goal: 0,
        });
    }

    render() {
        return (
            <div className="setGoal">
                <form onSubmit={(event) => {
                    this.handleSubmit(event);
                    this.setState({ goal: 0, })
                    event.preventDefault();

                }
                }
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        this.setState({ goal: value })
                    }}>
                    <div className="row">
                        <div className="col">
                            <input
                                className="goalBar form-control"
                                type="text"
                                name="goal"
                                placeholder="#"
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" type="submit">Set Goal</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SetGoal;