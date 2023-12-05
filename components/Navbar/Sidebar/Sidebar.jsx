import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
    TiSocialFacebook,
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiArrowSortedDown,
    TiArrowSortedUp,
} from "react-icons/ti";
import style from "./Sidebar.module.css";
import images from "@/images";
// import { Button } from "@/components/ComponentIndex";
import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu }) => {
    // ------USESTATE
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    // DISCOVER NAVIGATION MENU

    const discover = [
        {
            name: "Collection",
            link: "collection",
        },

        {
            name: "Search",
            link: "search",
        },

        {
            name: "Author Profile",
            link: "author-profile",
        },

        {
            name: "Connect Wallet",
            link: "connect-wallet",
        },

        {
            name: "Account Setting",
            link: "account-setting",
        },

        {
            name: "Blog",
            link: "blog",
        },
    ];

    // HELP CENTER

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

    // DISCOVER MENU

    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true);
        } else {
            setOpenDiscover(false);
        }
    };

    // OPENHELP

    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true);
        } else {
            setOpenHelp(false);
        }
    };

    // CLOSE SIDE BAR

    const closeSideBar = () => {
        setOpenSideMenu(false);
    };

    return (
        <div className={style.sideBar}>
            <GrClose
                className={style.sideBar_closeBtn}
                onClick={() => closeSideBar()}
            />

            <div className={style.sideBar_box}>
                <Image src={images.logo} alt="logo" width={150} height={150} />
                <p>Discover ways to make the World Green!</p>
                <div className={style.sideBar_social}>
                    <a href="">
                        <TiSocialFacebook />
                    </a>

                    <a href="">
                        <TiSocialInstagram />
                    </a>

                    <a href="">
                        <TiSocialLinkedin />
                    </a>

                    <a href="">
                        <TiSocialTwitter />
                    </a>

                    <a href="">
                        <TiSocialYoutube />
                    </a>
                </div>
            </div>

            <div className={style.sideBar_menu}>
                <div>
                    <div
                        className={style.sideBar_menu_box}
                        onClick={() => openDiscoverMenu()}
                    >
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>

                    {openDiscover && (
                        <div className={style.sideBar_discover}>
                            {discover.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${el.link}` }}>
                                        {el.name}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <div
                        className={style.sideBar_menu_box}
                        onClick={() => openHelpMenu()}
                    >
                        <p>Help Center</p>
                        <TiArrowSortedDown />
                    </div>

                    {openHelp && (
                        <div className={style.sideBar_discover}>
                            {helpCenter.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{ pathname: `${el.link}` }}>
                                        {el.name}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={style.sideBar_button}>
                <Button btnName="Create" handleClick={() => {}}></Button>
                <Button btnName="Connect Wallet" handleClick={() => {}}></Button>
            </div>
        </div>
    );
};

// 1.15/1.25

export default SideBar;
