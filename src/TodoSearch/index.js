import React from "react";

import { TodoContext } from "../TodoContext";
import Styles from './TodoSearch.module.css';

export function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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