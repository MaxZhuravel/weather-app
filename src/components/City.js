import React, {Component} from 'react';

class City extends Component {
    render() {
        return (
            <div className="sidebar__city">
                <img src="/img/new-york.jpg" alt="city"/>
                <div className="city__name">{this.props.city}</div>
            </div>
        );
    }
}

export default City;