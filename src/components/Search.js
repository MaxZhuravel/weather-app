import React, {useState} from 'react';

const Search = (props) => {

    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.changeCity(search);
    }

    return (
        <form onSubmit={onSubmit} className="sidebar__search">
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                className="search"
                placeholder="Search for places..."/>
        </form>
    );

}

export default Search;