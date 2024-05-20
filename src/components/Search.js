import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className="sidebar__search">
                <input type="text" className="search" placeholder="Search for places..."/>
            </div>
        );
    }
}

export default Search;