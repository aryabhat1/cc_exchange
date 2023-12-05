import React from "react";
import Image from "next/image";

// INTERNAL IMPORTS
import style from "./Service.module.css";
import images from "@/images";

const Service = () => {
    return (
        <div className={style.service}>
            <div className={style.service_box}>
                <div className={style.service_box_item}>
                    <Image
                        src={images.service1}
                        alt="Filter & Discover"
                        height={100}
                        width={100}
                    />

                    <p className={style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>

                    <h3>Filter & Discover</h3>
                    <p>
                        Connect with wallet, discover, buy or sell Carbon Credit
                        and earn money
                    </p>
                </div>

                <div className={style.service_box_item}>
                    <Image
                        src={images.service2}
                        alt="Filter & Discover"
                        height={100}
                        width={100}
                    />

                    <p className={style.service_box_item_step}>
                        <span>Step 2</span>
                    </p>

                    <h3>Connect Wallet</h3>
                    <p>
                        Connect with wallet, discover, buy or sell Carbon Credit
                        and earn money
                    </p>
                </div>

                <div className={style.service_box_item}>
                    <Image
                        src={images.service3}
                        alt="Filter & Discover"
                        height={100}
                        width={100}
                    />

                    <p className={style.service_box_item_step}>
                        <span>Step 3</span>
                    </p>

                    <h3>Start Trading</h3>
                    <p>
                        Connect with wallet, discover, buy or sell Carbon Credit
                        and earn money
                    </p>
                </div>

                <div className={style.service_box_item}>
                    <Image
                        src={images.service4}
                        alt="Filter & Discover"
                        height={100}
                        width={100}
                    />

                    <p className={style.service_box_item_step}>
                        <span>Step 4</span>
                    </p>

                    <h3>Earn and Enjoy</h3>
                    <p>
                        Connect with wallet, discover, buy or sell Carbon Credit
                        and earn money
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Service;
