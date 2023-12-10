import React, { useContext, useEffect } from "react";

// INTERNAL IMPORT
import style from "../styles/index.module.css";
import {
    HeroSection,
    Service,
    CC_Slider,
    Subscribe,
} from "@/components/ComponentIndex";
import { NFTMarketPlaceContext } from "@/Context/NFTMarketPlaceContext";

const Home = () => {
    return (
        <div className={style.homePage}>
            <HeroSection />
            <Service />
            <CC_Slider />
            <Subscribe />
        </div>
    );
};

export default Home;
