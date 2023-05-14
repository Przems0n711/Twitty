import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for posts" value={query} onChange={handleInputChange} />
            <button type="submit"><i className="fas fa-search"></i></button>
        </form>
    );
};

export default SearchBar;