import React, { useEffect, useState } from "react";
import Image from "next/image";

// INTERNAL IMPORTS
import style from "../styles/connectWallet.module.css";
import images from "@/images";

const connectWallet = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const provideArray = [
        {
            provider: images.provider1,
            name: "Metamask",
        },

        {
            provider: images.provider2,
            name: "Wallet Connect",
        },

        {
            provider: images.provider3,
            name: "Trust Wallet",
        },

        {
            provider: images.provider1,
            name: "Wallet Link",
        },
    ];

    return (
        <div className={style.connectWallet}>
            <div className={style.connectWallet_box}>
                <h1>Connect your wallet</h1>
                <p className={style.connectWallet_box_para}>
                    Connect with one of the available wallet providers or create
                    a new one.
                </p>

                <div className={style.connectWallet_box_provider}>
                    {provideArray.map((el, i) => (
                        <div
                            className={`${
                                style.connectWallet_box_provider_item
                            } ${activeBtn == i + 1 ? style.active : ""}`}
                            key={i + 1}
                            onClick={() => setActiveBtn(i + 1)}
                        >
                            <Image
                                src={el.provider}
                                alt={el.provider}
                                width={50}
                                height={50}
                                className={
                                    style.connectWallet_box_provider_item_img
                                }
                            ></Image>
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default connectWallet;
