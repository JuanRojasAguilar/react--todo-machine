import React from "react";
import Styles from './TodoSearch.module.css';

export function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            placeholder="Cebolla"
            className={Styles.TodoSearch}
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}