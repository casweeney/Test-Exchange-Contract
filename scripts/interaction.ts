import { ethers } from "hardhat";

const main = async () => {

    //const stakingJuliet = await ethers.getContractAt("IStaking", "0x5C8f5D80FD653a885832dF5c1f09978C81A8cDC4");

    ////// Alternative way of interactng with a deployed contract without using Contract Interface /////
    // const StakingJuliet = await ethers.getContractFactory("Staking");
    // const stakingJuliet = StakingJuliet.attach("0x5C8f5D80FD653a885832dF5c1f09978C81A8cDC4");

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
