const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // Deploy SmellToken
  const SmellToken = await hre.ethers.getContractFactory("SmellToken");
  const smellToken = await SmellToken.deploy();
  await smellToken.waitForDeployment();
  const smellTokenAddress = await smellToken.getAddress();
  console.log("SmellToken deployed to:", smellTokenAddress);

  // Deploy SmellCheckmate with SmellToken address as constructor argument
  const SmellCheckmate = await hre.ethers.getContractFactory("SmellCheckmate");
  const smellCheckmate = await SmellCheckmate.deploy(smellTokenAddress, { gasLimit: 3000000 }); // Explicit gas limit
  await smellCheckmate.waitForDeployment();
  const smellCheckmateAddress = await smellCheckmate.getAddress();
  console.log("SmellCheckmate deployed to:", smellCheckmateAddress);

  // Transfer 1000 $SMELL to SmellCheckmate
  const amountToTransfer = hre.ethers.parseEther("1000");
  await smellToken.transfer(smellCheckmateAddress, amountToTransfer, { gasLimit: 100000 });
  console.log("Transferred 1000 $SMELL to SmellCheckmate");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });