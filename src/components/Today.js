import React, {Component} from 'react';

class Today extends Component {
    render() {
        return (
            <div className="today">
                <div className="today__image">
                    <img src="/icons/001-sun.png" alt=" "/>
                </div>
                <div className="today__temp">12<span>°C</span></div>
                <div className="today__name">Monday, <span>16:00</span></div>
            </div>
        );
    }
}

export default Today;