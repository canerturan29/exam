import React from 'react'
import Styles from "./Button.module.css"
import cs from "classnames"

export function Button(props) {
    const className = cs(Styles.button, {
        [Styles.Primary]: props.type == "primary",
        [Styles.Secondary]: props.type == "secondary",
        [Styles.Success]: props.type == "success",
        [Styles.Danger]: props.type == "danger",

    })
    return (
        <button className={className}>{props.children}</button>
    )
}
