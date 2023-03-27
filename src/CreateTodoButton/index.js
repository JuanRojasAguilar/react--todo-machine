import React from "react";

import { TodoContext } from "../TodoContext";
import Styles from './CreateTodoButton.module.css'

export function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
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