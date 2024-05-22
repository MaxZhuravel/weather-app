import './App.scss';
import Board from "./components/Board";
import {Component} from "react";

class App extends Component {

    render () {
        return (
            <div className="App">
                <Board/>
            </div>
        );
    }
}

export default App;
