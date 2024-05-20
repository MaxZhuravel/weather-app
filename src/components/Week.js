import React, {Component} from 'react';
import Day from "./Day";
import TempType from "./TempType";

class Week extends Component {
    render() {
        return (
            <div className="week">
                <div className="week__header">
                    <div className="week__title">Week</div>
                    <div className="week__temp-type">
                        <TempType className="celsius active" type="C"/>
                        <TempType className="fahrenheit" type="F"/>
                    </div>
                </div>
                <div className="week__body">
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                    <Day/>
                </div>
            </div>
        );
    }
}

export default Week;