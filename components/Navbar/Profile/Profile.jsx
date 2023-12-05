import React from "react";
import Image from "next/image";

// import style from "./Profile.module.css";

import { FaUserAlt, FaRegImage, FaUserImage, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { TbDownloadOff, TbDownload } from "react-icons/tb";
import Link from "next/link";

// INTERNAL IMPORTS

import style from "./Profile.module.css";
// import images from "@images";
import images from "../../../images";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div className={style.profile_account}>
                <Image
                    src={images.user1}
                    alt="user profile"
                    width={50}
                    height={50}
                    className={style.profile_account_image}
                ></Image>

                <div className={style.profile_account_info}>
                    <p>Andrew Flemming</p>
                    <small>x03865788923888...</small>
                </div>
            </div>

            <div className={style.profile_menu}>
                <div className={style.profile_menu_one}>
                    <div className={style.profile_menu_one_item}>
                        <FaUserAlt></FaUserAlt>
                        <p>
                            <Link href={{ pathname: "/myprofile" }}>
                                My Profile
                            </Link>
                        </p>
                    </div>

                    <div className={style.profile_menu_one_item}>
                        <FaRegImage></FaRegImage>
                        <p>
                            <Link href={{ pathname: "/my-items" }}>
                                My Items
                            </Link>
                        </p>
                    </div>

                    <div className={style.profile_menu_one_item}>
                        <FaUserEdit></FaUserEdit>
                        <p>
                            <Link href={{ pathname: "/edit-profile" }}>
                                Edit Profile
                            </Link>
                        </p>
                    </div>
                </div>

                <div className={style.profile_menu_two}>
                    <div className={style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link href={{ pathname: "/help" }}>Help</Link>
                        </p>
                    </div>

                    <div className={style.profile_menu_one_item}>
                        <TbDownload />
                        <p>
                            <Link href={{ pathname: "/disconnect" }}>
                                Disconnect
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
