const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy WrappedSmellToken
  const WrappedSmellToken = await hre.ethers.getContractFactory("WrappedSmellToken");
  const wrappedSmellToken = await WrappedSmellToken.deploy();
  await wrappedSmellToken.waitForDeployment();
  const wrappedSmellTokenAddress = await wrappedSmellToken.getAddress();
  console.log("WrappedSmellToken deployed to:", wrappedSmellTokenAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });