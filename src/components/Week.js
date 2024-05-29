import React, {Component} from 'react';
import Day from "./Day";
import TempType from "./TempType";

class Week extends Component {

    dayNameArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    renderDays = () => {
        return (this.dayNameArr.map(day => {
            return <Day key={day} dayName={day} />;
        }));
    }

    render() {

        let days = this.renderDays();

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
                    {days}
                </div>
            </div>
        );
    }
}

export default Week;