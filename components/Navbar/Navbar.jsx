import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// IMPORT ICONS
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

// INTERNAL IMPORT

import style from "./Navbar.module.css";
import { Discover, HelpCentre, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentIndex";
// import { Button } from "../ComponentIndex";
// import {Button} from "../Button/Button"
import images from "@/images";

const Navbar = () => {
    // Usestate Components
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        } else if (btnText == "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        } else {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    };

    const openNotification = () => {
        if (!notification) {
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);
        } else {
            setNotification(false);
        }
    };

    const openProfile = () => {
        if (!profile) {
            setProfile(true);
            setHelp(false);
            setDiscover(false);
            setNotification(false);
        } else {
            setProfile(false);
        }
    };

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true);
        } else {
            setOpenSideMenu(false);
        }
    };

    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <div className={style.navbar_container_left}>
                    <div className={style.logo}>
                        <Image
                            src={images.logo}
                            alt="Carbon Credit Marketplace"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={style.navbar_container_left_box_input}>
                        <div
                            className={
                                style.navbar_container_left_box_input_box
                            }
                        >
                            <input
                                type="text"
                                placeholder="Search Carbon Credit NFT"
                            ></input>
                            <BsSearch
                                onClick={() => {}}
                                className={style.search_icon}
                            />
                        </div>
                    </div>
                </div>
                {/* //END OF LEFT SECTION */}
                <div className={style.navbar_container_right}>
                    <div className={style.navbar_container_right_discover}>
                        {/* DISCOVER MENU */}

                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {discover && (
                            <div
                                className={
                                    style.navbar_container_right_discover_box
                                }
                            >
                                <Discover />
                            </div>
                        )}
                    </div>

                    {/* HELPCENTER MENU */}

                    <div className={style.navbar_container_right_help}>
                        <p onClick={(e) => openMenu(e)}>Help Center</p>
                        {help && (
                            <div
                                className={
                                    style.navbar_container_right_help_box
                                }
                            >
                                <HelpCentre />
                            </div>
                        )}
                    </div>

                    {/* NOTIFICATION */}
                    <div className={style.navbar_container_right_notify}>
                        <MdNotifications
                            className={style.notify}
                            onClick={() => openNotification()}
                        />
                        {notification && <Notification />}
                    </div>

                    {/* CREATE BUTTON SECTION */}

                    <div className={style.navbar_container_right_button}>
                        <Button btnName="Create" handleClick={() => {}}/>
                    </div>

                    {/* USER PROFILE */}

                    <div className={style.navbar_container_right_profile_box}>
                        <div className={style.navbar_container_right_profile}>
                            <Image
                                src={images.user1}
                                alt="Profile"
                                width={40}
                                height={40}
                                onClick={() => openProfile()}
                                className={style.navbar_container_right_profile}
                            />

                            {profile && <Profile />}
                        </div>
                    </div>

                    {/* MENU BUTTON */}

                    <div className={style.navbar_container_right_menuBtn}>
                        <CgMenuRight
                            className={style.menuIcon}
                            onClick={() => openSideBar()}
                        />
                    </div>
                </div>
            </div>

            {/* SIDEBAR COMPONENT */}

            {openSideMenu && (
                <div className={style.sideBar}>
                    <SideBar setOpenSideMenu={setOpenSideMenu} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
