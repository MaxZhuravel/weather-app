import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Main from "./Main";

class Board extends Component {
    render() {
        return (
            <div className="board">
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}

export default Board;