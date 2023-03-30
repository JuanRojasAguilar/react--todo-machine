import React from "react";
import Styles from './CreateTodoButton.module.css'

export function CreateTodoButton({ openModal, setOpenModal }) {

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