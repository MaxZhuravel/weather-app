import React, {Component} from 'react';
import Week from "./Week";
import Highlights from "./Highlights";

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Week/>
                <Highlights/>
            </div>
        );
    }
}

export default Main;