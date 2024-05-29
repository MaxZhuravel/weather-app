import React, {Component} from 'react';
import Search from "./Search";
import Today from "./Today";
import City from "./City";
import Description from "./Description";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Search changeCity={this.props.changeCity}/>
                <Today tempType={this.props.tempType}/>
                <Description/>
                <City city={this.props.city}/>
            </div>
        );
    }
}

export default Sidebar;