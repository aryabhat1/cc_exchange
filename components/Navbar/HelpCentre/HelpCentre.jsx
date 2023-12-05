import React from "react";
import Link from "next/link";

import style from "./HelpCentre.module.css";

const HelpCentre = () => {
    const helpCenter = [
        {
            name: "About",
            link: "about",
        },

        {
            name: "Contact Us",
            link: "contact",
        },

        {
            name: "Sign In",
            link: "sign-in",
        },
        {
            name: "Sign Out",
            link: "sign-out",
        },
    ];
    return (
        <div className={style.box}>
            {helpCenter.map((el, i) => (
                <div className={style.helpCenter}>
                  <Link href={{pathname: `${el.link}`}}>{el.name}</Link>


                </div>
            ))}
        </div>
    );
};

export default HelpCentre;
