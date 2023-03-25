import React from "react";
import Styles from './TodoList.module.css'

export function TodoList(props) {
    return(
        <section>
            <ul className={Styles.List}>
                {props.children}
            </ul>
        </section>
    )
}