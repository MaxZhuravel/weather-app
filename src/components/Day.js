import React, {Component} from 'react';

class Day extends Component {
    render() {
        return (
            <div className="day">
                <div className="day__name">Sun</div>
                <div className="day__img">
                    <img src="/icons/001-sun.png" alt=""/>
                </div>
                <div className="day__temp">15</div>
            </div>
        );
    }
}

export default Day;