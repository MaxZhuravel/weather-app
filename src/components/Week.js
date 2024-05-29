import React, {Component} from 'react';
import Day from "./Day";
import TempType from "./TempType";

class Week extends Component {
    render() {

        let classNames = this.props.tempType === 'C'
            ? ['celsius active', 'fahrenheit']
            : ['celsius', 'fahrenheit active'];

        return (
            <div className="week">
                <div className="week__header">
                    <div className="week__title">Week</div>
                    <div className="week__temp-type">
                        <TempType className={classNames[0]} type="C" convert={() => this.props.convert('C')}/>
                        <TempType className={classNames[1]} type="F" convert={() => this.props.convert('F')}/>
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