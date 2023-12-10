import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

//INTERNAL IMPORTS
import { NFTMarketPlaceAddress, NFTMarketPlaceABI } from "./constants";
export const NFTMarketPlaceContext = React.createContext();

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) =>
    new ethers.Contract(
        NFTMarketPlaceABI,
        NFTMarketPlaceAddress,
        signerOrProvider
    );

// CONNECTING WITH SMART CONTARCT
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract.");
    }
};

export const NFTMarketPlaceProvider = ({ children }) => {
    const titleData = "Discover, collect and sell NFTs";

    // ----USESTATE
    const [currentAccount, setCurrentAccount] = useState("");

    // ---CHECK IF WALLET IS CONNECTED
    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask");
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                setCurrentAccount(account[0]);
            } else {
                console.log("No Account Found");
            }
        } catch (error) {
            console.log("Unable to connect wallet");
        }
    };

    // CONNECT WALLET FUNCTION
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install your wallet");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccount",
            });

            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log("Error while connecting to wallet.");
        }
    };

    const checkContract = async () => {
        const contract = await connectingWithSmartContract();
        console.log(contract);
    };

    // UPLOAD TO IPFS FUNCTION
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({ content: file });
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;

            return url;
        } catch (error) {
            console.log("Error Uploading to IPFS");
        }
    };

    // CREATE CARBON CREDIT NFT FUNCTION
    const createNFT = async (formInput, fileUrl, router) => {
        const { name, description, price } = formInput;

        if (!name || !description || !price || !fileUrl)
            return console.log("Data is missing");

        const data = JSON.stringify({ name, description, image: fileUrl });

        try {
            const added = await client.add(data);
            const url = `http://ipfs.infura.io/ipfs/${added.path}`;

            await createSale(url, price);
        } catch (error) {
            console.log(error);
        }
    };

    // CREATE SALE FUNCTION
    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();

            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling
                ? await contract.createToken(url, price, {
                      value: listingPrice.toString(),
                  })
                : await contract.reSellToken(url, price, {
                      value: listingPrice.toString(),
                  });

            await transaction.wait();
        } catch (error) {
            console.log("Error while creating Sale");
        }
    };

    // FETCH NFTS FUNCTION

    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItem();

            // console.log(data);

            const items = await Promise.all(
                data.map(
                    async ({
                        tokenId,
                        seller,
                        owner,
                        price: unformattedPrice,
                    }) => {
                        const tokenURI = await contract.tokenURI(tokenId);

                        const {
                            data: { image, name, description },
                        } = await axios.get(tokenURI);

                        const price = ethers.utils.formatUnits(
                            unformattedPrice.toString(),
                            "ether"
                        );
                        return {
                            price,
                            tokenId: tokenId.toNumber(),
                            seller,
                            owner,
                            image,
                            name,
                            description,
                            tokenURI,
                        };
                    }
                )
            );
            return items;
        } catch (error) {
            console.log("Error while fetching NFTS");
        }
    };

    // FETCH MY NFT OR LISTED NFT 38.14 OF 1.01 HR, 09-12-2023

    return (
        // <NFTMarketPlaceContext.Provider value={{ checkContract }}>
        <NFTMarketPlaceContext.Provider
            value={{
                // checkIfWalletConnected,
                connectWallet,
                uploadToIPFS /* titleData */,
                createNFT,
                fetchNFTs,
            }}
        >
            {children}
        </NFTMarketPlaceContext.Provider>
    );
};
