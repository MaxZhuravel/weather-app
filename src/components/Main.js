import React from 'react';
import Week from "./Week";
import Highlights from "./Highlights";

const Main = (props) => {

    const {convert, tempType} = props

    return (
        <div className="main">
            <Week
                convert={convert}
                tempType={tempType}/>
            <Highlights/>
        </div>
    );
}

export default Main;