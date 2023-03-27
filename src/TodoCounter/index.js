import React from "react";

import { TodoContext } from "../TodoContext";
import Styles from './TodoCounter.module.css';

export function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className={Styles.TodoCounter}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
};
