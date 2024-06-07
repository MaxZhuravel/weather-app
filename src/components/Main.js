import React from 'react';
import Week from "./Week";
import Highlights from "./Highlights";

const Main = ({convert, tempType}) => {

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