import React from 'react';

import '../search/searchfield.style.css'

export const Searchfield = ({placeholder, handleChange}) => (
    <div>
        <input 
        className='search'
        type="search" 
        placeholder={placeholder}
        onChange = {handleChange}
        />
    </div>
)