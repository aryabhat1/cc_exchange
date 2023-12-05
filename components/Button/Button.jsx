import React from "react";

// INTERNAL IMPORT

import style from "./Button.module.css";

const Button = ({ btnName, handleClick }) => {
    return (
        <div className={style.box}>
            <button className={style.button} onClick={() => handleClick()}>
                {btnName}
            </button>
        </div>
    );
};

export default Button;
