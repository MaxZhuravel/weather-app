import React, {useState} from 'react';

const Search = ({changeCity}) => {

    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        changeCity(search);
    }

    return (
        <form onSubmit={onSubmit} className="sidebar__search">
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                className="search"
                placeholder="Search for places..."/>
            <button type="submit" onClick={onSubmit} className="search__button"></button>
        </form>
    );

}

export default Search;