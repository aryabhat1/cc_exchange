import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//2.42/39

// INTERNAL IMPORT
import style from "./CC_Slider.module.css";
import images from "@/images";
// import { Button } from '../ComponentIndex'
import Button from "../Button/Button";

const CC_Slider = () => {
    const [idNumber, setIdNumber] = useState(0);

    const sliderData = [
        {
            title: "Kochi CC",
            id: 1,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft1,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Thiru Naga CC",
            id: 2,
            name: "Nagaswami Putaro",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user2,
            nftImage: images.nft2,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Chittor Anand CC",
            id: 3,
            name: "Sanjeev Singh",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user3,
            nftImage: images.nft3,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Hello NFT",
            id: 4,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft1,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Hello NFT",
            id: 5,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft5,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Kochi CC",
            id: 1,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft6,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Kochi CC",
            id: 1,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft7,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Kochi CC",
            id: 1,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft8,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

        {
            title: "Kochi CC",
            id: 1,
            name: "Alfred D'Souza",
            collection: "GYM",
            price: "00000065456 ETH",
            like: 243,
            images: images.user1,
            nftImage: images.nft9,
            time: {
                days: 27,
                hours: 10,
                minutes: 15,
                seconds: 25,
            },
        },

    ];

    // INC FUNCTION
    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length]);

    // DEC FUNCTION
    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    return (
        <div className={style.CC_Slider}>
            <div className={style.CC_Slider_box}>
                <div className={style.CC_Slider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={style.CC_Slider_box_left_creator}>
                        <div
                            className={style.CC_Slider_box_left_creator_profile}
                        >
                            <Image
                                className={
                                    style.CC_Slider_box_left_creator_profile_img
                                }
                                src={sliderData[idNumber].images}
                                alt="profile image"
                                width={50}
                                height={50}
                            />
                            <div
                                className={
                                    style.CC_Slider_box_left_creator_profile_info
                                }
                            >
                                <p>Creator</p>
                                <h4>
                                    {sliderData[idNumber].name}{" "}
                                    <span>
                                        <MdVerified />
                                    </span>
                                </h4>
                            </div>
                        </div>

                        <div
                            className={
                                style.CC_Slider_box_left_creator_collection
                            }
                        >
                            <AiFillFire
                                className={
                                    style.CC_Slider_box_left_creator_collection_icon
                                }
                            />

                            <div
                                className={
                                    style.CC_Slider_box_left_creator_collection_info
                                }
                            >
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={style.CC_Slider_box_left_bidding}>
                        <div className={style.CC_Slider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>
                                {sliderData[idNumber].price} <span>$12.00</span>
                            </p>
                        </div>

                        <p
                            className={
                                style.CC_Slider_box_left_bidding_box_auction
                            }
                        >
                            <MdTimer
                                className={
                                    style.CC_Slider_box_left_bidding_box_icon
                                }
                            />
                            <span>Auction ending in</span>
                        </p>

                        <div
                            className={
                                style.CC_Slider_box_left_bidding_box_timer
                            }
                        >
                            <div
                                className={
                                    style.CC_Slider_box_left_bidding_box_timer_item
                                }
                            >
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div
                                className={
                                    style.CC_Slider_box_left_bidding_box_timer_item
                                }
                            >
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div
                                className={
                                    style.CC_Slider_box_left_bidding_box_timer_item
                                }
                            >
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>mins</span>
                            </div>

                            <div
                                className={
                                    style.CC_Slider_box_left_bidding_box_timer_item
                                }
                            >
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>secs</span>
                            </div>
                        </div>

                        <div className={style.CC_Slider_box_left_button}>
                            <Button btnName="Place" handleClick={() => {}} />
                            <Button btnName="View" handleClick={() => {}} />
                        </div>
                    </div>

                    <div className={style.CC_Slider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={style.CC_Slider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />

                        {/* <div className={style.CC_Slider_box_left_sliderBtn}> */}
                        <TbArrowBigRightLine
                            className={style.CC_Slider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>

                <div className={style.CC_Slider_box_right}>
                    <div className={style.CC_Slider_box_right_box}>
                        <Image
                            src={sliderData[idNumber].nftImage}
                            alt="NFT IMAGE OF CARBON CREDIT"
                            className={style.CC_Slider_box_right_box_img} width={735} height={720}
                        />

                        <div className={style.CC_Slider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CC_Slider;
