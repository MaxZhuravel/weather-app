import React, {Component} from 'react';
import Search from "./Search";
import Today from "./Today";
import City from "./City";
import Description from "./Description";
import ErrorMessage from "./ErrorMessage";

class Sidebar extends Component {
    render() {

        let content = this.props.error ? <ErrorMessage/> : <Today tempType={this.props.tempType}/>

        return (
            <div className="sidebar">
                <Search changeCity={this.props.changeCity}/>
                {content}
                <Description/>
                <City city={this.props.city}/>
            </div>
        );
    }
}

export default Sidebar;