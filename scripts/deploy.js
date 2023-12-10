const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);
    const NFTMarketPlace = await ethers.deployContract("NFTMarketPlace");
    console.log("NFTMarketPlace address: ", await NFTMarketPlace.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
