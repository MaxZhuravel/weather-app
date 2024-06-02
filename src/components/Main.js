import React from 'react';
import Week from "./Week";
import Highlights from "./Highlights";

const Main = (props) => {
    return (
        <div className="main">
            <Week
                convert={props.convert}
                tempType={props.tempType}/>
            <Highlights/>
        </div>
    );
}

export default Main;