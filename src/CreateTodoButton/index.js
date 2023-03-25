import React from "react";
import Styles from './CreateTodoButton.module.css'

export function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    };

    return(
        <button
            className={Styles.CreateTodoButton}
            onClick={onClickButton}
        >
            +
        </button>
    );
}