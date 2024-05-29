import React, {Component} from 'react';
import Week from "./Week";
import Highlights from "./Highlights";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Week
                    convert={this.props.convert}
                    tempType={this.props.tempType}/>
                <Highlights/>
            </div>
        );
    }
}

export default Main;