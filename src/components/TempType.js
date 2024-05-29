import React, {Component} from 'react';

class TempType extends Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.convert}>°{this.props.type}</div>
        );
    }
}

export default TempType;