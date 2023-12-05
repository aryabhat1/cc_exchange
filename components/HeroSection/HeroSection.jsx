import React from "react";
import Image from 'next/image';

// INTERNAL IMPORTS
import style from "./HeroSection.module.css";
import { Button } from "../ComponentIndex";
import images from "@/images";


const HeroSection = () => {
    return (
        <div className={style.heroSection}>
            <div className={style.heroSection_box}>
                <div className={style.heroSection_box_left}>
                    <h1>Most popular Exchange in the World to trade Carbon Credit</h1>
                    <p>Discover the most boomy Carbon credits available. Enjoy your earning without any efforts and investment and let the environment thrive</p>
                    <Button btnName="Start your search"/>


                </div>
                <div className={style.heroSection_box_right}>
                    <Image src={images.hero1}  alt="Hero Section" width={500} height={500}/>

                </div>


            </div>


        </div>
    )
};

export default HeroSection;
