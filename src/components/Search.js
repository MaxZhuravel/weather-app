import React, {Component} from 'react';

class Search extends Component {

    state = {
        value: '',
    }

    onValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changeCity(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="sidebar__search">
                <input onChange={this.onValueChange} value={this.state.value} type="text" className="search" placeholder="Search for places..."/>
            </form>
        );
    }
}

export default Search;