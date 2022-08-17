import { ethers } from "hardhat";

const main = async () => {
  const Link = await ethers.getContractFactory("Link");
  const token1 = await Link.deploy();
  await token1.deployed();

  const W3B = await ethers.getContractFactory("W3B");
  const token2 = await W3B.deploy();
  await token2.deployed();

  const Swap = await ethers.getContractFactory("Swap");
  const swap = await Swap.deploy(token1.address, token2.address);

  await swap.deployed();

  console.log("Swap Contract deployed to:", swap.address);

  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
