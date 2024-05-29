import React, {Component} from 'react';

class Day extends Component {
    render() {
        return (
            <div className="day">
                <div className="day__name">{this.props.dayName}</div>
                <div className="day__img">
                    <img src="/icons/02d.png" alt=""/>
                </div>
                <div className="day__temp">15</div>
            </div>
        );
    }
}

export default Day;