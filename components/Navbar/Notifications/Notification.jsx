import React from "react";
import Image from "next/image";

import style from "./Notification.module.css";
// import images from '@/images'
import images from "../../../images";

const Notification = () => {
    return (
        <div className={style.notification}>
            <p>Notification</p>
            <div className={style.notification_box}>
                <div className={style.notification_box_img}>
                    <Image
                        src={images.user1}
                        alt="profile image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className={style.notification_box_info}>
                    <h4>Andrew Flemming</h4>
                    <p>Measure action of user...</p>
                    <small>3 minutes age</small>
                </div>
                <span className={style.notification_box_new}></span>
            </div>
        </div>
    );
};

export default Notification;
