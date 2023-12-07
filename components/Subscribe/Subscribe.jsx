import React from "react";
import Image from "next/image";
import { RiSendPlaneFill } from "react-icons/ri";

// INTERNAL IMPORTS
import style from "./Subscribe.module.css";
import images from "@/images";

const Subscribe = () => {
    return (
        <div className={style.subscribe}>
            <div className={style.subscribe_box}>
                <div className={style.subscribe_box_left}>
                    <h2>Never miss a drop</h2>
                    <p>
                        Subscribe to our super-exclusive drop list and be the
                        first to know about trading tips, forecast and
                        announcements.
                    </p>
                    <div className={style.subscribe_box_left_box}>
                        <span>01</span>
                        <small>Get more discount</small>
                    </div>

                    <div className={style.subscribe_box_left_box}>
                        <span>02</span>
                        <small>Get premium magazines</small>
                    </div>

                    <div className={style.subscribe_box_left_input}>
                        <input type="email" placeholder="Enter your Email" />
                        <RiSendPlaneFill
                            className={style.subscribe_box_left_input_icon}
                        />
                    </div>
                </div>

                <div className={style.subscribe_box_right}>
                    <Image src={images.study} alt="Get Update" width={600} height={500}></Image>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
