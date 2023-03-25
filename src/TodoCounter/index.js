import React from "react";
import Styles from './TodoCounter.module.css';

export function TodoCounter({ total, completed }) {
    return (
        <h2 className={Styles.TodoCounter}>Has completado {completed} de {total} TODOs</h2>
    );
};
