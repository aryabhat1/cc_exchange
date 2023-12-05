import React from "react";
import Image from "next/image";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

//INTERNAL IMPORT
import style from "./Footer.module.css";
import images from "@/images";
import { Discover, HelpCentre } from "../Navbar/index";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer_box}>
                <div className={style.footer_box_social}>
                    <Image
                        src={images.logo}
                        alt="footer logo"
                        height={100}
                        width={100}
                    />
                    <p>
                        The world's first and largest digital exchange to trade
                        carbon-credits.
                    </p>

                    <div className={style.footer_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                    </div>
                </div>

                <div className={style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover />
                </div>
                <div className={style.footer_box_help}>
                    <h3>Help Center</h3>
                    <HelpCentre />
                </div>

                <div className={style.subscribe}>
                    <h3>Subscribe</h3>

                    <div className={style.subscribe_box}>
                        <input
                            type="email"
                            placeholder="Enter your email *"
                        ></input>
                        <RiSendPlaneFill className={style.subscribe_box_send} />
                    </div>
                    <div className={style.subscribe_box_info}>
                        <p>
                            Discover, collect and sell Carbon Credits on a very
                            reliable platform. Get Richer as the world gets Greener!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
